import React, { Component } from "react";
import "../../index.css";

class Section2 extends Component {
  render() {
    return (
            <section class="py-5">
              <div class="container">
                <div class="kotak">
                  <div class="row gambar2">
                    <div class="col md-5">
                      <div class="section1">
                        <div class="label">Kami siap<br/> membantu Anda</div>
                        <p>Apabila Anda ingin mengetahui lebih lanjut mengenai Udana. Silahkan menghubungi kami</p>
                      </div>
                    </div>

                    <div class="col-md-5">
                      <div class="section1">
                        <div class="label2">
                          <img src="https://udana.id/images/asset/icon-location.13aef6cf.png" alt=""/> PT Dana Rintis Indonesia
                        </div>
                        <p class="alamat">Jl. KH. Hasyim Ashari No.17, Petojo
                          <br/>Kecamatan Gambir, Kota Jakarta Pusat
                          <br/>Daerah Khusus Ibukota Jakarta, 10130
                        </p>
                        <div class="label2">
                          <img src="https://udana.id/images/asset/icon-message.54f1a65d.png" alt=""/> support@udana.id
                        </div>
                        <div class="label2">
                          <img src="https://udana.id/images/asset/icon-phone.696b3dcc.png" alt=""/> 087709999430
                        </div>
                      </div> 
                    </div>

                    <div class="col-md-2"></div>


                  </div>
                </div>
              </div>
            </section>
    )
  }
}

export default Section2;