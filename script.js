currentName=""
groceryList=[]

function initialize(){
    list = document.getElementById("grocery")
    var itemVal = document.getElementById("item")
    var number = document.getElementById("itemNum")
}

function add(){
    currentName=item.value
    if (currentName===""){
        alert("Please enter a name for the grocery you wish to add.")
    }
    else{
    groceryList.push(item.value)
    item.value=""
    }
    display()
}

function moveUp(){
    num = parseInt(itemNum.value)
    if (num>0&&num<=groceryList.length){
    let temp = groceryList[0]
    groceryList.splice(0,1)
    groceryList.push(temp)
    display()
    }
    else {
        alert('Please enter a valid number that corresponds with the item numbers.')
    }
}

function moveDown(){
    num = parseInt(itemNum.value)
    if (num>0){
    let temp = groceryList.pop()
    groceryList.unshift(temp)
    display()
    }
    else {
        alert('Please enter a valid number that corresponds with the item numbers.')
    }
}

function remove(){
    num = parseInt(itemNum.value)
if (num>0){
    let temp = groceryList.splice(num-1,1)
}
    else if (groceryList.length<1){
        alert('Please add items to the list before trying to remove anything.')
    } 
    else
    {
        alert('Please enter a valid number that corresponds with the item numbers.')
    }
    display()

}

function display(){
    list.innerHTML ="Grocery List"
    for (let i=0;i<groceryList.length;i++){
    list.innerHTML += "<li>" +groceryList[i] +"</li"
    }

}