

function help () {
    var address = document.getElementById('locatn')

    if(address.style.display === 'none') {
address.style.display === 'block';
    }

    else {
        address.style.display === 'none';
    }
}



/*for displaying the contact numbers when clicked*/





function gmail() {
    var x = document.getElementById('pg')

    if (x.style.display === "none") {
        x.style.display === "block"
    } else {
        x.style.display === "none";
    }
}





/*this area is for if you want to display a particular content when it reaches a a particular point,in this case , i gave it a bottom of 50px that was it has > 50*/
mybutton = document.getElementById('back-to-top');

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none"
    }
}

/*this is for the "Top button" on the website which when clicked on takes users back to the top of the page*/
function topfunction() {
    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;
}



/*this is for the "bottom button" on the website which when clicked on takes users back to the top of the page*/
function downfunction() {
    document.body.scrollTop = 5000;


    document.documentElement.scrollTop = 5000;
}