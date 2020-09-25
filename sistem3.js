`use strict`;

const data = [{
    currencyName: `USD`,
    rateToEUR: 0.44,
    rateToUAH: 25.5
  },
  {
    currencyName: `EUR`,
    rateToUSD: 1.5,
    rateToUAH: 30.5
  },
  {
    currencyName: `UAH`,
    rateToEUR: 0.44,
    rateToUSD: 0.4
  },
]; // data = [1, 2, 3]

const currencyNameA = document.querySelectorAll(`.currency span`)[0];
currencyNameA.addEventListener(`click`, function () {
  if(this.nextElementSibling.style.display == `none`){
    this.nextElementSibling.style.display = `block`
  }else if(this.nextElementSibling.style.display ==`block`){
    this.nextElementSibling.style.display = `none`;
  }
});

const currencyNameB = document.querySelectorAll(`.currency span`)[1];
currencyNameB.addEventListener(`click`, function (){
  if(this.nextElementSibling.style.display == `none`){
    this.nextElementSibling.style.display = `block`
  }else if(this.nextElementSibling.style.display ==`block`){
    this.nextElementSibling.style.display = `none`;
  }
});

let itemsListA = makeList(0);
let itemsListB = makeList(1);
chenger (itemsListA,0);
chenger (itemsListB,1);
findering();
howMach()/////////////////////////////////////////////







//
function makeList (index){
 let listA = document.getElementsByClassName('currencyList')[index];
 for(let counter = 0 ;counter < data.length;counter++){
   let items = document.createElement(`li`);
   items.innerText = data[counter].currencyName;
   listA.append(items);}
   return listA;
  }

  //
  function chenger (list,index){
    let crn = document.querySelectorAll(`.currency span`)[index];
  for(let a = 0 ; a < list.children.length; a++){
    let lister = list.children[a];
    lister.addEventListener(`click`, function(){
      crn.innerHTML = lister.innerHTML;
      list.style.display = `none`;  
      findering();
      howMach()///////////////////////////////////////

    })
  }
}

//
function findering (){
  let result = document.getElementsByClassName(`currencyTo`)[0]
for(let a = 0;a < data.length;a++){
 let find = data[a];
  if(find.currencyName == currencyNameA.innerText){
  for(let finder in find){
    if(finder.includes(currencyNameB.innerText) == true){
     result.innerText = find[finder];
     }else if(currencyNameA.innerText == currencyNameB.innerText){
       result.innerText = 1;}
     }
    }
  }
}

function howMach(){
  let a = document.getElementsByClassName(`get`)[0]
  let b = document.getElementsByClassName(`currencyTo`)[0]
  a.innerHTML = b.innerText * 20;}