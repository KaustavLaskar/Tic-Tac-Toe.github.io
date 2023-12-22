let box=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetBtn");
let msg=document.querySelector("#msg");
let newGameBtn=document.querySelector("#new-btn");
let messageContainer=document.querySelector(".message-container");


let turn0=true;
// WinPattern Of Game
const winPattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[4,4,6],[3,4,5],[6,7,8]
];

box.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("The Box is Clicked");
        if(turn0){
            box.innerHTML="O";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});


const enableBoxes=()=>{
    box.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });
};


const resetGame=()=>{
    turn0=true;
    enableBoxes();
    messageContainer.classList.add("hide");
};


const disableBoxes = () =>{
    box.forEach((box)=>{
        box.disabled=true;
    });
};

const  showWinner=(Winner)=>{
    msg.innerText= `Congratulation, The winner is ${Winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos1val=box[pattern[0]].innerText;
        let pos2val=box[pattern[1]].innerText;
        let pos3val=box[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
