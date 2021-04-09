import React from 'react';
import Categoria from './Categoria'

function Categories() {

    return (
        <div className="col-lg-6 mb-4" >						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categorias en base de datos</h6>
                </div>
                <div className="card-body">
                      
                        <Categoria />
                    
                </div>
            </div>
        </div>
    )
}

export default Categories;