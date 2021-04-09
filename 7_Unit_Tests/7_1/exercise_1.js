// I do escopo da função é diferente do I no escopo do If.

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
   let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

checkScope() 
