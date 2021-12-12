import React, { Component } from "react";
import "../../index.css";

class Section1 extends Component {
  render() {
    return (
            <section class="py-5 gambar">
              <div class="container">
                <div class="row description py-5">
                  <div class="col-md-5">
                    <h1>
                      <b>Menjadi Investor <br/> UMKM itu gampang</b>
                    </h1>
                  </div>
                  <div class="col-md-3">
                    <div class="text-muted">Berinvestasi pada UMKM bisa dilakukan oleh siapa saja dan dimana saja.</div>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <img class="mb-3" src="https://udana.id/images/asset/step01.2a5ba443.png"/>
                    <div class="item-content">
                      <div class="one">
                        <h3 class="item-title">Pilih UMKM</h3> 
                        <div class="text-description">
                          <p>Temukan usaha yang anda minati pada galeri.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <img src="https://udana.id/images/asset/step02.4acbe514.png"/>
                    <div class="item-content">
                      <div class="two">
                        <h3 class="item-title">Analisa Bisnis</h3> 
                        <div class="text-description">
                          <p>Lakukan analisa profil bisnis dan pengusaha.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <img src="https://udana.id/images/asset/step03.9e86c054.png"/>
                    <div class="item-content">
                      <div class="tree">
                        <h3 class="item-title">Mulai Berinvestasi</h3> 
                        <div class="text-description">
                          <p>Menjadi investor startup dengan modal minimal 100.000 Rupiah.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    )
  }
}

export default Section1;