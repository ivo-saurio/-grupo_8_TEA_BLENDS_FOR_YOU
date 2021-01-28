module.exports = function(sequelize, dataTypes){
    let alias = 'Producto';
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
        description: {
            type: dataTypes.STRING,
            notNull: true
        },
        img: {
            type: dataTypes.STRING,
            notNull: true
        },
        id_categoria: {
            type:dataTypes.INTEGER,
            notNull: true
        }
        
    }

    let config = {
        tableName: 'producto',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Categoria, {
            as: 'categoriaDePelicula',
            foreignKey: 'id_categoria'
        })

    }

    return Producto;
};

//- id
//- name
//- description
//- items
//- price
//- img
//- id_categoria