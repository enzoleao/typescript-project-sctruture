import express from 'express'
import Routes from './routes/routes'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(Routes)


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))