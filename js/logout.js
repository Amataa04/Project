function logout(){
    localStorage.removeItem("account-login");
    showUserLogin();
    window.location.href = "index.html";
}