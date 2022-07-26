
var box_x = 0, box_x_go = 0, box_x_go2=0; 
var bg_race= 0, box_number = 0, finish_race = 0;
var bar=[], moveing=0, box_x_go3=0;
var box_x1 = 0, box_x2 = 0, box_x3 = 0, box_x4 = 0, box_x5 = 0, box_x6 = 0;
var horse1, horse2, horse3 , horse4 , horse5 , horse6 ;
var rankhorse1, rankhorse2, rankhorse3, rankhorse4, rankhorse5, rankhorse6;
// finish == race pist, bar_limit == barrier in pist, how many?
var finish = 12900, bar_limit = Math.floor(finish/100)+10
var $mainbox = $(".mainbox");
var barrier=[];
var listbox=[];

$(".mainbox").css({ width : finish-130 })
$(".mainbox_around").css({ width: finish + 1500 })
// $(".mainbox").css({ witdh: finish + 500 })
// $(".mainbox").css({ witdh: finish + 500 })

$(".hedgeall1").html(function(){ 

    for (let k = 1; k <= bar_limit; k++) {
        bar = "<div class='hedge1 hedgeall_hedge1'></div><div class='hedge2 hedgeall_hedge1'></div>";
        barrier += bar
    }
    return barrier
}); 

var barrier = [];  

$(".hedgeall2").html(function () {

    for (let k = 1; k <= bar_limit; k++) {
        bar = "<div class='hedge1 hedgeall_hedge1'></div><div class='hedge2 hedgeall_hedge1'></div>";
        barrier += bar
    }
    return barrier
}); 
//=== horses position ===
for (let k = 1; k <= 6; k++) {

    $(".box"+k).css({
        bottom: 40*(7-k)+150
    })

    $(".stant_open" + k).css({
        bottom: 40 * (7 - k) + 90
    })
}

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

        // horse random selection
        box_number = Math.floor(Math.random() * 28)/4;
        box_number2 = Math.floor(Math.random() * 56) / 8;
        box_number3 = Math.floor(Math.random() * 3);

        // horse move power and speed
        box_x1 = Math.floor(Math.random() * 12 );
        box_x2 = Math.floor(Math.random() * 2);
        box_x3 = -Math.floor(Math.random() * 7);

        // horse move
        // box_x_go += box_x1 
        // box_x_go2 += box_x2 
        // box_x_go3 += box_x3
        
        listbox1 = [
            box_x_go += box_x1 ,
            box_x_go2 += box_x2 ,
            box_x_go3 += box_x3,
        ]

        $(".box"+box_number).css({
            left : listbox1[box_number3]+250
        })

        $(".box" + box_number).css({
            left: listbox1[box_number3] + 250
        })
        
        // speed background
        bg_race -= 120 ;
        finish_race =  - bg_race ; 

        $(".mainbox").css({
            left: bg_race
        })

        await sleep(100);

        var horses = {
            horse1 : "Stealin Pau",
            horse2 : "Bold Pilot",
            horse3 : "Timurhan",
            horse4 : "Dragon",
            horse5 : "Damista",
            horse6 : "Velociraptor",
        };

        // var liste_horse = []
        // console.log(horse1);
        // console.log(liste_offset[j - 1]);
        // console.log(horse1 + horses.horse1);
        
    }
    if (finish_race-80 >= finish) {

        $("body").stop()
        $(".box").stop()
        $(".boxgame").stop()

        var liste_offset =
            [
                horse1 = $(".box1").offset().left,
                horse2 = $(".box2").offset().left,
                horse3 = $(".box3").offset().left,
                horse4 = $(".box4").offset().left,
                horse5 = $(".box5").offset().left,
                horse6 = $(".box6").offset().left,
            ];

        liste_offset.sort(function (a, b) { return b - a });
        
            // indexOf ================
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
        // $("g").addClass(["animoff"])
        $(".rankh").show(1000)
    }

    rankhorse1 = $(".rankhorse1").html();
    rankhorse2 = $(".rankhorse2").html();
    rankhorse3 = $(".rankhorse3").html();
    rankhorse4 = $(".rankhorse4").html();
    rankhorse5 = $(".rankhorse5").html();
    rankhorse6 = $(".rankhorse6").html();
    

    // ******* transition end function ********
    $mainbox.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $("g").addClass(["animoff"])
    });
    
})