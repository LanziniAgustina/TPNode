'use strict' 

module.exports = (sequelize, DataTypes) => {
    let UsuarioLibro = sequelize.define('usuario_libro', {
        id: {
            type: DataTypes.BIGINT, 
            autoIncrement: true, 
            primaryKey: true, 
            allowNull: false
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


UsuarioLibro.associate = models => { //Acá van las tablas intermedias
    UsuarioLibro.belongsTo(models.usuario)
    UsuarioLibro.belongsTo(models.libro)
}

return UsuarioLibro

}