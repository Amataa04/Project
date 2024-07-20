function renderHomePage(){
    document.getElementById("HomePage").innerHTML = `<header class="d-flex align-items-lg-center">
			<!-- logo -->
			<div class="logo">
				<img src="./images/logo.png" alt="" />
			</div>
			<!-- title -->
			<div class="title">
				<h2>HỆ THỐNG SINH VIÊN RIKKEI</h2>
			</div>
			<!-- Đăng nhập / Đăng xuất -->
			<div class="login d-flex">
				<!-- show tên người dùng -->
				<span id="showUserLogin"></span>
				<div>
					<button type="button" class="btn btn-info btn-sm" onclick="logout()">Đăng xuất</button>
				</div>
			</div>
		</header>

		<main>
			<div class="container-fluid">
				<div class="row">
					<div class="list-group col-lg-3 p-5 main-border vh-100">
						<button type="button" onclick="renderClass()" class="list-group-item list-group-item-action">Quản lí khóa học</button>
						<button type="button" class="list-group-item list-group-item-action">Quản lí lớp học</button>
						<button type="button" class="list-group-item list-group-item-action">Quản lí sinh viên</button>
						<button type="button" class="list-group-item list-group-item-action">Quản lí tài khoản</button>
					</div>
					<div class="col-lg-9 main-border vh-100" id="index">

					</div>
				</div>
			</div>
		</main>
		<footer>
			<!-- place footer here -->
			<!-- Copyright Rikkei Academy @2023 -->
			<div class="link main-border d-flex justify-content-center align-items-center">
				<p>Copyright Rikkei Academy @2023</p>
			</div>
		</footer>
		<!-- Bootstrap JavaScript Libraries -->
		<script
			src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
			integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
			crossorigin="anonymous"
		></script>

		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
			integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
			crossorigin="anonymous"
		></script>
		<script src="./js/render-index.js"></script>
		<script src="./js/show-user-login.js"></script>`;
}