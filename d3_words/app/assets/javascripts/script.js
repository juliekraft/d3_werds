// $(function(){

  // var text = $('#text-box').val()
  // var words = text.split(" ")


var canvas = d3.scale.category20();




  function draw(words){
    d3.select('body').append('svg')
    .attr('width', 300)
    .attr('height', 300)
    .append('g') //this groups svg shapes together! cool!
    .selectAll(text)
    .data(words)
  }










// })