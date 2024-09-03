import { IMovieSearch } from "./interface/IMovieSearch";
import { MovieSearchDTO } from "../../DTO/MovieSearchDTO";
import MovieSearchValidator from "../../domain/services/MovieSearchValidator";
import MovieRepository from "../../infrastructure/repository/MovieRepository";

class MovieSearch implements IMovieSearch {

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
        console.log("chegou no search")
        let response = this.validateFields(data);
        if (response.sucess) {
            try {
                console.log("validou fields")
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


} export default MovieSearch