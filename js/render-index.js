function renderClass(){
	let data = [{ id: 1, courseCode: "RA01", courseName: "Khóa học 1", courseTime: "1000", status: "Hoạt động"},
				{ id: 2, courseCode: "RA02", courseName: "Khóa học 2", courseTime: "2000", status: "Không hoạt động"},
				{ id: 3, courseCode: "RA03", courseName: "Khóa học 3", courseTime: "1500", status: "Hoạt động"},
				{ id: 4, courseCode: "RA04", courseName: "Khóa học 4", courseTime: "1000", status: "Hoạt động"},
				{ id: 5, courseCode: "RA05", courseName: "Khóa học 5", courseTime: "1000", status: "Hoạt động"},
				{ id: 6, courseCode: "RA06", courseName: "Khóa học 6", courseTime: "1000", status: "Hoạt động"},
				{ id: 7, courseCode: "RA07", courseName: "Khóa học 7", courseTime: "1000", status: "Hoạt động"},
				{ id: 8, courseCode: "RA08", courseName: "Khóa học 8", courseTime: "1000", status: "Hoạt động"},
				{ id: 9, courseCode: "RA09", courseName: "Khóa học 9", courseTime: "1000", status: "Hoạt động"},
				{ id: 10, courseCode: "RA10", courseName: "Khóa học 10", courseTime: "1000", status: "Hoạt động"}
	];
	localStorage.setItem("quanlikhoahoc", JSON.stringify(data));
	
	let _html = "";

	data.forEach((item, index) => {
		_html += `					<tr>
										<th scope="row">${index}</th>
										<td>${item.courseCode}</td>
										<td>${item.courseName}</td>
										<td>${item.courseTime}</td>
										<td>${item.status}</td>
										<td><button type="button" class="btn btn-outline-primary">Sửa</button></td>
										<td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
									</tr>`
	})
    document.getElementById("index").innerHTML = ` <!-- title 1 -->
						<div class="title1 d-flex justify-content-around">
							<h3>Quản lí khóa học</h3>
						</div>
						<!-- function -->
						<div class="function d-flex">
							<!-- add new -->
							<div class="add-new">
								<button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="addNewCourse()">Thêm mới</button>
								<span id="addNewCourse"></span>
							</div>
							<!-- search khóa học -->
							<div class="search input-group">
								<input type="text" class="form-control" placeholder="Nhập từ khóa học tìm kiếm" aria-label="Recipient's username" aria-describedby="button-addon2"/>
								<button class="btn btn-outline-secondary" type="button" id="search">Tìm kiếm</button>
							</div>
							<!-- Sort/Select -->
							<div class="Select">
								<div class="col-auto d-flex">
									<label for="sort" class="soft">Sắp xếp</label>
									<button type="button" class="btn-select btn btn-danger btn-sm">Lựa chọn</button>
								</div>
							</div>

						</div>
						<!-- table -->
						<div class="table-responsive mt-lg-2">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th scope="col">STT</th>
										<th scope="col">Mã khóa học</th>
										<th scope="col">Tên khóa học</th>
										<th scope="col">Thời gian (giờ)</th>
										<th scope="col">Trạng thái</th>
										<th scope="col" colspan="2">Hành động</th>
									</tr>
								</thead>
								<tbody>
								${_html}
								</tbody>
							</table>
						</div>
                        <!-- Pagination -->
						<div class="Pagination Page navigation example d-flex justify-content-end">
							<ul class="pagination">
								<li class="page-item"><a class="page-link" href="#">Previous</a></li>
								<li class="page-item"><a class="page-link" href="#">1</a></li>
								<li class="page-item"><a class="page-link" href="#">2</a></li>
								<li class="page-item"><a class="page-link" href="#">3</a></li>
								<li class="page-item"><a class="page-link" href="#">Next</a></li>
							</ul>
						</div>
                        `;




}

{/* <tr>
										<th scope="row">2</th>
										<td>RA02</td>
										<td>Khóa học 2</td>
										<td>2000</td>
										<td>Không Hoạt động</td>
										<td><button type="button" class="btn btn-outline-primary">Sửa</button></td>
										<td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td>RA03</td>
										<td>Khóa học 3</td>
										<td>1500</td>
										<td>Hoạt động</td>
										<td><button type="button" class="btn btn-outline-primary">Sửa</button></td>
										<td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
									</tr>
									<tr>
										<th scope="row">4</th>
										<td>RA04</td>
										<td>Khóa học 4</td>
										<td>1000</td>
										<td>Hoạt động</td>
										<td><button type="button" class="btn btn-outline-primary">Sửa</button></td>
										<td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
									</tr>
									<tr>
										<th scope="row">5</th>
										<td>RA05</td>
										<td>Khóa học 5</td>
										<td>1000</td>
										<td>Hoạt động</td>
										<td><button type="button" class="btn btn-outline-primary">Sửa</button></td>
										<td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
									</tr>
									<tr>
										<th scope="row">6</th>
										<td>RA06</td>
										<td>Khóa học 6</td>
										<td>1000</td>
										<td>Hoạt động</td>
										<td><button type="button" class="btn btn-outline-primary">Sửa</button></td>
										<td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
									</tr>
									<tr>
										<th scope="row">7</th>
										<td>RA07</td>
										<td>Khóa học 7</td>
										<td>1000</td>
										<td>Hoạt động</td>
										<td><button type="button" class="btn btn-outline-primary">Sửa</button></td>
										<td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
									</tr>
									<tr>
										<th scope="row">8</th>
										<td>RA08</td>
										<td>Khóa học 8</td>
										<td>1000</td>
										<td>Hoạt động</td>
										<td><button type="button" class="btn btn-outline-primary">Sửa</button></td>
										<td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
									</tr>
									<tr>
										<th scope="row">9</th>
										<td>RA09</td>
										<td>Khóa học 9</td>
										<td>1000</td>
										<td>Hoạt động</td>
										<td><button type="button" class="btn btn-outline-primary">Sửa</button></td>
										<td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
									</tr>
									<tr>
										<th scope="row">10</th>
										<td>RA10</td>
										<td>Khóa học 10</td>
										<td>1000</td>
										<td>Hoạt động</td>
										<td><button type="button" class="btn btn-outline-primary">Sửa</button></td>
										<td><button type="button" class="btn btn-outline-danger">Xóa</button></td>
									</tr> */}