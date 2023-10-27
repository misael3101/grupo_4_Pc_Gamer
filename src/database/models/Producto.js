module.exports = (sequelize, DataTypes) => {

    let alias = "Productos";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        imagen: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.FLOAT
        }
    };

    let config = {
        tableName: "productos",
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);

    return Producto
}

