let carouselInit = () => {
  $(document).ready(() => {
    $('.carousel').carousel();
  });
};
let popoverInit = () => {
  $(document).ready(() => {
    let options = {
      html: true,
      container: 'body',
      content: function() {
        return $("#"+$(this).attr("data-pop")).html();
      }
    };
    $('[data-toggle="popover"]').popover(options);
  });
};

module.exports.init = () => {
  popoverInit();
  carouselInit();
};