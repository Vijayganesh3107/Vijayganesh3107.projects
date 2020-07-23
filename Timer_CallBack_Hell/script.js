// function decrese(no) {
//   return --no;
// }





var no=10;
setTimeout(()=>{
  var div = document.getElementById("display");
  div.innerHTML = no;
  var res9 = no--;
  console.log(res9);
  setTimeout(() => {
    div.innerHTML = res9;
  }, 1000);
  setTimeout(()=>{
    var res8=--res9;
    console.log(res8);
    setTimeout(() => {
      div.innerHTML = res8;
    }, 2000);

    setTimeout(()=>{
      var res7=--res8;
      setTimeout(() => {
        div.innerHTML = res7;
      }, 3000);

      setTimeout(()=>{
        var res6=--res7;
        setTimeout(() => {
          div.innerHTML = res6;
        }, 4000);

        setTimeout(()=>{
          var res5=--res6;
          setTimeout(() => {
            div.innerHTML = res5;
          }, 5000);

          setTimeout(()=>{
            var res4=--res5;
            setTimeout(() => {
              div.innerHTML = res4;
            }, 6000);

            setTimeout(()=>{
              var res3=--res4;
            setTimeout(() => {
              div.innerHTML = res3;
            }, 7000);

            setTimeout(()=>{
              var res2=--res3;
              setTimeout(() => {
                div.innerHTML = res2;
              }, 8000);


              setTimeout(()=>{
                var res1=--res2;
                console.log(res1);
                setTimeout(() => {
                  div.innerHTML = res1;
                }, 9000);


                setTimeout(()=>{
                  var res0=--res1;
                  setTimeout(()=>{
                    div.innerHTML=res0;
                  },10000);

                  setTimeout(()=>{
                    setTimeout(()=>{
                      div.innerHTML="Happy Morining";
                    },11000);

                  },0)


                },0)
              },0)
            },0)

            },0)

          },0)


        },0)

        

      },0)

    },0)

  },0)
},0)

