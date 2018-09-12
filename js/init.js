window.onscroll = function(){
    var nav = document.getElementById("navbar");
    
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
      nav.classList.add("out-top");
    }else{
      nav.classList.remove("out-top");        
    }
}

window.onload = function(){
    var btnc = document.getElementById('btn-collapse');
    var divc = document.getElementById('collapse');

    btnc.addEventListener('click', function(e){
        e.preventDefault();
        btnc.classList.toggle('open');
        divc.classList.toggle('open');

        });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth', block:'start'
            });
            
            btnc.classList.remove('open');
            divc.classList.remove('open');

        });
    });      
}

/* MODAL */
// Get the modal
var modal = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function () {
    modal2.style.display = "block";
}

btn3.onclick = function () {
    modal3.style.display = "block";
}

btn4.onclick = function () {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

span3.onclick = function () {
    modal3.style.display = "none";
}

span4.onclick = function () {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

    if (event.target == modal2) {
        modal2.style.display = "none";
    }

    if (event.target == modal3) {
        modal3.style.display = "none";
    }

    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}



