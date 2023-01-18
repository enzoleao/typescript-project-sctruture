import express from 'express'
import { Router, Request, Response } from 'express';
import Routes from './routes/routes'


const app = express();
const PORT = 3000

app.use(express.json())
app.use(Routes)


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))