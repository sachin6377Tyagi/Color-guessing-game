var boxes=document.querySelectorAll(".box");
var s=document.querySelector('.rgb');
var colors=generateRandomColor(6);
var pickedColor=colors[Math.floor(Math.random()*6)];
s.textContent=pickedColor;
var playBtn=document.querySelector('#newColor');
var easyBtn=document.querySelector('#level1');
var hardBtn=document.querySelector('#level2');
var boxCount=6;
var statusText=document.querySelector('.result');
statusText.textContent="Let's Play!!";


easyBtn.addEventListener('click',function(){
    document.querySelector('h1').style.background='rgb(255,255,0)';
    statusText.textContent="Let's Play!!";
    boxCount=3;
    this.style.background='rgb(255,255,0)';
    this.style.color='white';
    hardBtn.style.color='rgb(254,100,7)';
    hardBtn.style.background='white';
    colors=generateRandomColor(boxCount);
    pickedColor=colors[Math.floor(Math.random()*3)];
    s.textContent=pickedColor;

    for(var i=0;i<boxes.length;i++){
        if(colors[i]){
            boxes[i].style.background=colors[i]
        }
        else{
            boxes[i].style.display='none';
        }
    }

});

hardBtn.addEventListener('click',function(){
    document.querySelector('h1').style.background='rgb(255,255,0)';
    statusText.textContent="Let's Play!!";
    boxCount=6;
    this.style.background='rgb(255,255,0)';
    this.style.color='white';
    easyBtn.style.color='rgb(254,100,7)';
    easyBtn.style.background='white';
    colors=generateRandomColor(boxCount);
    pickedColor=colors[Math.floor(Math.random()*6)];
    s.textContent=pickedColor;
    console.log(boxes.length)

    for(var i=0;i<boxes.length;i++){
        boxes[i].style.background=colors[i];
        boxes[i].style.display='blocks';
    }

});

playBtn.addEventListener('click',function(){
    document.querySelector('h1').style.background='rgb(255,255,0)';
    statusText.textContent="Let's Play!!";
    colors=generateRandomColor(boxCount);
    pickedColor=colors[Math.floor(Math.random()*boxCount)];
    s.textContent=pickedColor;

    for(var i=0;i<boxes.length;i++){
        boxes[i].style.background=colors[i];
    }
});
for(var i=0;i<colors.length;i++){
    boxes[i].style.background=colors[i];
    boxes[i].addEventListener('click',function(){
        var selectedColor=this.style.background;
        console.log(selectedColor);
        console.log(pickedColor);
        if(selectedColor===pickedColor){
            statusText.textContent="Correct!!";
            playBtn.textContent="Play Again?";
            changeColors(pickedColor);
            h1.style.background=pickedColor;   
        }else{
            this.style.background='black';
            statusText.textContent='Try Again!!';
        }
    });
}

function changeColors(pickedColor){
    for(var i=0;i<colors.length;i++){
        boxes[i].style.background=pickedColor;
    }
}

function generateRandomColor(num){
     var arr=[];
     for(var i=0;i<num;i++){
         arr.push(randomColor());
     }
     return arr;
}
function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";

}   