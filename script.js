'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //treats them as an array so can loop through them all
console.log(btnsOpenModal);

//remove class list for all classes on click

const openModal = function () {
  // console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//no {} are needed b/c code is all in one line of block.
//^^ this code cycles through the array and accesses the textContent of each button
//attach event handler to buttons for click

//add classlist, refactored version of code in a function
//reason () are not added after function is b/c we do not want JS to call it as soon as it reads the code. It is only to be called when clicked.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Use esc key to exit modal by:
// assigning keypress to esc key
// checking if the class is not hidden before running the function

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'Escape') {
//     if (!modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   }
// });

//alternative way of coding
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
