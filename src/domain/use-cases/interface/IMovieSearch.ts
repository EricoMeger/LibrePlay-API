import { MovieSearchDTO } from "../../../DTO/MovieSearchDTO"

export interface IMovieSearch {
   searchDatabase(data: MovieSearchDTO): Promise<any>
}