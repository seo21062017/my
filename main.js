// function hidden1() {
//     setTimeout(()=> {
//         $('#test').hide();
//
//
//       setTimeout(()=>{
//           alert('Иди на хуй');
//       }, 2000)
//
//
//
//
//     },1000);
//
// }


function hidden2() {


        setTimeout(()=>{
            alert('Иди на хуй');
        }, 2000);

}


let test = ['привет', "привет1", "привет2", "привет3"];
for(let i=0; i<test.length; i++){
    console.log(test[i]);
}

$('h1').bind("click", ()=>{
  //  alert('хуй');
     $('h1').hide();
});


$(document).ready(()=>{
    $('input[name = "done"]').bind('click', ()=>{
        alert('хуй777');
        $.ajax({
            url: "test.php",
            type: "POST",
            data: ({
              inputText: $('input[name="text"]').val()
            }),
            dataType: "html",
            success: (data)=>{
                $('p').append(data);
        }
        });
    });
});