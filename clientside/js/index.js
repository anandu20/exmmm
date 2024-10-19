const value = localStorage.getItem("Auth");
async function getDonors() {
    const res=await fetch("http://localhost:3015/api/getemployees",{headers:{
        "Authorization" : `Bearer ${value}`}});
        const employees=await res.json();
    if(res.status==200){
        document.getElementById("user").innerText=employees.username;
        console.log(employees);

    }
    else{
        alert(employees.msg)
        window.location.href="../pages/signin.html"
    }
   
}
getDonors();




function logout(){
    localStorage.removeItem("Auth");
    window.location.href="../pages/signin.html"
}