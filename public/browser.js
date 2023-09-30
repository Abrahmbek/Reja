console.log("fronted qoshildi");
let createField = document.getElementById("create-field");

document
.getElementById("create-form")
.addEventListener("submit", function (e) {
e.preventDefault();

    axios
    .post("/create-item", { Reja: createField.value })
    .then((data) =>{})
    .catch((err) => {});
});
