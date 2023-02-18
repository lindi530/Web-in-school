import React, { Component } from 'react';
import Navbar from './navbar';

import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';
import NotFound from './notFound';

import { Route, Routes, Navigate } from 'react-router-dom';
import WebContent from './webContent';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='container'>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/linux' element={<Linux />}>
                            <Route path="a" element={<h1>A</h1>} />
                            <Route path="b" element={<h1>B</h1>} />
                            <Route path="*" element={<h1>Other</h1>} />
                        </Route>
                        <Route path='/django' element={<Django />} />
                        <Route path='/web' element={<Web />} />
                        <Route path='/web/content/:chapter' element={<WebContent />} />
                        <Route path='/404' element={<NotFound />} />
                        <Route path="*" element={ <Navigate replace to="/404" /> } />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;