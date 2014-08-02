/**
 * Javascript - Index
 * Author - Andrew Mass
 */

function MassWeb() {}

MassWeb.track = function(args) {
  _gaq.push(args); // MassWeb.track(['_trackEvent', 'Start', 'Start-Header']);
};

MassWeb.verticalCenter = function() {
  var outerHeight = $('.container').outerHeight() + $('table').outerHeight();
  var screenHeight = $(window).innerHeight();
  var margin = (screenHeight - outerHeight) / 2;
  if(margin >= 0) {
    $('.container').css('margin-top', margin);
  }
  else {
    $('.container').css('margin-top');
  }
};

MassWeb.highlightCategory = function(args) {
  if(args === '') {
    $('.cell').removeClass('hover');
  } else {
    $('.cell').removeClass('hover');
    $('.cell' + args).addClass('hover');
  }
};

MassWeb.toggleClick = function(args) {
  var isClicked = $(args).hasClass('clicked');
  $('.control').removeClass('clicked');
  if(!isClicked) {
    $(args).addClass('clicked');
  }
};

MassWeb.toggleCategory = function(args) {
  if($('#btn-' + args).hasClass('clicked')) {
    this.highlightCategory('.' + args);
  }
  else {
    this.highlightCategory('');
  }
};

MassWeb.anyClicked = function() {
  return $('.control').hasClass('clicked');
}

$(function() {
  MassWeb.verticalCenter();

  $(window).resize(function() {
    MassWeb.verticalCenter();
  });

  $('#btn-soc').click(function() {
    MassWeb.toggleClick(this);
    MassWeb.toggleCategory('soc');
  });

  $('#btn-soc').hover(function() {
    if(!MassWeb.anyClicked()) {
      MassWeb.highlightCategory('.soc');
    }
  }, function() {
    if(!MassWeb.anyClicked()) {
      MassWeb.highlightCategory('');
    }
  });

  $('#btn-dev').click(function() {
    MassWeb.toggleClick(this);
    MassWeb.toggleCategory('dev');
  });

  $('#btn-dev').hover(function() {
    if(!MassWeb.anyClicked()) {
      MassWeb.highlightCategory('.dev');
    }
  }, function() {
    if(!MassWeb.anyClicked()) {
      MassWeb.highlightCategory('');
    }
  });

  $('#btn-exp').click(function() {
    MassWeb.toggleClick(this);
    MassWeb.toggleCategory('exp');
  });

  $('#btn-exp').hover(function() {
    if(!MassWeb.anyClicked()) {
      MassWeb.highlightCategory('.exp');
    }
  }, function() {
    if(!MassWeb.anyClicked()) {
      MassWeb.highlightCategory('');
    }
  });
});
