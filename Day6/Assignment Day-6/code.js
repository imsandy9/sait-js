var color = randomColor();
// console.log(color);
// var count = document.getElementById('n1').value ;
// $("#submitbutton").click(function(){
//     $(".main").append("<br/><div id='New'>New</div>")
// });


$("#submitbutton").click(function () { 
    $(".main").clone().appendTo("body") ;
});


$('.box').css({'background-color':color});


$('.box').each(function(){
    var color = randomColor();
    var b=$(this);
    b.css({'background-color':color});

})

