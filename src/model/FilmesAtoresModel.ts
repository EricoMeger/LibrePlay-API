import { DataTypes } from "sequelize";
import sequelize from "../../database/db";

const FilmesAtoresModel = sequelize.define('filmes_atores', {
    filme_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'filme',
            key: 'id'
        }
    },
    ator_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ator',
            key: 'id'
        }
    }
}, {
    timestamps: false,
});

export default FilmesAtoresModel;
