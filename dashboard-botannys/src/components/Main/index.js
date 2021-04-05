import React from 'react';
import Card from './Card';
import LastProduct from './LastProduct';
import Categories from './Categories';

function Main(){
    return(
        
        <div className="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
			    <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
		    </div>
            
            <Card />
            
            <div className="row">    

                <LastProduct />
                <Categories />
            
            </div>
        </div>
    )
}

export default Main;