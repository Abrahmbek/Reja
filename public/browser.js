//const { response } = require("../app");

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


document.addEventListener("click", function(e){      // browserdagi btn larni bosganda xozil boladi function e aynan nima bosilganini qolga kirirtib beradi
      //delete oper
      console.log(e.target);                       // e ni ichidagi target  target bu edit me, btn ... va boshqalar
    if(e.target.classList.contains("delete-me")) {    // ejs da classlist ichidan contains buyrugi orqali  delete me button ni ushlab oldik
      
      
        if(confirm('are you sure?')) {                //confirm browserga tegishli js bilan birga ishlaydi
            axios
            .post("/delete-item", {id: e.target.getAttribute("data-id")})  // axios da post qilamiz va u backent ga boradi id 
            .then((response) => {             // response ornida dat ham kelishi mn
                console.log(response.data);        // shu yergacha db dan malumotlani ochrirb bizaga qaytib keldi
                e.target.parentElement.parentElement.remove(); // bu yerda agar delete bosadigan bolsak browserdan ham ochirib tashlaydi
            })
            .catch((err) =>{
                console.log("qaytadan xarakat qiling");    // agarda qandaydir xatolik bolsa uni bizga korsatadi
            });
        }                                             
        
       
    }
// edit qismi
   
   if(e.target.classList.contains("edit-me")) {
       let userInput = prompt("ozgartirish kirirting",         // prompt bu browserni maxsus kamandasi
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML  //ozgartirish kiritmoqchi bolagnimizda bizga 0 da boshlab qiymat emaas textni chiqarib bersin
       );
       if (userInput) {
        axios                      //biz yangi qiymat kirityapmi va uni axios orqali post qilyapmiz
        .post("/edit-item", {
            id: e.target.getAttribute("data-id"),
            new_input: userInput,       // new input bu yerda yangi textimiz 
            })
            .then((response )=>{
            console.log(response.data);
            e.target.parentElement.parentElement.querySelector(
                ".item-text"
                ).innerHTML = userInput;      // yangi berilagn qiymatka tenglashtirib olamiz

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
    .post("/delete-all", {delete_all: true })         //delete -all degan api xosil qilaypmiz
    .then((response) => {
        alert(response.data.state);
       // document.location.reload();    // browserimizni reload qilib clean qilib beryapti
       document.querySelector("#item-list").innerHTML = "";
    });
  });






