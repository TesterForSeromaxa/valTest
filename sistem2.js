`use strict`;

const data = [{
    currencyName: `USD`,
    rateToEUR: 0.45,
    rateToUAH: 25.5
  },
  {
    currencyName: `EUR`,
    rateToUSD: 1.5,
    rateToUAH: 30.5
  },
  {
    currencyName: `UAH`,
    rateToEUR: 0.46,
    rateToUSD: 0.4
  },
]; // data = [1, 2, 3]


let list1 = document.getElementsByClassName(`currencyList`)[0];
let item = document.createElement(`li`);
item = data[0];


list1.append(item.currencyName)
console.log(list1)


let ser = document.getElementsByClassName(`currencyTo`)[0]

ser.innerHTML = item.rateToUAH




























// let itemsListA = makeList(0);
// let itemsListB = makeList(1);
// chenger (itemsListA,0);
// chenger (itemsListB,1)



 
const currencyName = document.querySelectorAll(`.currency span`)[0];

currencyName.addEventListener(`click`, function () {
  this.nextElementSibling.style.display = `block`;
});

const currencyName2 = document.querySelectorAll(`.currency span`)[1];



currencyName2.addEventListener(`click`, function (){
  this.nextElementSibling.style.display = `block`;
});



// function makeList (index){
//  let listA = document.getElementsByClassName('currencyList')[index];
//  for(let counter = 0 ;counter < data.length;counter++){
//    let items = document.createElement(`li`);
//    items.innerText = data[counter].currencyName;
//    listA.append(items);}
//    return listA;
//   }

  
//    function chenger (list,index){
//     let crn = document.querySelectorAll(`.currency span`)[index]
//   for(let a = 0 ; a < list.children.length; a++){
//     let lister = list.children[a]
//     lister.addEventListener(`click`, function(){
//       crn.innerHTML = lister.innerHTML
//       list.style.display = `none`;
//      })
//     }
//   }
  







// let rate = document.getElementsByClassName(`currencyTo`)
// console.log(rate)
// if(currencyName == data[1].currencyName && currencyName2 == data[0].currencyName){
// rate.innerText = data[1].rateToUSD
// }















