const incrct = document.getElementById("incrct");

const name = "0000";
const pass = "0000";

function rlod(){
    const one = document.getElementById("one").value;
    const two = document.getElementById("two").value;

   if (one === name && two === pass) {
        window.location.href = "http://localhost:3000/home";
    }else{
        incrct.style.display="block";
    }
}


