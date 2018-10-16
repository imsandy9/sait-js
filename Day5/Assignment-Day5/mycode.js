

var rightAnswer = 0;    

function scores() {
       
    var i;

    var a1 = document.quizForm.q1.value;
    // var a1 = document.quizForm.q1.value.toLowerCase();
        if(a1 == 'looni' || a1 == 'Looni' ) {
            rightAnswer++;
        // console.log ('1   '+ rightAnswer) ;
        }

    var a2 = document.quizForm.q2;
   
         if(a2.value == 'a') {
            rightAnswer++;
            // console.log ('2   '+ rightAnswer) ;
            
         }

    var a3 = document.quizForm.q3;
      
        if(a3.value == 'ottawa') {
            rightAnswer++;
                
        }

    var a4=document.quizForm.q4;
    //  console.log('hjkfhjkh   ' + a4);

        for(var i=0; i<a4.length; i++)  {
            if(a4[i].checked)   {
                if(a4[i].value==='a'|| a4[i].value==='b' || a4[i].value==='c')  {
                    rightAnswer++;
                    break;
                    // console.log('a4    ' + rightAnswer);
                }
            }
        }


    var a5 = document.quizForm.q5;
        
        if(a5.value == 'a') {
            rightAnswer++;
    
        }
    //   console.log (rightAnswer)   ;



// Display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored</h3>' + rightAnswer ;
    

}


