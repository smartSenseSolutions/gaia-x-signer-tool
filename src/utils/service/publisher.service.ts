import { Kafka, KafkaConfig, Producer } from 'kafkajs'
import * as fs from 'fs'

const complianceTopicName = 'gaiaxComplianceCredential'
type KafkaCerts = {
	SSL_CA: string | Buffer
	SSL_CERTIFICATE: string | Buffer
	SSL_KEY: string | Buffer
}

export class PublisherService {
	private kafka: Kafka
	private VPProducer: Producer

	constructor() {
		const { SSL_CA, SSL_CERTIFICATE, SSL_KEY } = this.loadFromEnvOrDisk()
		const kafkaConfig: KafkaConfig = {
			brokers: process.env.KAFKA_BROKERS!.split(','),
			clientId: 'gx-wizard',
			ssl: {
				ca: SSL_CA,
				cert: SSL_CERTIFICATE,
				key: SSL_KEY
			}
		}
		this.kafka = new Kafka(kafkaConfig)
		this.VPProducer = this.kafka.producer()
		this.VPProducer.connect().then(() => {
			console.log('Connected to kafka')
			// VPProducer connected
		})
	}

	async publishVP(VP: any) {
		this.VPProducer.send({
			topic: complianceTopicName,
			messages: [{ key: VP.id, value: JSON.stringify(VP) }]
		}).then(() => {
			console.log('pushed VP on kafka {}', VP)
		})
	}

	private loadFromEnvOrDisk(): KafkaCerts {
		const output: KafkaCerts = { SSL_CA: '', SSL_CERTIFICATE: '', SSL_KEY: '' }
		output.SSL_CA = this.loadSingleFromEnvOrDisk(process.env.SSL_CA)
		output.SSL_KEY = this.loadSingleFromEnvOrDisk(process.env.SSL_KEY)
		output.SSL_CERTIFICATE = this.loadSingleFromEnvOrDisk(process.env.SSL_CERTIFICATE)
		return output
	}

	private loadSingleFromEnvOrDisk(envVar: string | undefined) {
		console.log('process.env.SSL_CA', process.env.SSL_CA)
		if (!!envVar && envVar.startsWith('-----BEGIN')) {
			console.log(`loaded ${Object.keys({ envVar })[0]} from env`)
			return envVar
			// eslint-disable-next-line no-extra-boolean-cast
		} else if (!!envVar) {
			const SSL_CERTIFICATE = fs.readFileSync(envVar)
			console.log(`loaded ${Object.keys({ envVar })[0]} from disk ${envVar}`)
			return SSL_CERTIFICATE
		} else {
			throw Error(`Unable to load ${Object.keys({ envVar })[0]}`)
		}
	}
}
