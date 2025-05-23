let navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((item) =>{
    console.log(item);
    item.addEventListener('click', function(){
        document.querySelector('nav ul li a.active').classList.remove("active");
        item.classList.add("active");
    })
   
})