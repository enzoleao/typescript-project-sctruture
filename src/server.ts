import 'express-async-errors';
import cors from 'cors';
import * as dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import Routes from './routes/routes'
import { AppError } from './err/AppError';
import swaggerUi from  'swagger-ui-express';
import swaggerDocument from './swagger.json'
import { isAuthenticated } from './middleware/isAuthenticated';

dotenv.config()
const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(Routes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/swagger', (request: Request, response: Response) => {
  return response.sendFile(process.cwd() + "/src/swagger.json");
})
app.get("/docs", (request: Request, response: Response) => {
  return response.sendFile(process.cwd() + "/index.html");
})
app.use('/public', express.static('public'));
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          message: err.message
        })
      };
  
      return response.status(500).json({
        status: "error",
        message: `Internal server error. - ${err.message}`,
      });
    }
);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))