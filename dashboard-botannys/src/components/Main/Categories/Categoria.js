import React, {useState, useEffect} from 'react';

function Categoria (){
    
    const [categorias, setCategorias] = useState([]) 
    
    useEffect(() => {
        obtenerCategoria()
    }, [])

    const obtenerCategoria = () => {
        fetch("http://localhost:3001/api/categories")
        .then(response => response.json())
        .then(json => {
            setCategorias(json.categorias)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <>
                {
                    categorias.map((categoria, n) => {
                        return (
                            <div className="row">  
                                <div key={n} className="col-lg-6 mb-4" >
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            { categoria.name }
                                        </div>
                                    </div>
                                </div>
                            </div>          
                        )
                    })
                }
            </>
        
    );
}

export default Categoria;