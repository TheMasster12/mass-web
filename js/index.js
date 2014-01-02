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
  $('.container').css('margin-top', margin);
};

$(function() {
  MassWeb.verticalCenter();

  $(window).resize(function() {
    MassWeb.verticalCenter();
  });
});
