const { response } = require("../app");

console.log("fronted qoshildi");
function itemTemplate(item) {
return ` <li 
class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
<span class="item-text">${item.reja}</span>
 <div>
     <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
         ozgartirish
         </button>
         <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">
             ochirish
             </button>
 </div>
</li>`;
}

let createField = document.getElementById("create-field");  // bu yerda creat feild ni ushlab olyapmiz htmlda 

document
.getElementById("create-form")
.addEventListener("submit", function (e) {
e.preventDefault();

    axios      // modern request
    .post("/create-item", { reja: createField.value })   // create -field ni qolga ovoldik
    .then((response) =>{
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("qaytadan xarakat qiling");
    });
});


document.addEventListener("click", function(e){
      //delete oper
      console.log(e.target);
    if(e.target.classList.contains("delete-me")) {    // ejs da classlist contains ichidan delete me button ni ushlab oldik
      
      
        if(confirm('are you sure?')) {                //confirm browserga tegishli js bilan birga ishlaydi
            axios
            .post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) =>{
                console.log("qaytadan xarakat qiling");
            });
        }                                             
        
       
    }
// edit qismi
   
   if(e.target.classList.contains("edit-me")) {
       let userInput = prompt("ozgartirish kirirting",
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
       );
       if (userInput) {
        axios
        .post("/edit-item", {
            id: e.target.getAttribute("data-id"),
            new_input: userInput,
            })
            .then((response )=>{
            console.log(response.data);
            e.target.parentElement.parentElement.querySelector(
                ".item-text"
                ).innerHTML = userInput;

        })
        .catch((err) =>{
          console.log("qaytadan xarakat qiling");
        });
       }
    }
});
    // hammasini ochirish 

  document.getElementById("clean-all").addEventListener("click", function() {
    axios
    .post("/delete-all", {delete_all: true })
    .then((response) => {
        alert(response.data.state);
        document.location.reload();
    });
  });






