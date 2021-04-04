import React from 'react';
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <reactFragment>
      <div id="wrapper">
      
        <Sidebar/>

          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">

              <Header/>

              <Footer/>

            </div>
          </div>

      </div>
    </reactFragment>
  );
}

export default App;
