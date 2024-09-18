
let myImage=document.querySelector("img");
myImage.onclick=function(){
    let mySrc=myImage.getAttribute("src");
    if(mySrc==="images/LJC1.jpg"){
        myImage.setAttribute("src","images/LJC2.jpg");
    }else{
        myImage.setAttribute("src","images/LJC1.jpg");
    }
};

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUserName(){
    let myName=prompt("请输入你的名字。");
    if(!myName){
        setUserName();
    }else{
        myHeading.textContent="hi,"+myName;
    }
}

myButton.onclick= function(){
    setUserName();
};



