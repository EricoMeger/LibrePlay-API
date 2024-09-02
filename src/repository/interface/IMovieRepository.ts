import { MovieSearchDTO } from '../../dto/MovieSearchDTO'; 

export interface IMovieRepository {
    searchMovie(data: MovieSearchDTO): Promise<any>;
}