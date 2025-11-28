document.querySelector("body").style.background="Lavender";
let pause=false;
function check(matrix,i,j){
let draw=0;
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if(matrix[i][j].innerText!=="")draw++;
    }
}
if(draw===9)return "draw";
let point = matrix[i][j].innerText;
let row=true;
let col=true;
let corner1=true;
let corner2=true;
for(let st=0;st<matrix.length;st++){

    if(matrix[i][st].innerText!==point){
 console.log(i,st);       
        row=false;
}
}
for(let st=0;st<matrix.length;st++){

    if(matrix[st][j].innerText!==point)col=false;
}
let trv=2;
for(let st=0;st<3;st++){
    if(matrix[st][st].innerText!==point)corner1=false;
    if(matrix[st][trv--].innerText!==point)corner2=false;
}

if(col===true||row===true||corner1==true||corner2==true)return true;
return false;
}




let val=0;
function make_br(){
    let br=document.createElement("br");
return br;
}
let container=document.createElement("div");
container.setAttribute("id","container");
container.style.position = "absolute";
container.style.top = "50%";
container.style.left = "50%";
container.style.transform = "translate(-50%, -50%)";


        document.querySelector("body").append(container);
function play_againn(matrix,i,j,div){
        let play_again=document.createElement("button");
play_again.innerText="Let's Play again!";
play_again.style.background="white";
play_again.style.color="black";
play_again.style.height="50px";
play_again.style.width="80px";
play_again.addEventListener("click",()=>{
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        matrix[i][j].innerText="";
       
    }
}
play_again.remove();

div.remove();
val=0;
pause=false;
document.querySelector("body").style.background="white";
});
document.querySelector("#container").append(play_again);
}

function print(matrix,i,j){
    pause=true;
    let div=document.createElement("div");
    document.querySelector("#container").append(div);
    document.querySelector("body").style.background="green";
    let h1=document.createElement("h1");
    h1.innerText="MATCHHHHM !! "+matrix[i][j].innerText+" You GOt ITTTT !!";
    

    div.append(h1);

    play_againn(matrix,i,j,div);
 

}

function draw_print(matrix,i,j){

    let draw_button=document.createElement("button");
    draw_button.innerText="THE GAME IS DRAW !!";
    draw_button.style.background="MidnightBlue";
    draw_button.style.color="white";
    document.querySelector("body").style.background="Grey";
document.querySelector("#container").append(make_br());
document.querySelector("#container").append(make_br());

    document.querySelector("#container").append(draw_button);

play_againn(matrix,i,j,draw_button);
}

let idx= Array.from({length:3},()=>Array.from({length:3},()=>document.createElement("button")));


for(let i=0;i<3;i++){
for(let j=0;j<3;j++){
idx[i][j].style.height="100px";
idx[i][j].style.width="200px";
idx[i][j].innerText="";

idx[i][j].style.color="black";
idx[i][j].style.background="pink";



}
}
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        
        document.querySelector("#container").append(idx[i][j]);
        // document.querySelector("body").append(container);
        idx[i][j].onclick=()=>{
            if(idx[i][j].innerText===""&&pause===false){
            if(val%2==0)idx[i][j].innerText="❌";
            else idx[i][j].innerText="⭕";
            idx[i][j].style.fontSize="40px";
            console.log(check(idx,i,j));
            if(check(idx,i,j)===true){
                
                
                // document.querySelector("#container").append(print(idx,i,j));
                print(idx,i,j);
            }else if(check(idx,i,j)==="draw")draw_print(idx,i,j);
            val++;
        }
    }
}
document.querySelector("#container").append(make_br());
        // document.querySelector("body").append(container);

}
