

    function processOrder(){
         const txtOutput=document.getElementById("output");
         const name=document.getElementById("name").value;
         const address=document.getElementById("address").value;
         const phone=document.getElementById("phone").value;
         const payment=document.getElementById("payment").value;

         if (name&&address&&phone&&payment){
            const deliveryDate=new Date();
            deliveryDate.setDate(deliveryDate.getDate()+7);
            txtOutput.innerText=`Your order will be delivered on ${deliveryDate}`;
            localStorage.removeItem("cart");
         }
    }
        