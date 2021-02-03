module.exports = function(sequelize, dataTypes){
let alias = 'Usuario';
let cols = {
    id: {
        type: dataTypes.INTEGER,
        notNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: dataTypes.STRING,
        notNull: true
    },
    surname: {
        type: dataTypes.STRING,
        notNull: true
    },
    avatar: {
        type: dataTypes.STRING,
        notNull: false
    },
    email: {
        type: dataTypes.STRING,
        notNull: true
    },
    password: {
        type: dataTypes.STRING,
        notNull: true
    },
    id_rol: {
        type: dataTypes.INTEGER,
        alowNull: true
    },
}
let config = {
    tableName: 'usuarios',
    timestamps: false,
    underscored: true
}

const Usuario = sequelize.define(alias, cols, config);

Usuario.associate = function(models) {

   Usuario.belongsTo(models.Rol, {
    as: 'usuarioEsRol',
    foreignKey: 'id_rol'
  })

}

return Usuario;
}
















