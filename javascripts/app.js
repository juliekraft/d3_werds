
// var word_array = []

var colors = {a: '(255, 220, 36)', 
              b: '(193, 0, 7)',
              c: '(27, 177, 0)',
              d: '(0, 78, 25)',
              e: '(252, 88, 0)',
              f: '(116, 69, 37)',
              g: '(82, 85, 133)',
              h: '(209, 84, 133)',
              i: '(224, 224, 224)',
              j: '(98, 81, 66)',
              k: '(111, 46, 0)',
              l: '(49, 49, 49)',
              m: '(0, 0, 233)',
              n: '(182, 0, 30)',
              o: '(208, 208, 208)',
              p: '(80, 0, 124)',
              q: '(73, 38, 14)',
              r: '(0, 0, 233)',
              s: '(10, 67, 16)',
              t: '(3, 3, 3)',
              u: '(234, 137, 171)',
              v: '(67, 39, 9)',
              w: '(0, 0, 103)',
              x: '(66, 41, 9)',
              y: '(253, 238, 66)',
              z: '(70, 42, 11)'
            };

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
  console.log("hiiiii", input)
    draw([{  
      name: input,
      length: input.length,
      letters: input.split('')[0]
    }]);
 }



// function get_word(word){
//   return word.name
// }
// canvas
// d3.select('svg').attr("height", "100%")
// d3.select('svg').attr("width", "100%")

function project(words){
  var projection = d3.select('section').selectAll("div").data(words)
  projection
    .style("font-size", function(d){
      var length = (d.length * 2) + "px"
      if (d.length < 200) d.length = d.length * 2;
      return length})
    .style("color", function(d){return "rgb" + colors[d.letters]})
        // .style("color", "rgb(23, 244, 22)")


  projection.enter()
  .append("div")

projection
.text(function(c){return c.name})
// .attr("y", 200)

//  projection.exit().transition()
      // .attr("x", 100).attr("y",100)

    }





function draw(words){
  if (window.myInterval) clearInterval(window.myInterval);
  window.myInterval = setInterval(function(){
      project(words);
  }, 500)
}
 // window.interval = window.setInterval(draw, 600);

 $(function(){

  $('body').on('keypress', function(e){
    if (e.which == 13) {
      get_input();
    }
  })

 })

