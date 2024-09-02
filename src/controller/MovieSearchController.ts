import { IMovieSearchController } from "./interface/IMovieSearchController";
import {MovieSearchDTO} from "../dto/MovieSearchDTO";

class MovieSearchController implements IMovieSearchController {

    public async searchDatabase(data: MovieSearchDTO): Promise<any> {
        return data
    }


} export default MovieSearchController