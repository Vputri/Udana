import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar, Form } from "react-bootstrap";
import "../../index.css";
import logo from "../../asset/udana-logo-white.f9ff6fcf.png";

const Navig = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="navbar navbar-expand-lg">
      <div className="container">
        <Navbar.Brand>
          <NavLink to="/" className="nav-item px-3 nav-link active">
            <img
              className='img50'
              src={logo}
            />
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavLink to="/" className="nav-item px-5 nav-link">Masuk</NavLink>
            <a class="btn btn-warning putih" href="">Daftar</a>
          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
    );
  };

export default Navig;