# Horse-race
@horse @horses @race @horse-races @javascript @minigame

  ## Horse Run
  ![horses-run](https://user-images.githubusercontent.com/98836519/174305081-02fa5017-f00c-4ea8-91f9-bfe9257b8741.gif)

  ## Before the race starts
  <img src = "https://user-images.githubusercontent.com/98836519/172969008-372c539e-9073-4e80-b40b-6457fcfebf5c.jpg" width=500>

  ## Racing line
  <img src = "https://user-images.githubusercontent.com/98836519/172969152-c64b7750-e29b-4d11-a116-bdf99a784bf5.jpg" width=500>

  ## Horse Race 1
  https://user-images.githubusercontent.com/98836519/172969355-b9a2118e-bafc-4611-8446-1d5c5bd2eebc.mp4

  ## Horse Race 2
    //increased speed and power
    box_x1 = Math.floor(Math.random() * 12 );
    box_x2 = Math.floor(Math.random() * 2);
    box_x3 = -Math.floor(Math.random() * 7);
        
  https://user-images.githubusercontent.com/98836519/172969365-1c7c95e5-b4b7-407c-9d89-16dc53337b34.mp4


  ## Explanation
  
    const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
    }

    $(".startrace").click( async () => {

        $("g").removeClass(["animoff"])

        $(".box svg").css({
            boxShadow: "none",
        })

        $(".box").css({
            transition: "5s",
        })

        $(".stant_o").slideUp(100);
      ...




