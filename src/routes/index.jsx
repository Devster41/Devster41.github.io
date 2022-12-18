import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from '../pages/home';

const Routing = props => {

    return (
        <Router>
            <Routes>
                <Route exact path="/Personal-Site" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default Routing;