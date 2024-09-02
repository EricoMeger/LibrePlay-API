import { IDatabaseSearchController } from "./interface/IDatabaseSearchController";
import {DatabaseSearchDTO} from "../dto/DatabaseSearchDTO";

class DatabaseSearchController implements IDatabaseSearchController {

    public async searchDatabase(data: DatabaseSearchDTO): Promise<any> {
        return data
    }


} export default DatabaseSearchController