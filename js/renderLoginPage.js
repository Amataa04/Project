function renderLoginPage(){
    document.getElementById("body").innerHTML = `
            <div class="d-flex justify-content-center vh-100">
                <form>
					<div class="title mb-xl-3 d-flex justify-content-center">
						<h2>Đăng nhập</h2>
					</div>
					<div class="mb-xl-3">
						<label for="email" class="form-label"><Strong>Email address</Strong></label>
						<input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
					</div>
					<div class="mb-xl-3">
						<label for="password" class="form-label"><Strong>Password</Strong></label>
						<input type="password" class="form-control" id="password"/>
					</div>
					<div class="button mt-xl-4 d-flex justify-content-center">
						<button type="button" class="btn btn-primary" onclick="login()">Đăng nhập</button>
					</div>
				</form>
            </div>`;
}