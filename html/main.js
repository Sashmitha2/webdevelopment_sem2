//initial values for the items

const prices={
  apple:70.0, banana:50.0, orange:65.0,avacado:60.0,pears:50.0,grapes:40.0,
  leeks:20.0, beans:20.0, beetroot:30.0, cabbage:45.0, brinjal:50.0, potatoe:35.0,
  milk:120.0, butter:130.0, yogurt:135.0,cheese:120.0, icecream:140.0, curd:150.0,
  chicken:1200.0, beef:1200.0, prawns:1300.0,dryfish:1000.0, squid:1500.0, fish:1200.0,
  oil:1000.0, flour:1300.0, sugar:1200.0,salt:1250.0, cinnamon:1000.0, egg:200.0,
};

//getting references to intractive elements
document.getElementById("add-to-cart").addEventListener("click",addToCart);
document.getElementById("save-favourites").addEventListener("click",saveFavourites);;
document.getElementById("apply-favourites").addEventListener("click",applyFavourites);;



//function to add to cart button
function addToCart(){
  const total=document.getElementById("orderTotalPrice");

  const cart=document.querySelector("#item-list-body tbody");
  let totalPrice=0;

  const items=[
    {id:'apple', name:"Apple",type:"kg"},
    {id:"banana", name:"Banana",type:"kg"},
    {id:"orange", name:"Orange",type:"kg"},
    {id:"avacado",name:"Avacado", type:"kg"},
    {id:"pears",name:"Pears", type:"kg"},
    {id:"grapes",name:"Grapes", type:"kg"},
    {id:"beetroot", name:"Beetroot",type:"kg"},
    {id:"leeks", name:"Leeks",type:"kg"},
    {id:"Beans", name:"Beans",type:"kg"},
    {id:"cabbage", name:"Cabbage",type:"kg"},
    {id:"potatoe", name:"Potatoe",type:"kg"},
    {id:"brinjal", name:"Brinjal",type:"kg"},
    {id:"milk", name:"Milk",type:"qty"},
    {id:'butter', name:'Butter',type:'qty'},
    {id:"yogurt", name:"Yogurt",type:"qty"},
    {id:"cheese", name:"Cheese",type:"qty"},
    {id:"curd", name:"Curd",type:"qty"},
    {id:"icecream", name:"Ice cream",type:"qty"},
    {id:"chicken", name:"Chicken",type:"kg"},
    {id:"beef", name:"Beef",type:"kg"},
    {id:"prawns", name:"Prawns",type:"kg"},
    {id:"dryfish", name:"Dry fish",type:"kg"},
    {id:"fish", name:"Fish",type:"kg"},
    {id:"squid", name:"Squid",type:"kg"},
    {id:"oil", name:"Oil",type:"qty"},
    {id:"sugar", name:"Sugar",type:"qty"},
    {id:"flour", name:"Flour",type:"qty"},
    {id:"cinnamon", name:"Cinnamon",type:"qty"},
    {id:"salt", name:"Salt",type:"qty"},
    {id:"egg", name:"Egg",type:"qty"},
    
  ];

  items.forEach(item=>{
    const quantity=parseFloat(document.getElementById(item.id).value) ||0;
    if (quantity>0){
      const price=prices[item.id]*quantity;
      totalPrice+=price;


      //adding to cart table
      const row=document.createElement("tr");
      row.innerHTML=`
      <td>${item.name}</td>
      <td>${quantity} ${item.type}</td>
      <td>${price.toFixed(2)}</td>`;

      cart.appendChild(row);
      
    }
  })

  //updating total price
  document.getElementById("orderTotalPrice").textContent=totalPrice.toFixed(2);
  
  
}
   
function saveFavourites(){
  const cart=document.querySelector("#item-list-body tbody");
  const items=[];

  cart.querySelectorAll("tr").forEach(row=>{
    const itemName=row.cells[0].textContent;
    const quantity=row.cells[1].textContent;
    const price=row.cells[2].textContent;

    items.push({itemName, quantity, price});
  });

  localStorage.setItem("favourites",JSON.stringify(items));
  alert("Favourites saved!");

  
}

//function to apply favourites
function applyFavourites(){
  const favourites=JSON.parse(localStorage.getItem("favourites")) ||[];
  const cart =document.querySelector("#item-list-body tbody");


//clear current cart

cart.innerHTML="";

let totalPrice=0;

favourites.forEach(item=>{
  const row=document.createElement("tr");
  row.innerHTML=`
  <td>${item.itemName}</td>
  <td>${item.quantity}</td>
  <td>${item.price}</td>`;

  cart.appendChild(row);

totalPrice+=parseFloat(item.price);
});

//updating total price
document.getElementById("orderTotalPrice").textContent=totalPrice.toFixed(2);
}

