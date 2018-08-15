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

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* MODAL 2 */
// Get the modal
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal 
btn2.onclick = function () {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}