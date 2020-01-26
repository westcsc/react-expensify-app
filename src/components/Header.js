import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go to Home Page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go to Create Expense page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Go to Help Page</NavLink>
    </header>
);

export default Header;