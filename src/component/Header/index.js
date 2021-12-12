import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";
import "../../index.css";
import Navig from "../Nav";

const Header = () => {
  return (
  <header class="background">
  	<Navig/>
    <div class="container px-5">
      <div class="row gx-5 align-items-center justify-content-center">
        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <div class="my-5 text-center text-xl-start">
            <h1 class="display-5 fw-bolder mb-4 kuning">Jadilah Investor UMKM & Waralaba</h1>
            <p class="lead fw-normal putih mb-5">
            	Temukan bisnis UMKM & Waralaba yang anda sukai dan mulai menjadi investor untuk kemajuan perekonomian bangsa tanpa perlu pusing dengan operasional sehari-hari
            </p>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
              <a class="btn btn-warning btn-lg px-4 me-sm-3 putih" href="">Investasi Sekarang &nbsp; ⟶</a>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-xxl-6 text-center">
        </div>
      </div>
    </div>
  </header>
    );
  };

export default Header;