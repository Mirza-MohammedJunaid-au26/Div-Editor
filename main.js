const box = document.querySelector(".box")
const text = document.querySelector("#text")
const height = document.querySelector("#height")
const width = document.querySelector("#width")
const bgColor = document.querySelector("#bgColor")
const txtColor = document.querySelector("#txtColor")
const brRadius = document.querySelector("#brRadius")
const btn = document.querySelector(".btn")
const generate_code = document.querySelector(".generate-code")
const para = document.createElement("p")
const div = document.createElement("div")
let h_input_valuee = height.value ;
let w_input_valuee = width.value ;
let bg_input_valuee = bgColor.value ;
let txt_input_valuee = txtColor.value ;
let br_input_valuee = brRadius.value ;

text.addEventListener("keyup",(event)=>{
    let txt_input = event.key
    if(txt_input === "Enter"){
        const input_value = text.value;
        console.log(input_value);
        para.innerText=input_value;
        box.appendChild(para);
    }
})



height.addEventListener("keyup",(event)=>{
   let h_input = event.key
   if(h_input === "Enter"){
       const h_input_value = height.value;
       console.log(h_input_value);
       box.style.height = h_input_value;
   }
})

width.addEventListener("keyup",(event)=>{
   let w_input = event.key
   if(w_input === "Enter"){
       const w_input_value = width.value;
       console.log(w_input_value);
       box.style.width = w_input_value;
   }
})

bgColor.addEventListener("keyup",(event)=>{
   let bg_input = event.key
   if(bg_input === "Enter"){
       const bg_input_value = bgColor.value;
       console.log(bg_input_value);
       box.style.backgroundColor = bg_input_value;
   }
})

txtColor.addEventListener("keyup",(event)=>{
   let txt_input = event.key
   if(txt_input === "Enter"){
       const col_input_value = txtColor.value;
       console.log(col_input_value);
       box.style.color= col_input_value;
   }
})

brRadius.addEventListener("keyup",(event)=>{
   let br_input = event.key
   if(br_input === "Enter"){
       const br_input_value = brRadius.value;
       console.log(br_input_value);
       box.style.borderRadius = br_input_value;
   }
})



btn.addEventListener("click",(event)=>{
   let gn = generate_code.style.display = "flex";
        
   let h_input_valuee = height.value ;
   let w_input_valuee = width.value ;
   let bg_input_valuee = bgColor.value ;
   let txt_input_valuee = txtColor.value ;
   let br_input_valuee = brRadius.value ;


      if(h_input_valuee != ""){
          div.classList.add("height-gn")
          div.innerHTML=("height : " + h_input_valuee);
          generate_code.appendChild(div)
      }

      if(w_input_valuee != ""){
          w_div = document.createElement("div")
          w_div.classList.add("width-gn")
          w_div.innerHTML=("width : " + w_input_valuee);
          generate_code.appendChild(w_div)
      }
      if(bg_input_valuee != ""){
          bg_div = document.createElement("div")
          bg_div.classList.add("bg-gn")
          bg_div.innerHTML=("background-color: " + bg_input_valuee);
          generate_code.appendChild(bg_div)
      }
      if(txt_input_valuee != ""){
           txt_div = document.createElement("div")
          txt_div.classList.add("color-gn")
          txt_div.innerHTML=("color: " + txt_input_valuee);
          generate_code.appendChild(txt_div)
      }
      if(br_input_valuee != ""){
            br_div = document.createElement("div")
          br_div.classList.add("br-gn")
          br_div.innerHTML=("border-radius: " + br_input_valuee);
          generate_code.appendChild(br_div)
      }

  
})


