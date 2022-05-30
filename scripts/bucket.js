// On clicking remove button the item should be removed from DOM as well as localstorage.
let arr=JSON.parse(localStorage.getItem("coffee"))


function append(data){
  document.getElementById("bucket").innerHTML="";
  let sum=0
data.forEach(function(element,index){
  let container=document.getElementById("bucket")
        
          let box=document.createElement("div");

          let imgbox=document.createElement("div")
          let img= document.createElement("img")
          img.src=element.image;

          let name=document.createElement("p")
          name.innerText=element.title;

          let price=document.createElement("p")
          price.innerText=element.price;
          sum=sum+element.price

          let btn=document.createElement("button")
          btn.innerText="remove"
          btn.setAttribute("id","remove_coffee")
          btn.addEventListener("click",function(){
            remove(index)})

          imgbox.append(img)
          box.append(imgbox,name,price,btn)
          container.append(box)

});
document.getElementById("total_amount").innerText=sum

}

function remove(index){

let newarr= arr.filter(function(el,i){

 return i!==index

 })
 localStorage.setItem("coffee",JSON.stringify(newarr))
 append(newarr)
}
append(arr)