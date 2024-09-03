import { MovieSearchDTO } from "../../DTO/MovieSearchDTO"

export interface IMovieSearchController {
   searchMovie(data: MovieSearchDTO): Promise<any>
}