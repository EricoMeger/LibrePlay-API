import { MovieSearchDTO } from "../../dto/MovieSearchDTO"

export interface IMovieSearchController {
   searchDatabase(data: MovieSearchDTO): Promise<any>
}