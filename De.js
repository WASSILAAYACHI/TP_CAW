 <script>
  
  
        // Function to roll the dice
        function rollTheDice() {
            setTimeout(function () {
                var randomNumber1 = Math.floor(Math.random() * 6) + 1;
                var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
                document.querySelector(".img1").setAttribute("src",
                     randomNumber1 + ".png");
  
                document.querySelector(".img2").setAttribute("src",
                     randomNumber2 + ".png");
  
                if (randomNumber1 === randomNumber2) {
                    document.querySelector("h1").innerHTML = "You WIN !!";
                }
  
                else {
                    document.querySelector("h1").innerHTML
                        = " Try again !";
                }
            }, 2500);
        }
    </script>