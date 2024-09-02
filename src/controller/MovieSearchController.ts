import { IMovieSearchController } from "./interface/IMovieSearchController";
import { MovieSearchDTO } from "../dto/MovieSearchDTO";
import MovieSearchValidator from "../services/validator/MovieSearchValidator";
import MovieRepository from "../repository/MovieRepository";

class MovieSearchController implements IMovieSearchController {

    private movieSearchValidator: MovieSearchValidator;
    private movieRepository: MovieRepository;

    constructor() {
        this.movieSearchValidator = new MovieSearchValidator();
        this.movieRepository = new MovieRepository();
    }

    private validateFields(data: MovieSearchDTO) {
        return this.movieSearchValidator.validateFields(data.filme)
    }

    private findMovie(data: MovieSearchDTO) {
        return this.movieRepository.searchMovie(data)
    }

    public async searchDatabase(data: MovieSearchDTO): Promise<any> {
        let response = this.validateFields(data);
        if (response.sucess) {
            try {
                return {
                    sucess: true,
                    message: await this.findMovie(data)
                }
            } catch (error) {
                response.sucess = false
                response.message = "Error searching for movie"
                console.log(error)
            }
        }
        
        return response
    }


} export default MovieSearchController