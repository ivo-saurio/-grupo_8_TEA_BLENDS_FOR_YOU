import React, { useEffect, useState } from 'react';
import Resourses from '../../../requests/Resourses';


function   Card (titulo, cantidad, icono){
    
    const [data, setData] = useState({
        countUsers: 0,
        countCategoria: 0,
        countProducts: 0
    });

    useEffect( () => {
        Resourses.usersAll().then(function(usuarios){
            Resourses.productAll().then(function(Productos){
                
                setData({countProducts : Productos.data.count, 
                    countUsers : usuarios.data.count,
                   } ) 
               

            }) 
            
        })
            
       
    }, []
    )
    
    let cardDetail = [{  
       
        titulo:"Productos en base de datos",
        cantidad:data.countProducts,
        icono:"fas fa-shopping-cart fa-2x text-gray-300"
        },
        {
        titulo:"Usuarios en base de datos",
        cantidad:data.countUsers,
        icono:"fas fa-user fa-2x text-gray-300"
        }
     ]

	 return  ( 
        cardDetail.map((item,n)=>
		<div className="row">

		{/* <!-- Amount of Products in DB -->*/}
		<div className="col-md-4 mb-4">
			<div className="card border-left-primary shadow h-100 py-2">
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{item.titulo}</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">{item.cantidad}</div>
						</div>
						<div className="col-auto">
							<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>					    
		)
    ) }

export default Card;