import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Menu tabular>
                <Link to='/'>
                <Menu.Item name="Home" />
                </Link>
                <Link to='/people'>
                <Menu.Item name="People" />
                </Link>
                <Link to='/planets'>
                <Menu.Item name="Planets" />
                </Link>
        </Menu>
    )
}
