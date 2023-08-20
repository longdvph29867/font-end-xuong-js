import Navigo from "navigo";
const router = new Navigo("/",{linksSelector:"a",hash:true});



const render=(components,target)=>{
  target.innerHTML = components();
};

export {render, router};


