module.exports.init = () => {
  fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=2321794898.c625d4b.52d85f33c6074769a1052765b092bc06&count=6')
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
    });
  document.querySelector("#footer-insta-port").innerHTML = "test";
};