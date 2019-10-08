let changeHref = () => {
  // console.log("change href");
  var links = document.querySelectorAll('.post-content-wrapper a');
  links.forEach(ele => {
    if (ele.hostname !== window.location.hostname) {
      ele.target = '_blank';
      ele.rel = 'noreferrer noopener';
    }
    // console.log(ele);
  });
};

module.exports.init = () => {
  changeHref();
};