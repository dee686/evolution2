let id;
  function checkout(){
    let i=0

  id = setInterval(function(){
    
     if (i==0)
     alert("Your order is accepted ")

     if(i==3000)
     alert("Your order is being Prepared")

     if(i==8000)
     alert("Your order is being packed ")

     if(i==10000)
     alert("Your order is out for delivery ")

     if(i==12000){
       alert("Order delivered")
       pause()
     }
      i=i++
      console.log(i)

    },1000)

  }

  function pause(){

    clearTimeout(id)
  }