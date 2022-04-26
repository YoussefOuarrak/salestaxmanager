import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import Productslist from './Productslist';
import Tutorial from './Tutorial';

class Main extends Component {

    /**
     * Routing Component
     * @returns 
     */
    render() {
        return (
            <div className='container'>
                <Routes >
                    <Route path='/' element={<Productslist />} />
                    <Route path='/tuto' element={<Tutorial />} />
                </Routes>
            </div>
        );
    }
}
export default Main;