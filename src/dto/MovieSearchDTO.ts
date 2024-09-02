
export interface MovieDTO {
    id?: number; 
    titulo?: string;
    data_lancamento?: Date;
    duracao?: number; 
    sinopse?: string;
    classificacao?: string;
    idioma?: string;
    pais_origem?: string;
    url_capa?: string;
    url_filme?: string;
    created_at?: Date; 
    updated_at?: Date;
    avaliacao?: number; 
}


export interface MovieSearchDTO {
    filme: MovieDTO;
}