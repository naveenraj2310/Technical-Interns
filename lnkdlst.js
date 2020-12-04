// Linked List

linkedlistarea = document.getElementById("linkedlistarea");
data = document.getElementById("lldata");
position = document.getElementById("llposition");

var ll = new LinkedList();

ll.insertFirst("Data");
ll.insertFirst("Defined");
ll.insertFirst("Pre");
ll.insertFirst("List");
ll.insertFirst("Linked");


linkedlistarea.innerHTML = render(ll.printListData());

function render (arr){
        str= ''
        count = 0;
        arr.forEach(element => {
            
            str += "<button class=\"btn btn-outline-dark \" Style='width:100px' onclick =\"position.value = "+count+"\"> " + element +"</button>";
            count++;
        });
        return str;
}

function insertf(){
    ll.insertFirst(data.value);
    
    linkedlistarea.innerHTML = render(ll.printListData());

}
function insertl(){
    ll.insertLast(data.value);
    linkedlistarea.innerHTML = render(ll.printListData());

}

function insertat(){
    ll.inserAt(data.value ,position.value);
    linkedlistarea.innerHTML = render(ll.printListData());
}

function getat(){
     document.getElementById("getAt").value =ll.getAt(position.value) ;
}
function removeat(){
    ll.removeAt(position.value);
    linkedlistarea.innerHTML = render(ll.printListData());
}

function clearL(){
    ll.clearList();
    linkedlistarea.innerHTML = render(ll.printListData());
}

// date Calculation

function getDate(){
    var today = new Date();
    document.getElementById("dateone").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    document.getElementById("datetwo").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    dateDifference()
}
date1 = document.getElementById("dateone");
date2 = document.getElementById("datetwo");
respara = document.getElementById("resid");
function dateDifference() {
try {
    date1value = new Date(date1.value);
    date2value = new Date(date2.value);

    const diffTime = Math.abs( date2value- date1value);
    respara.innerHTML = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + " Days "; 
} catch (error) {
    console.log(error);
}
}