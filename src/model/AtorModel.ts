import { DataTypes } from "sequelize";
import sequelize from "../../database/db";

const AtorModel = sequelize.define('ator', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default AtorModel;
