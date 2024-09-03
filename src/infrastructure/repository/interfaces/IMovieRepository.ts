import { MovieSearchDTO } from '../../../DTO/MovieSearchDTO'; 

export interface IMovieRepository {
    searchMovie(data: MovieSearchDTO): Promise<any>;
}