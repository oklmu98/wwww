let x;
let toast = document.getElementById("toast");
function showToast(){
    clearTimeout(x);
    toast.style.transform = "translateX(0)";
    x = setTimeout(()=>{
        toast.style.transform = "translateX(400px)"
    }, 4000);
}

function closeToast(){
    toast.style.transform = "translateX(400px)";
}
 if(window.localStorage.getItem('galaxy') == "true")
{
 document.body.style.backgroundColor = "rgb(60, 9, 108)"

 menu.style.backgroundColor = "rgb(90, 24, 154)"
}
else if (window.localStorage.getItem('ocean') == "on") {
   document.body.style.backgroundColor = "rgb(72, 202, 228)"

 menu.style.backgroundColor = "rgb(144, 224, 239)"
}
else if (window.localStorage.getItem('classic') == "on") {
    menu.style.backgroundColor = "rgb(135, 152, 106)"
  document.body.style.backgroundColor = "rgb(113, 131, 85)"
}
else
{
  menu.style.backgroundColor = "rgb(135, 152, 106)"
  document.body.style.backgroundColor = "rgb(113, 131, 85)"

} 