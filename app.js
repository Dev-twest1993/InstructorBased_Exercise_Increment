let numberBox = document.querySelector("#numberBox");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let my_number = 0;

plus.addEventListener('click', function(){
    //store the numberBox value into the new variable numberBoxInput
    let numberBoxInput = numberBox.value;
    my_number = numberBoxInput;
    //add 1
    my_number ++;
    numberBox.value = my_number;
});

minus.addEventListener('click', function(){
    let numberBoxInput = numberBox.value;
    my_number = numberBoxInput;
    //shortcut for minus 1
    my_number -- ;
    numberBox.value = my_number;
});

//reset to zero
reset.addEventListener('click', function(){
    my_number = 0;
    numberBox.value = my_number;
});
