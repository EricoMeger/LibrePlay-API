import { DataTypes } from "sequelize";
import sequelize from "../../database/db";

const FilmeModel = sequelize.define('filme', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_lancamento: {
        type: DataTypes.DATE,
    },
    genero_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'genero',
            key: 'id'
        }
    },
    duracao: {
        type: DataTypes.FLOAT,
    },
    diretor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'diretor',
            key: 'id'
        }
    },
    sinopse: {
        type: DataTypes.TEXT,
    },
    classificacao: {
        type: DataTypes.STRING(10),
    },
    idioma: {
        type: DataTypes.STRING(50),
    },
    pais_origem: {
        type: DataTypes.STRING(100),
    },
    url_capa: {
        type: DataTypes.TEXT,
    },
    url_filme: {
        type: DataTypes.TEXT,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    avaliacao: {
        type: DataTypes.FLOAT,
    }
});

export default FilmeModel;
