// 11.find the largest number from the given list

function max(){
    var a= -Infinity;
    for(var i in arguments){
    if(arguments[i]>a){
        a=arguments[i];
    }
    }
    console.log(a);
    }
    max(10,20,40);

    //(or) by using Math.max()method and document.getElementById();
//     <html>
// <body>
//     <p id="larger">Largest value from the given number list is </p>

// <Script>
//     function lager(){
//         document.getElementById("larger").innerHTML=Math.max();
//     }

//     </Script>
//     </body>
//     </html>