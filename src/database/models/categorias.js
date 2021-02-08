module.exports = function(sequelize, dataTypes){
    let alias = 'Categoria';
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
        }

        let config = {
            tableName: 'categorias',
            timestamps: false
        }

        const Categoria = sequelize.define(alias, cols, config);

            Categoria.associate= function(models) {
         Categoria.hasMany(models.Producto, {
             as: 'productoCategoria',
             foreignKey: 'id_categorias'
         })
     }

    return Categoria;
        }

        