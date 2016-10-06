$('#grow').click(function () {
      var right = $('#right');
      right.show("fast");
      var width =  parseInt(100 * right.width() /right.parent().width() + 10,10);
      $('#right').animate({
          "width": "+="+ width 
      }, "slow");
      $('#text').html(width);
  });
