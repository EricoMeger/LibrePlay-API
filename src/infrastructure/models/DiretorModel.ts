import { DataTypes } from "sequelize";
import sequelize from "../../shared/config/database";

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
