import React, { useEffect, useState } from 'react';
import Resourses from '../../../requests/Resourses';


function Card (titulo, cantidad, colorTexto, icono, color){
    
    const [data, setData] = useState({
        countUsers: 0,
        countProducts: 0
    });

    useEffect( () => {
        Resourses.usersAll().then(function(usuarios){

            Resourses.productAll().then(function(Productos){
                
                setData({countProducts : Productos.data.count, 
                    countUsers : usuarios.data.count
                   } ) 
               

            }) 
            
        })
            
       
    }, []
    )
    
    let cardDetail = [{  
       
        titulo:"Total de Productos",
        cantidad:data.countProducts,
        colorTexto:"text-xs font-weight-bold text-primary text-uppercase mb-1",
        icono:"fas fa-shopping-cart fa-2x text-gray-300",
        color:"card border-left-primary shadow h-100 py-2"
        },
        {
        titulo:"Total de Usuarios",
        cantidad:data.countUsers,
        colorTexto:"text-xs font-weight-bold text-warning text-uppercase mb-1",
        icono:"fas fa-user fa-2x text-gray-300",
        color:"card border-left-warning shadow h-100 py-2"
        }
     ]
     
	 return  ( 
        cardDetail.map((item,n)=>
		

		<div className="col-md-4 mb-4">
			<div className={item.color}>
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className={item.colorTexto}>{item.titulo}</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">{item.cantidad}</div>
						</div>
						<div className="col-auto">
							<i className={item.icono}></i>
						</div>
					</div>
				</div>
			</div>
		</div>)
    ) }

export default Card;