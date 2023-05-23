
import { AppError } from "../../../../err/AppError";
import { Location } from "@prisma/client";
import { ILocationRepository } from "../Location.repository";
import axios from "axios";
import { prisma } from "../../../../prisma";

export class LocationRepository implements ILocationRepository {
    async create({location, memoryId}: any): Promise<any> {
        console.log(memoryId)
        const response = await prisma.location.create({
            data: {
                memoryId: memoryId,
                city: location.city,
                state: location.state
            }
        })
        
        return response
    }
    delete(location: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(location: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async findList(location: string): Promise<any> {
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${location}&format=json&addressdetails=1`)

                const locations = response.data.map((data: any) => {
                const city = data.address.city || data.address.town || data.address.village || '';
                const state = data.address.state || '';
                const country = data.address.country || '';
                  return { city, state, country };
                });
                return locations;
          } 
          catch (error) {
            throw new AppError("Erro ao processar a solicitação.")
          }
      }
}