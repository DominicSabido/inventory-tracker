/*
Each part has an id, name, product it belongs to product part number, quantity, low quantity threshold.
*/

const inventory = [
  {
    id: "KI20MAINPCB",
    name: "Ki20 main pc board",
    products: [{ product: "KI20CB", partNumber: 39 }],
    qty: 10,
    lowQtyThreshold: 5,
  },
  {
    id: "KI20FRONTPCB",
    name: "Ki20 front pc board",
    products: [{ product: "KI20CB", partNumber: 9 }],
    qty: 5,
    lowQtyThreshold: 2,
  },
  {
    id: "CYCLONEMAINPCB",
    name: "Cyclone main pc board",
    products: [{ product: "CYCLONECB", partNumber: 10 }],
    qty: 10,
    lowQtyThreshold: 3,
  },
];
const container = document.getElementById("inventory-list");

function renderInventory(){
  container.innerHTML = ""; //Clears out any existing HTML content inside the container element
inventory.forEach((item) => { // Loops through the inventory object
  
  const p = document.createElement("p"); // Creates a <p> element
  p.innerText = `${item.name} / Qty: ${item.qty}`; //Creates the text that will be in between <p></p>. The backticks allows variables using ${...}
  container.appendChild(p); //Adds the p element into the container element

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => deleteItem(item.id));
  p.appendChild(deleteBtn);

  const plusBtn = document.createElement("button");
  plusBtn.innerText = "+";
  plusBtn.addEventListener("click", () => changeQty(item.id, 1));
  p.appendChild(plusBtn);

  const minusBtn = document.createElement("button");
  plusBtn.innerText = "-";
  plusBtn.addEventListener("click", () => changeQty(item.id, -1));
  p.appendChild(minusBtn);
});
}



function addItem(){
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const product = document.getElementById("product").value;
  const partNumber = document.getElementById("partNumber").value;
  const qty = Number(document.getElementById("qty").value);
  const lowQtyThreshold = Number(document.getElementById("lowQtyThreshold").value);

  const newItem = {
    id: id,
    name: name,
    products: [{ product: product, partNumber: partNumber }],
    qty: qty,
    lowQtyThreshold: lowQtyThreshold,
  };
  //console.log(newItem);
  inventory.push(newItem);
  renderInventory();
}

//This is the event listener for when the form is submitted
const addButton = document.getElementById("addButton");
addButton.addEventListener("click",addItem);

function deleteItem(id){
  const index = inventory.findIndex((item) => item.id === id); //.findIndex looks through inventory, it takes the current item, looks at the current items id and checks if matches the id passed in the parameter. if it's true, it returns the current item's index.
  inventory.splice(index, 1)// starting at index, remove 1
  renderInventory();
}

function changeQty(id, amount){
  const item = inventory.find((part) => part.id === id);
  item.qty = item.qty + amount;
  renderInventory();
}

renderInventory();


