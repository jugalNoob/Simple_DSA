1::What is stack?

// let data=[];
// let cureent=data.length;
// let max=5;
// //
// function push(newel){
//     if(cureent > max){
//         console.log("mother fucker" , newel)
// }else{
//     data[cureent]=newel;
//     cureent+=1

// }
// }
// //
// function pop(){

//     if(cureent >0){

//         cureent-=1;

//         data.length=cureent

//     }else{

//         alert("stack is arlready empty")
//     }
// }
// push(20)
// push(30)
// push(40)
// push(50)
// push(60)
// push(70)
// push(80)
// ///
// pop()
// ///
// pop()
// console.log(data)

///Button use inpute and outpute


let data=[];
let cureent=data.length;
let max=5;
//
function push(){

    let newel= document.getElementById('newEl').value;
    if(cureent > max){
        console.log("mother fucker" , newel)
}else{
    data[cureent]=newel;
    cureent+=1

}
}
//
function pop(){

    if(cureent >0){

        cureent-=1;

        data.length=cureent

    }else{

        alert("stack is arlready empty")
    }
}

push()

// push(20)
// push(30)
// push(40)
// push(50)
// push(60)
// push(70)
// push(80)
///
pop()
///
pop()



console.log(data)

function display(){

    for(let i=0; i<=cureent-1; i++){

        console.log(data[i])

    }
}



 

 //////////////Stack Use  class function
 

      class Stack {
        item = [];
        currentSize;
        maxSize;
        constructor(size) {
          this.maxSize = size;
          this.currentSize = this.item.length;
        }
        push(newVal) {
            if(this.currentSize>=this.maxSize){
                alert("stack is full");
            }else{
                this.item[this.currentSize]=newVal;
                this.currentSize++;
            }
        }
        pop() {
            if(this.currentSize>0){
                this.currentSize--;
                this.item.length=this.currentSize;
            }else{
                alert("stack is already empty")
            }
        }
        display() {
            console.warn(this.item)
        }
      }
      st1 = new Stack(5);
    //   st1.push(20)
    //   st1.display();


    ////////////NOTE - Revers String in stack //ANCHOR - 
    
//ANCHOR - //!SECTION
let data =[];
let currentSize=data.length;
function push(newVal){
   data[currentSize]=newVal;
   currentSize+=1;
}
function pop(){
   lastRemovedItem=data[currentSize-1];
   currentSize-=1;
   data.length=currentSize;
   return lastRemovedItem;
}

function reverseStr(item){
   for(let i=0;i<item.length;i++){
       push(item[i])
   }
   for(let i=0;i<item.length;i++){
   item[i]=pop();
   }
   
}


let str="jugal sharma";
str=str.split("");
reverseStr(str)
console.warn(str.join(""))



||||||||||||Real Stack Line/////////////!SECTION inpute and outpute


let data = [];
let currentSize = data.length;
let max = 5;
function push() {
  let newVal= document.getElementById('newEl').value;
  if (currentSize >= max) {
    alert("Stack is full you can not add" + newVal);
  }else{
      data[currentSize] = newVal;
  currentSize += 1;
  document.getElementById('newEl').value="";
  console.warn("element added")
  }
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}
function display(){
  for(let i=0;i<=currentSize-1;i++){
      console.log("el. no",i, "and value is ",data[i])
  }
}



<input type="text"  value="" placeholder="enetr stack element" id="newEl"/>

    <button onclick="push()">add push element stack</button>
<br>
    <br>
    <button onclick="pop()">remove elemnt in stack</button>
<br>
    <br>
    <button onclick="display()">display element</button>
