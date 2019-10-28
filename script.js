const submit=document.getElementById("submit");

submit.addEventListener("click", function display() {
    const day=document.getElementById("day").value;
    const month=document.getElementById("month").value;
    const year=document.getElementById("year").value;
    const date=new Date(`${year}-${month}-${day}`);//new Date() to capture user date of birth
    const dayOfBirth=date.getDay();
    const male=document.getElementById("male");
    const female=document.getElementById("female");
    const display=document.getElementById("results");
    const submit=document.getElementById("submit");
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    if (day<1 ||day >31)
    display.style.color="black;"
     else if (male.checked) {
    display.innerHTML =`Hello, you ware born on a ${days[dayOfBirth]} and your Akan name is ${maleNames[dayOfBirth]}`;
    } else{
    display.innerHTML =`Hello, you ware born on a ${days[dayOfBirth]} and your Akan name is ${femaleNames[dayOfBirth]}`;
}
});