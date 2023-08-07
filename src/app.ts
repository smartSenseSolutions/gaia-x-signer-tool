import express, { Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import bodyParser from 'body-parser'
import routes from './routes'
import * as swaggerDocument from './swagger/swagger.json'
import { logger } from './utils/logger'
import middleware from './middleware'

const app: express.Application = express()
const port = process.env.PORT
swaggerDocument.servers[0].url = process.env.HOST || `http://localhost:${port}`

app.get('/health', (req: Request, res: Response) => {
	return res.status(200).send('healthy')
})
middleware(app)
// body-parser
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
routes(app)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.all('/*', (req: Request, res: Response) => {
	logger.error(__filename, 'Invalid Route Handler ', 'Invalid Route Fired : ' + req.path, req.custom.uuid)
	return res.status(400).json({
		status: 400,
		message: 'Bad Request'
	})
})

export default app
