//console.log("Hello World")
//alert("Ada Notifikasi")
//prompt("Pinjam Seratus")

//var Promnet = "Coding is Easy"
//console.log(Promnet)
//var Promnet = "Coding not Easy"
//console.log(Promnet)

//let Promnet = "Coding is Fun"
//console.log(Promnet)

//const Promnet = "Coding is My Life"
//console.log(Promnet);
//const.Promnet= "Coding not My Life"
//console.log(Promnet);

//let totalPoin = prompt("Masukkan Poin Anda")
    //if(totalPoin >= 100){
        //document.write("Congratulation");
        //}else{
            //document.write("Keep Trying")
    //}

//let x = 6;
//let y = 3;

//console.log(x<10 && y > 1);
//console.log(x<10 && y < 1);
//console.log(x==5||y==5);
//console.log(x==6||y==5);
//console.log(!(x==y));

//document.write(x<10 && y > 1);
//document.write("<br>");
//document.write(x<10 && y < 1);

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")
// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();

function getItems(){
    const value = localStorage.getItem("todo-test") || "[]";

    return JSON.parse(value);
}

function setItems(items){
    const items.Json = JSON.stringify(items);

    localStorage.setItem("todo-test", itemsJson);
}

function setItems(items){
    const itemsJson = JSON.stringify(items);

    localStorage.setItem("todo-test", itemsJson);
}

function addItem(){
    items.unshift({
        description: "",
        completed: false
    });

    setItems(items);
    refreshList();
}

function updateItem(item, key, value){
    item[key] = value;

    setItems(items);
    refreshList();
}

function refreshList(){
    items.sort((a, b) => {
        if (a.completed){
            return 1;
        }

        if (b.completed){
            return -1;
        }

        return a.description < b.description ? -1 : 1;
    });

    ITEMS_CONTAINER.innerHTML = "";

    for (const item of items){
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.value);
        });

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.value);
        });

        ITEMS_CONTAINER.append(itemElement);
    }
}

ADD_BUTTON.addEventListener("click", () => {
    addItem();
});

refreshList();
console.log(items);

console.log(items);