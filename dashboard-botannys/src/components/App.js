import React from 'react';
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

function App() {
  return (
    <reactFragment>
      <div id="wrapper">
      
        <Sidebar/>

          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">

              <Header/>
              <Main />
              

            </div>
            <Footer/>
          </div>

        

      </div>
    </reactFragment>
  );
}

export default App;
