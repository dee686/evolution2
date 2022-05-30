// Add the coffee to local storage with key "coffee"
let arr=JSON.parse(localStorage.getItem("coffee"))|| []
  let count=0
       async function getdata(){
        let url=`https://masai-mock-api.herokuapp.com/coffee/menu`
        let res=await fetch (url)
        let data=await res.json()
        console.log(data.menu.data)
        append(data.menu.data)

       }
       getdata()
      
       function append(data){
         let container=document.getElementById("menu")
        data.forEach(function(element){
          let box=document.createElement("div");

          let imgbox=document.createElement("div")
          let img= document.createElement("img")
          img.src=element.image;

          let name=document.createElement("p")
          name.innerText=element.title;

          let price=document.createElement("p")
          price.innerText=element.price;

          let btn=document.createElement("button")
          btn.innerText="Add to Bucket"
          btn.setAttribute("id","add_to_bucket")
          btn.addEventListener("click",function(){
            add(element)})

          imgbox.append(img)
          box.append(imgbox,name,price,btn)
          container.append(box)
        });

        function add(el){

          count++;
          let add=document.getElementById("coffee_count")
          add.innerText=count

          arr.push(el)
          localStorage.setItem("coffee",JSON.stringify(arr))
          console.log(arr)
        }

       }
