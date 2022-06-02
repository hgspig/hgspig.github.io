let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/books-test-site.jpg') {
      myImage.setAttribute('src','images/B&WBooks.jpg');
    } else {
      myImage.setAttribute('src','images/books-test-site.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Books are awesome, ' + myName;
    }
  }
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Books are terrific, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }