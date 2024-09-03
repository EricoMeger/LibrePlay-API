import { DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

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
