import React, {useState, useEffect } from 'react';
import LastProduct from './LastProduct';


function LastProductCard() {
	
	const [Ultimo, setUltimo] = useState(0);

	useEffect(() => {
        fetch("http://localhost:3001/api/onlyProducts")
            .then(res => res.json())
            .then(data => { 
				let producto = data[data.length -1]
				setUltimo(producto)
				console.log(producto);
			})

    }, [])

	

		return (
			<div className="row">
            <LastProduct
                    
			name = {Ultimo.name}
			description = {Ultimo.description}
			price = {Ultimo.price}
			id = {Ultimo.id}
               
            /> 
			</div>
		)

		
		}
		
export default LastProductCard;