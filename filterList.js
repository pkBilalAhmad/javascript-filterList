let myInput = document.getElementById('inputText');




myInput.setAttribute('onKeyUp', "myfun()")

// function myfun(){
//     // let ul = document.getElementById('ul')    
//     let ul = document.getElementById('ul')
//     let li = ul.querySelectorAll('li.collection-item');
//     let inputValue = document.getElementById('inputText').value.toUpperCase()

//     for(var i = 0 ; i < li.length ; i++){
//         let a = li[i].getElementsByTagName('a')[0]
//         let aValue = a.textContent;
//         if(aValue.toLocaleUpperCase().indexOf(inputValue) > -1){
//             li[i].style.display = ''
//         }else{
//             li[i].style.display = 'none'
//         }
//     }        

// }



function myfun() {
    // let myInput = document.getElementById('inputText');    
    let myUl = document.getElementById('ul');
    // let myLi = myUl.querySelectorAll('li')
    li = myUl.querySelectorAll("li.collection-item");

    for (var i = 0; i < li.length; i++) {
        let myValue = myInput.value.toUpperCase()
        // let a = myLi[i].getElementsByTagName('a')[0];
        let a = li[i].getElementsByTagName('a')[0];
        // var aValue = a.textContent || a.innerHTML ;
        txtValue = a.textContent || a.innerText;

        // console.log(txtValue)
        if (txtValue.toUpperCase().indexOf(myValue) > -1) {
            li[i].style.display = ''
        }else{
            li[i].style.display = 'none'
        }

    }
    // console.log(myLi[1])

}

// function myfun() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("inputText");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
