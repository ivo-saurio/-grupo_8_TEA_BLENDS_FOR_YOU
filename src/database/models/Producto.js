module.exports = function(sequelize, dataTypes){
    let alias = 'Productos';
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
        image: {
            type: dataTypes.STRING,
            notNull: true
        },
        size: {
            type: dataTypes.STRING,
            notNull: true
        },
        price: {
             type: dataTypes.INTEGER,
             notNull: true
        },
        id_categorias: {
            type:dataTypes.INTEGER,
            notNull: true
        }
        
    }

    let config = {
        tableName: 'productos',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Categorias, {
            as: 'categoriaProducto',
            foreignKey: 'id_categorias'
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