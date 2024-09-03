import { IMovieSearchController } from "./interface/IMovieSearchController";
import { MovieSearchDTO } from "../DTO/MovieSearchDTO";
import MovieSearch from "../domain/use-cases/MovieSearch";

class MovieSearchController implements IMovieSearchController {

    private movieSearch: MovieSearch

    constructor() {
        this.movieSearch = new MovieSearch();
    }

    private async callUseCase(data: MovieSearchDTO) {
        return this.movieSearch.searchDatabase(data)
    }

    public async searchMovie(data: MovieSearchDTO): Promise<any> {
        return await this.callUseCase(data)
    }

} export default MovieSearchController