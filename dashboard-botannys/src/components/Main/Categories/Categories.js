import React, {useState, useEffect} from 'react';

function Categories (){
    
    const [categorias, setCategorias] = useState([]) 
    
    useEffect(() => {
        obtenerCategoria()
    }, [])

    const obtenerCategoria = () => {
        fetch("http://localhost:3001/api/categorias")
        .then(response => response.json())
        .then(json => {
            setCategorias(json.categorias)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <div className="card-body">
            <div className="row">
                {
                    categorias.map((categoria) => {
                        return (
                            <div key={categoria.id} className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body">
                                        { categoria.name }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Categories;