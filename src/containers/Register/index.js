import React from "react";
import logo from "../../asset/udana.81589961.png";

const Register = () => {
  return (
      <section class="bg-kuning py-4">
        <div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-12">
		          <form class="form register">  
		          	<div class="title1 mt-3">
		          		<p class="text-center">Bergabunglah dengan jutaan investor lainnya</p>
		          	</div>
		          	<a href="/">
		          		<img className="img mb-3 mt-3" src={logo} alt=""/>
		          	</a>
		          	<div class="row mb-3">
		          		<div class="col">
					      <label>Email</label>
					      <input type="email" class="form-control"/>
					    </div>
					    <div class="col">
					      <label>Nama lengkap (Sesuai KTP)</label>
					      <input type="text" class="form-control"/>
					    </div>
					</div>
					<div class="row mb-3">
		          		<div class="col">
					      <label>Kata sandi</label>
					      <input type="password" class="form-control"/>
					    </div>
					    <div class="col">
					      <label>Username</label>
					      <input type="text" class="form-control"/>
					    </div>
					</div>
					<div class="row mb-3">
		          		<div class="col">
					      <label>Ulangi kata sandi</label>
					      <input type="password" class="form-control"/>
					    </div>
					    <div class="col">
					      <label>Nomor Ponsel</label>
					      <input type="text" class="form-control"/>
					    </div>
					</div>
					<div class="form-group mb-1">
						<div class="form-check">
					      <input class="form-check-input" type="checkbox" id="gridCheck"/>
					      <label class="form-check-label" for="gridCheck">
					        Saya setuju dengan Syarat & Ketentuan
					      </label>
					    </div>
					 </div>
					<div class="form-group mb-4">
						<div class="form-check">
					      <input class="form-check-input" type="checkbox" id="gridCheck"/>
					      <label class="form-check-label" for="gridCheck">
					        Saya setuju dengan Kebijakan Privasi
					      </label>
					    </div>
					 </div>
					<hr/>
  					<button class="btn button-kuning mt-3" disabled type="submit">Daftar Akun</button>
		          </form>
		        </div>
				<div class="text-center">
					<p>Sudah punya akun? Silahkan
						<a class="btn btn-link" href="/Login">
		          			<u>Masuk disini</u>
		          		</a>
		          	</p>
				</div>
			</div>
        </div>
      </section>
    );
  };

export default Register;