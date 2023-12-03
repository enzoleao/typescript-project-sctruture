import { Request, Response } from "express"
import { createUserRequestDTO } from "../../dtos/CreateUserDTO";
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
          birthday,
          username,
          number
        } = req.body as createUserRequestDTO;

        const createEmployee = await createUserUseCase.execute({
          email,
          name,
          password,
          birthday,
          username,
          number
        })
        return res.status(201).json(createEmployee)
    }
}