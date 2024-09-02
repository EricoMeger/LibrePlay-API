import { DataTypes } from "sequelize";
import sequelize from "../../database/db";

const GeneroModel = sequelize.define('genero', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default GeneroModel;
