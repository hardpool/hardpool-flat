let d = document;
let showThreshold = 150;
let hideThreshold = 100;

let runAnimations = (st) => {
  fadeIn('fade-in', st);
};

let fadeIn = (className, st) => {
  let ea = d.querySelectorAll(`.${className}`);
  ea.forEach(ele => {
    // console.log(ele.offsetTop+showThreshold, st+window.innerHeight);
    if(st+window.innerHeight>ele.offsetTop+showThreshold){
      // console.log("show ", ele);
      ele.classList.add("in-view");
    } else if(ele.offsetTop-hideThreshold>st+window.innerHeight) {
      // console.log("hide", ele);
      ele.classList.remove("in-view");
    }
  });
  
};

module.exports.init = () => {
  // console.log("animations init!");
  window.onscroll = (e) => {
    runAnimations(window.pageYOffset);
  };
  runAnimations(window.pageYOffset);
};