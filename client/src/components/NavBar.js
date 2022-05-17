import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HOME_ROUTE } from "../utils/consts";
import { Button, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="light" variant="light">
            <Container>
            <NavLink style= {{color:'black'}} to = {HOME_ROUTE}>TuningGarage</NavLink>
            {user.isAuth ?
                <Nav  style = {{color: 'grey'}}>
                    <Button variant={"outline-dark"} >Админ панель</Button>
                    <Button variant={"outline-dark"} className="ms-2">Войти</Button>
                </Nav>
            : 
                <Nav  style = {{color: 'grey'}}>
                
                    <Button variant={"dark"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
        
            }
            </Container>
        </Navbar>
    
    );
});

export default NavBar;