console.log("Hello World");

function getToken(){
    result = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
    console.log(result);
}

getToken();