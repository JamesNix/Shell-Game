/* jshint camelcase:false */
(function(){
  
  'use strict';
  
  $(document).ready(init);
  
  function init(){
    $('#play').click(addShells);
    $('#reset').click(reset);
    $('.shell').hide();
    $('#message').hide();
    $('.shell').click(pick);
  }
  
  var matchNum = [];      //holds the magic number

  function addShells(){  //displays shells and calls function to generate the magic number;
    if(!$('.shell').is(':visible')){
      $('.shell').show();
      $('#message').show();
      randomNum();
    } else {
      location.reload();
    }
  }

  function randomNum(){
    var num = Math.floor(Math.random() * 3 + 1);
    matchNum.push(num);
  }

  function pick(){
    var $this = $(this);
    if($('.pick').length){
      return;
    } else {
      var pk = $(this).text() * 1;
      $('.shell').addClass('pick');
      if(pk === matchNum[0]){
        $('#message').empty();
        $('#message').text('Pearl, you win!');
        $this.css('background-size', 'auto auto');
        $this.css('background-position', 'center');
        $this.css('background-image', 'url("../media/pearl.png")');
      }else{
        debugger;
        $('#message').empty();
        $('#message').text('Crab, you lose!');
        $this.addClass('crab');
        $('.crab').css('background-image', 'url("../media/crab1.png")');
      }
    }
  }

  function reset(){
    location.reload();
  }

})();
