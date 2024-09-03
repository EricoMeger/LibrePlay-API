import { IMovieSearchValidator } from '../interface/IMovieSearchValidator';
import { MovieDTO } from '../../DTO/MovieSearchDTO';
import { ValidatorResponse } from '../interface/IValidatorResponse';

class MovieSearchValidator implements IMovieSearchValidator{
    private static allowedFields: Set<keyof MovieDTO> = new Set([
        'id',
        'titulo',
        'data_lancamento',
        'duracao',
        'sinopse',
        'classificacao',
        'idioma',
        'pais_origem',
        'url_capa',
        'url_filme',
        'created_at',
        'updated_at',
        'avaliacao'
    ]);

    public validateFields(searchParams: Record<string, any>): ValidatorResponse {
        for (const key in searchParams) {
            if (!MovieSearchValidator.allowedFields.has(key as keyof MovieDTO)) {
                return {
                    sucess: false,
                    message: `Campo inválido encontrado: ${key}`
                }
            }
        }
        return {
            sucess: true,
            message: ""
        }
    }
} export default MovieSearchValidator
