import React from "react";
import "../../index.css";
import logo from "../../asset/udana.81589961.png";

const Login = () => {
  return (
      <section class="bg-kuning py-5">
        <div class="container py-5">
			<div class="row justify-content-center">
				<div class="col-md-12">
		          <form class="form login">  
		          	<div class="title1 mt-3">
		          		<p class="text-center">Bergabunglah dengan jutaan investor lainnya</p>
		          	</div>
		          	<a href="/">
		          		<img className="img mb-3 mt-3" src={logo} alt=""/>
		          	</a>
		          	<div class="form-group mb-3">
    					<label>Alamat Email</label>
    					<input type="email" class="form-control"/>
  					</div>
  					<div class="form-group mb-4">
    					<label>Kata Sandi</label>
    					<input type="password" class="form-control"/>
  					</div>
  					<button class="btn button-kuning mb-3" disabled type="submit">Login</button>
  					<hr class="hr"/>
  					<p class="text-center">
  						<a class="btn btn-link" href="/">Lupa kata sandi?</a>
  					</p>
		          </form>
				</div>
				<div class="text-center mb-3">
					<p>Belum punya akun?
		          		<a class="btn btn-link" href="/Register">
		          			<u>Daftar disini</u>
		          		</a>
		          	</p>
				</div>
			</div>
        </div>
      </section>
    );
  };

export default Login;