function addNewCourse(){
    document.getElementById("addNewCourse").innerHTML = `            
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Thêm mới khóa học</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="form-add">
                                <div class="mb-3">
                                    <label for="" class="form-label">Mã khóa học <p style="color: red;">(*)</p></label>
                                    <input type="text" class="form-control form-control-sm" placeholder="Nhập mã khóa học" name="courseCode" id="courseCode">
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Tên khóa học <p style="color: red;">(*)</p></label>
                                    <input type="text" class="form-control form-control-sm" placeholder="Nhập tên khóa học" name="courseName">
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Thời gian <p style="color: red;">(*)</p></label>
                                    <input type="text" class="form-control form-control-sm" placeholder="Nhập thời gian khóa học" name="courseTime">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="">Trạng thái</label>
                                    <div class="check-status">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" name="Status" value="option1">
                                            <label class="form-check-label" for="status">Hoạt động</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" name="Nonstatus" value="option2">
                                            <label class="form-check-label" for="nonstatus">Không hoạt động</label>
                                        </div>
                                    </div>
                                    <!-- <input type="checkbox" class="form-check-input" id="status"> -->
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary addCourse" onclick="addCourse()">Thêm mới</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
}
