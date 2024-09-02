import { DatabaseSearchDTO } from "../../dto/DatabaseSearchDTO"

export interface IDatabaseSearchController {
   searchDatabase(data: DatabaseSearchDTO): Promise<any>
}