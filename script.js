const form = document.getElementById("form");
const usernameInput = document.getElementById("uname");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
window.addEventListener("DOMContentLoaded", () => {
const savedUsername = localStorage.getItem("uname");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
    }
else{
		existingBtn.style.display = "none"
	}
});
form.addEventLitener("submit",()=>{
	const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
	if(!username&&!password){
		alert("enter the username and password");
		return;
	}
	else{
		if(rememberCheckbox.checked){
			localStorage.setItem("username",username);
			localStorage.setItem("password",password);
		}
		else{
			localStorage.removeItem("username",username);
			localStorage.removeItem("password",password);
		}
		alert(`Logged in as ${username}`);
	}
	 existingBtn.addEventListener("click", () => {
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
      }
    });
})