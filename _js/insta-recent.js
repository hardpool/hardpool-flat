module.exports.init = () => {
  fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${config.insta_at}&count=8`)
    .then(response => {
      return response.json();
    })
    .then(imgs => {
      // console.log(imgs);
      let template = document.querySelector("#footer-insta-port").innerHTML;
      let html = "";
      imgs.data.forEach(img => {
        html += `${template.replace(/##__image_url__##/g, img.images.standard_resolution.url)
                      .replace(/##__insta_url__##/g, img.link)
                      .replace(/##__insta_comment__##/g, img.comments.count)
                      .replace(/##__insta_like__##/g, img.likes.count)}`;
      });
      document.querySelector("#footer-insta-port").innerHTML = html;
    });
};