


      const txtOutput=document.getElementById("output");
      const txtName=document.getElementById("name");
      const btnPay=document.getElementById("cart");
      
      //adding an eventlistener
      btnPay.addEventListener("click",processOrder);
      

      //process oreder function
      function processOrder(event){
         if(theform.checkValidity()){
            event.preventDefault();
            let name=txtName.value;
            const deliveryDate=new Date();
            deliveryDate.setDate(deliveryDate.getDate()+7);
            txtOutput.innerText=`${name}, Your order will be delivered on ${deliveryDate}`;
            localStorage.removeItem("cart");
         }
      }
    
        