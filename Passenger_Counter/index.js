// What we need to do:

// 1 initialize the count as 0
// 2 listen for the clicks on the increment button for java to be aware that the button was clicked
// 3 We increment the count variable when the button is clicked
// 4 change the count-el in the html to reflect the new count

// increment code and number count code
let countEl = document.getElementById("count-el"); // hi html please get me this ID(the variable contains the html id)

let count = 0;

function increment() {     //when button clicked ,run this function(using onclick attribute on my html)
    count += 1;
    countEl.textContent = count;   //so that it can change on the html(innerText)inner text will change when clicked   
     
}
increment();

//save button code
let saveEl = document.getElementById("save-el");


function save() {
    let countSaved = count + " - ";
    saveEl.textContent += countSaved; //we can also used .textContent rather than .innerText
    countEl.textContent = 0; //start back from 0
    count = 0;
    
    
    
}
save();