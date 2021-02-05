import React from 'react';
import { Nav_, NavLink_ } from './NavStyle';
import { navig } from '../../navig';

const Nav = () => {
    const renderLink = () => {
        return navig.map(({ name, route }) => (
            <NavLink_ key={route} to={route}>
                {name}
            </NavLink_>
        ));
    };
    return (
        <Nav_>
            {renderLink()}
        </Nav_>
    )
}

export default Nav;