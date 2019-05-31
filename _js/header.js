module.exports.toggle = () => {
  
  if(document.querySelector("#navigation").classList.contains("active")){
    // console.log("close menu");
    document.querySelector("#navigation").classList.remove("active");
    document.querySelector("#nav-handle-icon").classList.remove("fa-times");
    document.querySelector("#nav-handle-icon").classList.add("fa-bars");
  } else {
    // console.log("open menu");
    document.querySelector("#navigation").classList.add("active");
    document.querySelector("#nav-handle-icon").classList.remove("fa-bars");
    document.querySelector("#nav-handle-icon").classList.add("fa-times");
  }
};