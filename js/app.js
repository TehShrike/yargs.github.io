function App() {
  this.angleDown = $("#angle-down")  
}

// arrow down click trigger
App.prototype.scrollToOverview = function() {
  scrollToElement("#overview", 1000, 0) 
}

// TODO: implement smooth scroll triggered on mouse move down
App.prototype.smoothScroll = function() {
  
}

function scrollToElement(div, timeout, margin) {
  $("html, body").animate({
    scrollTop: $(div).offset().top -margin
  }, timeout)
}
