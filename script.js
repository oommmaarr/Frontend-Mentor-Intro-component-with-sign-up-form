let bu2 = document.getElementById("bu2");
let inp1 = document.getElementById("First_Name");
let allInp = document.querySelectorAll(".form input");
let errorIcon = document.querySelectorAll(".form img");

bu2.addEventListener("click", () => {
  allInp.forEach((ele, index) => {
    if (ele.value === '') {
      errorIcon[index].style.display = "block";
      if (index === 0) {
        document.getElementById("p1").innerText = "First Name Cannot Be Empty";
      } else if (index === 1) {
        document.getElementById("p2").innerHTML = "Last Name Cannot Be Empty";
      } else if (index === 2) {
        document.getElementById("p3").innerHTML = "Email Cannot Be Empty";
      } else {
        document.getElementById("p4").innerHTML = "Password Cannot Be Empty";
      }
    }
  });
});


allInp.forEach((ele, index) => {
    ele.addEventListener("input", () => {
    if(ele.value!=''){
      errorIcon[index].style.display = "none";
      if (index === 0) document.getElementById("p1").innerHTML = "";
      else if (index === 1) document.getElementById("p2").innerHTML = "";
      else if (index === 2) document.getElementById("p3").innerHTML = "";
      else document.getElementById("p4").innerHTML = "";
    }
    else{
        errorIcon[index].style.display = "block";
        if (index === 0) document.getElementById("p1").innerHTML = "First Name Cannot Be Empty";
        else if (index === 1) document.getElementById("p2").innerHTML = "Last Name Cannot Be Empty";
        else if (index === 2) document.getElementById("p3").innerHTML = "Email Cannot Be Empty";
        else document.getElementById("p4").innerHTML = "Password Cannot Be Empty";
    }
    });
  });
  
