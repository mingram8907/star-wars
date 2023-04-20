import React from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item name="home" />
                </Link>
                <Link to='/starships'>
                    <Menu.Item name="starships" />
                </Link>
            </Container>
        </Menu>
    )
}

export default NavBar;