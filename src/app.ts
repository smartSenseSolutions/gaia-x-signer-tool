import express, { Request, Response } from 'express'
// import swaggerUi from 'swagger-ui-express'
import bodyParser from 'body-parser'

// import * as swaggerDocument from './swagger.json'
// import { routes as routesV0 } from './routesV0'
// import { routesV1 } from './routesV1'
// import routes from './routes'

const app: express.Application = express()
// const port = process.env.PORT
// swaggerDocument.servers[0].url = process.env.HOST || `http://localhost:${port}`

app.get('/health', (req: Request, res: Response) => {
	return res.status(200).send('healthy')
})

// routes(app)
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// body-parser
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.all('/*', (req: Request, res: Response) => {
	console.log('Invalid Route Handler ', 'Invalid Route Fired : ' + req.path)
	return res.status(400).json({
		status: 400,
		message: 'Bad Request'
	})
})

export default app
