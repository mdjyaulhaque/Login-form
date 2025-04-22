document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
  
    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }
  
    if(username === "codexintern" && password === "codexintern"){
        alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  });