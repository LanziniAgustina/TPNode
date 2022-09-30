'use strict' 

module.exports = (sequelize, DataTypes) => {
    let Libro = sequelize.define('libro', {
        cod: {
            type: DataTypes.BIGINT, 
            autoIncrement: true, 
            primaryKey: true, 
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        editorial: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ISBN: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        coleccion: {
            type: DataTypes.STRING,
        },
        autor: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        deletedAt: {
            type: DataTypes.DATE,
        },
        
    }, {
    paranoid: true, 
    freezeTableName: true, 
    })


Libro.associate = models => { //Acá van las tablas intermedias
    Libro.hasMany(models.usuario_libro)
}

return Libro

}