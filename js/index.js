/**
 * Javascript - Index
 * Author - Andrew Mass
 */

function MassWeb() {}

MassWeb.socClicked = false;
MassWeb.devClicked = false;
MassWeb.expClicked = false;

MassWeb.track = function(args) {
  _gaq.push(args); // MassWeb.track(['_trackEvent', 'Start', 'Start-Header']);
};

MassWeb.verticalCenter = function() {
  var containerHeight = $('.container').outerHeight();
  var screenHeight = $(window).innerHeight();
  var margin = (screenHeight - containerHeight) / 2;
  if(margin >= 0) {
    $('.container').css('margin-top', margin);
  }
  else {
    $('.container').css('margin-top', 10);
  }
};

MassWeb.highlightCategory = function(args) {
  if(args === '') {
    $('td').removeClass('hover');
  } else {
    $('td').removeClass('hover');
    $('td' + args).addClass('hover');
  }
};

MassWeb.anyClicked = function() {
  return (this.socClicked || this.devClicked || this.expClicked);
}

$(function() {
  MassWeb.verticalCenter();

  $(window).resize(function() {
    MassWeb.verticalCenter();
  });

  $('#btn-soc').click(function() {
    MassWeb.highlightCategory('.soc');
    MassWeb.socClicked = !MassWeb.socClicked;
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
    MassWeb.highlightCategory('.dev');
    MassWeb.devClicked = !MassWeb.devClicked;
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
    MassWeb.highlightCategory('.exp');
    MassWeb.expClicked = !MassWeb.expClicked;
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

  $('#btn-clear').click(function() {
    MassWeb.highlightCategory('');
    MassWeb.socClicked = false;
    MassWeb.devClicked = false;
    MassWeb.expClicked = false;
  });
});
