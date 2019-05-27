module.exports.init = () => {
  fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=2321794898.c625d4b.52d85f33c6074769a1052765b092bc06&count=8')
    .then(response => {
      return response.json();
    })
    .then(imgs => {
      console.log(imgs);
      let template = document.querySelector("#footer-insta-port").innerHTML;
      let html = "";
      imgs.data.forEach(img => {
        html += `${template.replace('##__image_url__##', img.images.standard_resolution.url)
                      .replace('##__insta_url__##', img.link)
                      .replace('##__insta_comment__##', img.comments.count)
                      .replace('##__insta_like__##', img.likes.count)}`;
      });
      document.querySelector("#footer-insta-port").innerHTML = html;
    });
};