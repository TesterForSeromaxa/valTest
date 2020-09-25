let rootBlock = document.createElement('div');
rootBlock.className = 'root';
rootBlock.style.cssText = `margin: 10% auto 0; display: flex; width: 30% `
let begin = document.getElementsByClassName('currencyCalculator')[0];
begin.style.cssText =`display: flex; flex-wrap: wrap; width: 100%;`
let a = document.getElementsByTagName(`body`)[0];
a.prepend(rootBlock);
rootBlock.append(begin);

let currBlock1 = document.createElement('div');
currBlock1.className = `curroot`;
currBlock1.style.cssText = `width: 50%;`
let aPart = document.getElementsByClassName(`currency`)[0];
let bPart = document.getElementsByClassName(`value`)[0];
begin.prepend(currBlock1);
currBlock1.append(aPart);
currBlock1.append(bPart);

let currBlock2 = document.createElement('div');
currBlock2.className = `curroot`;
currBlock2.style.cssText = `width: 50%;`
let cPart = document.getElementsByClassName(`currency`)[1];
let dPart = document.getElementsByClassName(`summary`)[0];
begin.append(currBlock2);
currBlock2.append(cPart);
currBlock2.append(dPart);

let butt = document.getElementsByTagName('button')[0];
butt.className = `firstButton`
begin.append(butt);