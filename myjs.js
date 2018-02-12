var textarray = [
    "No snowflake in an avalanche ever feels responsible. ",
    "I figured out how to do it with <<b>style</b>>. ",
    "Any fool can know. The point is to understand. ",
    "Awesome ends with me; but Ugly starts with u... ",
    "Everything I know, I learned from dogs.",
    "Share your knowledge. It is a way to achieve immortality. ",
    "I’d like to live as a poor man with lots of money. ",
    "Never stand begging for that which you have the power to earn. ",
    "One man's constant is another man's variable. ",
    "I need more lunch and underwear money <3 ",
    "To use violence is to already be defeated. "
    ];

    function RndText() {
      var rannum= Math.floor(Math.random()*textarray.length);
      document.getElementById('whatever').innerHTML=textarray[rannum];
    }
    window.onload = function() { RndText(); }

    jQuery(document).ready(function($) {
      $('#banner-fade').bjqs({
        responsive  : true
      });
    });
