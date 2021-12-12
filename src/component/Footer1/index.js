import React, { Component } from "react";
import "../../index.css";
import logo from "../../asset/kominfo.png";
import logo1 from "../../asset/pse.48c9c695.png";
import logo2 from "../../asset/aludi.png";
import logo3 from "../../asset/iso27001.50835ee7.png";
import sosmed from "../../asset/instagram.ae467a00.png";
import sosmed1 from "../../asset/linkedin.af4a5098.png";


class Footer1 extends Component {
  render() {
    return (
            <section class="py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="row">
                      <div class="col-md-6">
                        <img className="img80"
                          src="data:image/png;base64,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"/>
                      </div>
                      <div class="col-md-6 size12">
                        <p>Jl. KH. Hasyim Ashari No.17, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, 10130</p>
                        <p>E: support@udana.id</p>
                        <p>W: 087709999430</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="row">
                      <div class="col-md-6">
                        <ul className="list-unstyled px-4">
                          <p>Perusahaan</p>
                          <li>
                            <a className="text-reset text-decoration-none" href="">
                              Tentang
                            </a>
                          </li>
                          <li>
                            <a className="text-reset text-decoration-none" href="">
                              Hubungi Kami
                            </a>
                          </li>
                          <li>
                            <a className="text-reset text-decoration-none" href="">
                              Syarat & Ketentuan
                            </a>
                          </li>
                          <li>
                            <a className="text-reset text-decoration-none" href="">
                              Kebijakan Privasi
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <ul className="list-unstyled px-4">
                          <p>Perusahaan</p>
                          <li>
                            <a className="text-reset text-decoration-none" href="">
                              Tentang
                            </a>
                          </li>
                          <li>
                            <a className="text-reset text-decoration-none" href="">
                              Hubungi Kami
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="row">
                      <div class="col-md-6">
                        <p>Sosial Media</p>
                        <div>
                          <span className="mx-2">
                            <a href="https://instagram.com/" target="_blank">
                              <img class="img50" src={sosmed}/>
                            </a>
                          </span>
                          <span className="mx-2">
                            <a href="https://www.linkedin.com/" target="_blank">
                              <img class="img50" src={sosmed1}/>
                            </a>  
                          </span>  
                        </div>
                      </div>
                      <div class="col-md-6">
                        <b>Didukung oleh</b>
                        <div class="row">
                          <div class="col">
                            <img src={logo}/>
                          </div>
                          <div class="col">
                            <img src={logo1}/>
                          </div>
                          <div class="col">
                            <img src={logo2}/>
                          </div>
                        </div>
                        <div class="row">
                          <img src={logo3}/>
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

export default Footer1;