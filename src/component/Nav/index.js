import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar, Form } from "react-bootstrap";
import "../../index.css";

const Navig = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="navbar navbar-expand-lg">
      <div className="container">
        <Navbar.Brand>
          <NavLink to="/" className="nav-item text-uppercase px-3 nav-link active">
            <img
              className='img50'
              src="https://udana.id/images/logo/udana-logo-white.f9ff6fcf.png"
            />
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0 float-left">
            <NavLink to="/" className="nav-item px-5 nav-link">Masuk</NavLink>
            <a class="btn btn-warning putih" href="">Mulai Daftar</a>
          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
    );
  };

export default Navig;