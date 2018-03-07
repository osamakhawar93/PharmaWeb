/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main2").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main2").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


    



    
    /*jQuery(document).ready(function(){




       
       
        var spinner =  jQuery('#prod-quantity'),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.quantity-up'),
          btnDown = spinner.find('.quantity-down'),
          min = input.attr('min'),
          max = input.attr('max'),
          step = input.attr('step');


        jQuery('body').on('keyup', input, function () {
        
          var oldValue = parseFloat(input.val());
          if (oldValue >= max) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue + parseFloat(step);
          }

          spinner.find("input").trigger("change");
          var in_val = jQuery('input[type="number"]').val();




        });

        btnUp.click(function () {
          var oldValue = parseFloat(input.val());
          if (oldValue >= max) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue + parseFloat(step);
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
          var in_val = jQuery('input[type="number"]').val();
        });

        btnDown.click(function () {
           console.log("work");
          var oldValue = parseFloat(input.val());
          if (oldValue <= min) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue - parseFloat(step);
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
          var in_val = jQuery('input[type="number"]').val();
        });

      });*/

     


     
       
