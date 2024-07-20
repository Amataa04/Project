
function addCourse(e) {
    // e.preventDefault();
	let data = JSON.parse(localStorage.getItem("quanlikhoahoc"));
	let button = document.querySelector(".addCourse");
    console.log(button.parentElement.parentElement.children[1].children[0].courseCode.value)
	// let courseName = document.getElementById("courseName").value;
	// let courseTime = document.getElementById("courseTime").value;
	// let status = document.getElementById("Status");
	// let nonStatus = document.getElementById("Nonstatus");
	// let dataTable = {
	// 	courseCode: courseCode,
	// 	courseName: courseName,
	// 	courseTime: courseTime,
	// 	status: status,
	// 	nonStatus: nonStatus
	// };
    // console.log(dataTable)

    // console.log(courseCode);
    // console.log("courseName", dataTable.courseName);
    // console.log("courseTime", dataTable.courseTime);
    // console.log("status", dataTable.status);
    // console.log("nonStatus", dataTable.nonStatus);

	// data.push(dataTable);

	// localStorage.setItem("quanlikhoahoc", JSON.stringify(data));
}

// let formAdd = document.querySelector('.form-add');
// formAdd.onsubmit = function (e) {
//     e.preventDefault();
//     let courseCode = e.target.courseCode("courseCode").value;
// 	let courseName = document.getElementById("courseName").value;
// 	let courseTime = document.getElementById("courseTime").value;
// 	let status = document.getElementById("Status").value;
// 	let nonStatus = document.getElementById("Nonstatus").value;
//     let dataTable = {
// 		courseCode: courseCode,
// 		courseName: courseName,
// 		courseTime: courseTime,
// 		status: status,
// 		nonStatus: nonStatus
// 	};
//     console.log(dataTable)
// }