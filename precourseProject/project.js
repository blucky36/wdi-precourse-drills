


function writeRandomQuote() {
    var quotes = new Array();
    quotes[0] = "The mind is everything. What you think you become.";
    quotes[1] = "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.";
    quotes[2] = "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one’s level of peace of mind.";
    quotes[3] = "Peace comes from within. Do not seek it without.";
    quotes[4] = "Anger is like holding a hot coal with the intention of throwing it, the only one getting burned is you.";
    quotes[5] = "It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going.";
    quotes[6] = "Think Big And Don’t Listen To People Who Tell You It Can’t Be Done. Life’s Too Short To Think Small.";
    quotes[7] = "You Can Develop Any Habit Or Thought Or Behavior That You Consider Desirable Or Necessary.";
    quotes[8] = "A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power.";
    quotes[9] = "The Person Who Says It Cannot Be Done Should Not Interrupt The Person Who Is Doing It.";
    quotes[10] = "Everything You’ve Ever Wanted Is On The Other Side Of Fear.";
    quotes[11] = "Success Is Getting What You Want, Happiness Is Wanting What You Get.";
    quotes[12] = "Think Continually About What You Want, Not About The Things You Fear.";
    quotes[13] = "Optimism Is The One Quality More Associated With Success And Happiness Than Any Other.";
    quotes[14] = "They are both favorites! Grape and Cherry. -Brian Regan";
    quotes[15] = "Is this real life? -Ryan Silva";
    var rand = Math.floor(Math.random()*quotes.length);
    alert(quotes[rand]);
  }

  function showPi(){
    Math.PI
    alert(Math.PI)
  }

  function fizzBuzz(){
    for(var i = 1;i <= 100; i++){
      if(i % 3=== 0&& i % 5 === 0){
        console.log(i, "FizzBuzz")
      }
     else if(i % 5 == 0){
        console.log(i, "Fizz")
      }
      else if(i % 3 == 0){
        console.log(i, "Buzz")
      }
      else console.log(i)

    }
    alert("Check Console")
  }

  function showDate() {
      var d = new Date();
      var date = d.getDate();
      var month = d.getMonth() + 1;
      var year = d.getFullYear();
      alert( month + "-" + date + "-" + year)
    }

  $(document).ready(function(){
  let container = $(".container")
  $("div.container").click(function(){aud();});
  function peanutButterJellyTime(){
      container.html('<div><img src="http://peanutbutterjellytime.net/img/peanut-butter-jelly-time.gif"><div>')
    }

      $(".pbj").on("click",peanutButterJellyTime)

})
function aud(){
  new Audio('C:/Users/blucky36/Music/Godzilla.mp3').play();
}






// #header.addEventListener("mouseover",function(){new Audio('C:\Users\blucky36\Documents\My Music\Godzilla.mp3').play();
// })
