
// var word_array = []

var words = [
    {
        "name": "the",
        "freq": 3,
        "length": 3,
        "letters": ['t', 'h', 'e']
    },
    {
        "name": "What?",
        "freq": 1,
        "length": 5,
        "letters": ['w','h', 'a', 't', '?']
    }]

function shuffle(array) {
    var m = array.length,
        t,
        i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
}

 function get_input(){
  var input = $('#input').val();

  //     draw(input);
      //}
  
   // })  

 }

// function get_word(word){
//   return word.name
// }
// canvas
// d3.select('svg').attr("height", "100%")
// d3.select('svg').attr("width", "100%")

function project(words){
  var projection = d3.select('section').selectAll("div").data(words)
  projection.style("font-size", function(d){
    var length = (d.length * 2) + "px"
    d.length = d.length * 2
      return length
    })


  projection.enter()
  .append("div")

projection
.text(function(c){return c.name})
// .attr("y", 200)

//  projection.exit().transition()
      // .attr("x", 100).attr("y",100)

    }





function draw(){
  project(words)
}
 // window.interval = window.setInterval(draw, 600);
