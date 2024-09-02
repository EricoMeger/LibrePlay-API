import { DataTypes } from "sequelize";
import sequelize from "../../database/db";

const DiretorModel = sequelize.define('diretor', {
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

export default DiretorModel;
