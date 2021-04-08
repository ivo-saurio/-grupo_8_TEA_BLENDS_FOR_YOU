import React, {useState, useEffect } from 'react';
import Card from './Card';


function MainCard() {

    const [usersAll, setUsersAll] = useState(0);
    const [productAll, setProductAll] = useState(0);
    const [categorias, setCategorias] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
            .then(res => res.json())
            .then(json => setProductAll(json.total))

    }, [])

    useEffect(() => {
        fetch("http://localhost:3001/api/users")
            .then(res => res.json())
            .then(json => setUsersAll(json.total))

    }, [])

    useEffect(() => {
        fetch("http://localhost:3001/api/categories")
            .then(res => res.json())
            .then(json => setCategorias(json.total))

    }, [])

    return (  
        <div className="row">
            <Card
                    
                titulo='Total de usuarios'
                cantidad= {usersAll}
                icono= 'fas fa-user-check fa-2x text-gray-300'
                color="card border-left-warning shadow h-100 py-2"
            />    
            <Card
                    
                titulo='Total de productos'
                cantidad= {productAll}
                icono= 'fas fa-clipboard-list fa-2x text-gray-300'
                color="card border-left-primary shadow h-100 py-2"
                />    

            <Card
                    
                titulo='Total de categorias'
                cantidad= {categorias}
                icono= 'fas fa-boxes fa-2x text-gray-300'
                color="card border-left-secondary shadow h-100 py-2"
                />        


        </div>  
    )
}

export default MainCard;