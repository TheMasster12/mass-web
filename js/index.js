/**
 * Javascript - Index
 * Author - Andrew Mass
 */

function MassWeb() {}

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

$(function() {
  MassWeb.verticalCenter();

  $(window).resize(function() {
    MassWeb.verticalCenter();
  });

  $('#btn-social').click(function() {
    MassWeb.highlightCategory('.social');
  });

  $('#btn-dev').click(function() {
    MassWeb.highlightCategory('.dev');
  });

  $('#btn-exp').click(function() {
    MassWeb.highlightCategory('.exp');
  });

  $('#btn-clear').click(function() {
    MassWeb.highlightCategory('');
  });
});
