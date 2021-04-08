import React from 'react';
import MainCard from './MainCard';
import LastProduct from './LastProduct';
import Categories from './Categories';


function Main(){
    return(
        
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
			    <h1 className="h3 mb-0 text-gray-800">Botannys Dashboard</h1>
		    </div>
            
            <MainCard />
            
            <div className="row">    
                <LastProduct />
                <Categories />         
            </div>
        </div>
    )
}

export default Main;