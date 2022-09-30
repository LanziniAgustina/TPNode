'use strict' 

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('usuario', {
        id: {
            type: DataTypes.BIGINT, 
            autoIncrement: true, 
            primaryKey: true, 
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.BIGINT,
        },
        createdAt: { //este nombre se lo da por defecto, para renombrarlos hay que ponerle 'field' y el nombre que queremos
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            // field: 'created',
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        deletedAt: {
            type: DataTypes.DATE,
        }
    }, {
    paranoid: true, //elimina los registros de manera logica en el delete
    freezeTableName: true, //mantiene el nombre de la tabla en Usuario (como está definido acá) en vez crearlos como plural
})

Usuario.associate = models => { //Acá van las tablas intermedias

}

return Usuario

}

