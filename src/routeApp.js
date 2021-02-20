import React from 'react';
import {Routes , Route} from 'react-router-dom';
import {Home , Product ,About, Whops404, Services , Location} from './pages';


function App(){
    /**These routes are going to tell the router, which component to render, when location changes
     * check the nested routing in /about
     */
    return (
        <div>
            <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/about' element = {<About/>} >
             <Route path = 'services' element = {<Services />}/>
             <Route path = 'location' element = {<Location/>} />
            </Route>
            <Route path = '/product' element = {<Product/>} />
            <Route path = '*' element = {<Whops404 />} />
            </Routes>
        </div>
    )
}
export default App