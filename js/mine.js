/*for displaying the location numbers when clicked*/
var options = [
    'Surulere Street,Pepsi Junction,Quarry Abeokuta Ogun State,Nigeria'
]

function help() {

    var randoptionNum = Math.floor(Math.random() * options.length);


    document.getElementById('locatn').innerHTML = '';
    document.getElementById('locatn').innerHTML = options[randoptionNum];

}



/*for displaying the contact numbers when clicked*/
var contacts = [
    '07038634637,08027882232'
]


function contact() {

    var randoptionNum = Math.floor(Math.random() * contacts.length);


    document.getElementById('contct').innerHTML = '';
    document.getElementById('contct').innerHTML = contacts[randoptionNum];

}


var emails = [
    'info@curatoreslp.gmail.com'
]

/*for displaying the gmails when clicked
function gmail() {
    var randoptionNum = Math.floor(Math.random() * emails.length);


    document.getElementById('gmail').innerHTML = '';
    document.getElementById('gmail').innerHTML = emails[randoptionNum];

}*/

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