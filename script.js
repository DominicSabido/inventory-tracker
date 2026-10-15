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
  container.innerHTML = "";
inventory.forEach((item) => {
  const p = document.createElement("p");
  p.innerText = `${item.name} / Qty: ${item.qty}`;
  container.appendChild(p);
});
}

const addButton = document.getElementById("addButton");

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
  console.log(newItem);
}
renderInventory();

