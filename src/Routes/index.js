import React from 'react'
import { Routes as Routing, Route } from "react-router-dom";
import Home from './Home/Home'
import List from './List'
import Details  from './List/components/Details';
import OtherTest from './OtherTest'
import Favorites from './Favorites/Favorites';
//enrutamiento de cada una de las vistas 
export default function index() {
    return (
        <Routing> 
            <Route index element={<Home />} />
            <Route path="details" >
                <Route index element={<List />} />
                <Route path="character/:id" element={<Details />} />
            </Route>
            <Route path="other-test" >
                <Route index element={<OtherTest />} />
            </Route>
            <Route path="favorites" >
                <Route index element={<Favorites />} />
            </Route>
        </Routing>
    )
}
