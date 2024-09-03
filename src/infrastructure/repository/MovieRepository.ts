import { MovieSearchDTO } from '../../DTO/MovieSearchDTO'; 
import { IMovieRepository } from './interfaces/IMovieRepository'; 
import FilmeModel from '../models/FilmeModel'; 

class MovieRepository implements IMovieRepository {
    public async searchMovie(data: MovieSearchDTO) {
        try {
            const { filme } = data;
            const searchCriteria: any = {}; 
           
            Object.keys(filme).forEach((key) => {
                const value = filme[key as keyof typeof filme];
                if (value !== undefined) {
                    searchCriteria[key] = value;
                }
            });

            const movies = await FilmeModel.findAll({ where: searchCriteria });

            return movies; 
        } catch (error) {
            throw error; 
        }
    }
}

export default MovieRepository;
