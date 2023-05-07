import { Request, Response } from "express"
import { createUserRequestDTO } from "../../dtos/createUserRequestDTO";
import { CreateUserUseCase } from "./createUser.usecase";
import { UserRepository } from "../../repositories/implementations/User.repository";

export class CreateUserController {

    async handle (req: Request, res: Response): Promise<Response>{
        const createUserUseCase = new CreateUserUseCase(
            new UserRepository,
          );
        
        const {
          email,
          name,
          password,
          birthday
        } = req.body as createUserRequestDTO;

        const createEmployee = await createUserUseCase.execute({
          email,
          name,
          password,
          birthday
        })
        return res.status(201).json(createEmployee)
    }
}