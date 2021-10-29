$('.carousel').carousel();

$(window)
  .resize(function () {
    var mobileWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    var viewport =
      mobileWidth > 300
        ? 'width=device-width, initial-scale=1.0'
        : 'width=1900';
    $('meta[name=viewport]').attr('content', viewport);
  })
  .resize();
