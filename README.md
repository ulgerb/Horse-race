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
  start butonunu basıldığında, ilk önce başlangıç animasyonları devreye girer ve ardından "while" döngüsü yarış bitene kadar kodu çalıştırır. Tabi "while" döngüsü devreye girdiği zaman kodlar çok hızlı işleme alıncaktır. Bunun önüne geçebilmek için "while" döngüsünü "sleep" ile uyutmamız gerekir.  
  
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
        while (finish_race-80 <= finish){
        ...
        await sleep(100);
        ...

  Yarış bitiş çizgisine geldiğinde rank sıralaması yaparız. Atların "offset" değerine bakılır ve "sort" methodu ile liste içinde sıralama yaparız.

    for (var j = 1; j <= 6; j++) {
          for (var k = 1; k <= 6; k++) {
              // console.log($(".box" + k).offset().left);
              if ($(".box" + k).offset().left == liste_offset[j - 1]) {

                  $(".rankhorse" + k).css({
                      left: 135 * (j - 1),
                  })

                  $(".money" + k).text(400 * (6 - j) + Math.floor(Math.random() * 100 * (6 - j)))

                  console.log(j, "ranking", k, "horse");

                  $(".ranking" + k).text(j)

              } else {
                  // console.log("error ");
              }
          }
      }

  


