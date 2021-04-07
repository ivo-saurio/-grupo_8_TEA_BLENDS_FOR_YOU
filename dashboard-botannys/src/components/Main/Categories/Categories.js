import React, { useEffect, useState } from 'react';
import Resourses from '../../../requests/Resourses';


function Categories () {

    const [data, setData] = useState({
       categorias : []
      });

    useEffect( () => {
            
                Resourses.categorias().then(function(Categoria){
                    setData({categorias: Categoria.data.categorias})
                })
            }, []
        )

    return(
		data.categorias.map((item) =>
				<div className="col-lg-6 mb-4">
					<div className="card bg-info text-white shadow">
						<div className="card-body">
							{item.Categoria}
                            
						</div>
					</div>
				</div>
	
    ) )
}

export default Categories;