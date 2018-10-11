var pageBody = document.getElementsByTagName ('body') [0] ;
// To check use location
if (Modernizr.geolocation) {
    console.log('Supported');
  } else {
    
    var newImg = document.createElement ('img');
    newImg.src = 'http://www.placepuppy.net/1p/400/250';
    newImg.style.border = '1px solid black';
    newImg.style.margin = '30px 140px';
    

    pageBody.appendChild(newImg);

    
    // console.log('Not supported');
  }


// Wrapper properties
var container = document.getElementsByClassName ('wrapper') [0];
container.style.width = '80%';
container.style.margin = 'auto';
container.style.padding = '30px';


// header Styles
var header = document.getElementById('headline');
header.style.border = '1px solid black';
header.style.color = 'Black';
header.style.padding = '20px';
header.style.textAlign = 'center';

console.log (history.length);


// navigation
var navigation = document.getElementsByTagName('li');
for (var i=0; i<navigation.length; i++) {
    if (i % 2 === 0) {
        navigation[i].style.color = 'blue';
    }
    else {
        navigation[i].style.color = 'red';
    }
    // console.log (navigation[i]);
}




// history
if (history.length === 0) {
    
    pageBody.style.backgroundColor = 'lightblue';
}
else {
    pageBody.style.backgroundColor = 'coral';
}

