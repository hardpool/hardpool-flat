let carouselInit = () => {
  $(document).ready(() => {
    $('.carousel').carousel();
  });
};
let navPopoverInit = () => {
  if(window.innerWidth<768)
    return;
  $(document).ready(() => {
    let options = {
      html: true,
      container: 'body',
      content: function() {
        return $("#"+$(this).attr("data-pop")).html();
      }
    };
    $('[data-toggle="nav-popover"]').popover(options)
      .on("mouseenter", function () {
        if($(this).attr("data-trigger")!="manual")
          return;
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
          $(_this).popover('hide');
        });
      })
      .on("mouseleave", function () {
        if($(this).attr("data-trigger")!="manual")
          return;
        var _this = this;
        setTimeout(function () {
          if (!$(".popover:hover").length) {
            $(_this).popover("hide");
          }
        }, 300);
      });
  });
};

module.exports.init = () => {
  navPopoverInit();
  carouselInit();
};