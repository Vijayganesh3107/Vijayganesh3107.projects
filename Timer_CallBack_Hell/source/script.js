function decrese(no) {
  return --no;
}

function a(no, func) {
  var div = document.getElementById("display");
  div.innerHTML = no;
  var res9 = func(no);
  setTimeout(() => {
    div.innerHTML = res9;
  }, 1000);
  b(res9, decrese);
  function b(no, func) {
    var no = res9;
    var res8 = func(no);
    setTimeout(() => {
      div.innerHTML = res8;
    }, 2000);

    c(res8, decrese);

    function c(no, func) {
      var no = res8;
      var res7 = func(no);
      setTimeout(() => {
        div.innerHTML = res7;
      }, 3000);
      d(res7, decrese);

      function d(no, func) {
        var no = res7;
        var res6 = func(no);
        setTimeout(() => {
          div.innerHTML = res6;
        }, 4000);

        e(res6, decrese);
        function e(no, func) {
          var no = res6;
          var res5 = func(no);
          setTimeout(() => {
            div.innerHTML = res5;
          }, 5000);

          f(res5, decrese);
          function f(no, func) {
            var no = res5;
            var res4 = func(no);
            setTimeout(() => {
              div.innerHTML = res4;
            }, 6000);

            g(res4, decrese);
            function g(no, func) {
              var no = res4;
              var res3 = func(no);
              setTimeout(() => {
                div.innerHTML = res3;
              }, 7000);

              h(res3, decrese);

              function h(no, func) {
                var no = res3;
                var res2 = func(no);
                setTimeout(() => {
                  div.innerHTML = res2;
                }, 8000);

                i(res2, decrese);
                function i(no, func) {
                  var no = res2;
                  var res1 = func(no);
                  setTimeout(() => {
                    div.innerHTML = res1;
                  }, 9000);

                  j(res1, decrese);
                  function j(no, func) {
                    var no = res1;
                    var res0 = func(no);
                    if (res0 == 0) res0 = "Happy Morning";
                    setTimeout(() => {
                      div.innerHTML = res0;
                      document.body.style.background = "red";
                    }, 10000);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

a(10, decrese);
