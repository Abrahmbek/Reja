
// TASK A


// function countLetter(harf, soz) {            //ikkita parametrli funksiya elon qildik
//     let sanash = 0;                            // sanash ozgaruchisi orqali qoshib boradi
    
    
//     for (let i = 0; i < soz.length; i++) {         //   for operatoi orqali pastta berilgan                                                                                           // argumentni uzunligi boyicha harfma harf                                                                                           //  tekshiradi agar topsa sanashga 1 ta qoshib qoyadi
//       if (soz[i] === harf) {
//         sanash++;
//       }
//     }
    
//     return sanash;
//   }
  
//   const natija = countLetter("a", "abrahm, anvar, akmal"); // bu yerda natija ozgaruchisiga argumentlarimizni beramiz 
//   console.log(natija);                                      /// va log qilib natijani olamiz


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TASK B


//   function raqamQaytar(matn) {
//     let sana = 0;
  
//     for (let i = 0; i < matn.length; i++) {
//       const belgi = matn.charAt(i);          // bu yerda charAt  method dan foydalanib string ni ichidagi belgilani indexlani olishda ishlatiladi
     
//       if (belgi >= '0' && belgi <= '9') {          // if dan foydalanib matn ichida 0 dan 9gacha raqam bormi shu tekshiradi 
//         sana++;
//       }                                          // agar bolsa bitta qoshib qoyadi
//     }
  
//     return sana;
//   }
  
 
//   const matn1 = "ag1aw5g6fhuwh2ofhwu0rh2roh28";            // bu yerda matn1 ozgaruvchisi orqali matnimizni kiritib oldik
//   const sana = raqamQaytar(matn1);                        // va uni sana degan opzgaruvchiga berib yubordik
//   console.log("matndagi raqamlar soni:", sana);              

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//TASK C


// const  tekshir = (matn1, matn2) => {
 

//     const qosh1 = matn1.split('').sort();
    
//     const qosh2 = matn2.split('').sort();
  
    
//     return qosh1.join('') === qosh2.join('');
//   }
  
  
//   console.log(tekshir("abababa", "abababa")); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task d

// const moment = require("moment");
// class Shop {
   
//      constructor(cola_bor, non_bor, pista_bor) {
//       this.mahsulotlar = {
//         cola: cola_bor,
//         non: non_bor,
//         pista: pista_bor
//       };
//      }


//      xabar(){
//       const time = moment().format("HH:MM:SS");
//       console.log(`[${time}] da xabar mahsulotlar mavjud,`, this.mahsulotlar);
//      }

//      sotuv(mahsulot, mavjud){
//       const time = moment().format("HH:MM:SS");
//       if(this.mahsulotlar[mahsulot]) {
//         this.mahsulotlar[mahsulot] -= mavjud;
//         console.log(`[${time}] da ushbu ${mavjud} mahsulot sotildi ${this.mahsulot}`);
//         }
//         else{
//           console.log(`[${time}] da ushbu ${mahsulot} mavjud emas`);
//         }
    
//      }
      
//      qabul(mahsulot, mavjud) {
//       const time = moment().format("HH:MM:SS");
//       if(this.mahsulotlar[mahsulot]) {
//         this.mahsulotlar[mahsulot] += mavjud;
//         console.log(`[${time}] da ushbu ${mavjud} mahsulot ${mahsulot} qoshildi`);
//         }
//         else{
//           console.log(`[${time}] da ushbu ${mahsulot} qabul qilinmadi`);
//         }
    
//      }
//      qoldiq(){
//       const time = moment().format("HH:MM:SS");
//       console.log(`[${time}] da mahsulotlar mavjud:`, this.mahsulotlar);
//      }


// }
// const shop = new Shop(4, 3, 1);

// shop.xabar();
// shop.sotuv('choy', 3);
// shop.qabul('pista', 4);
// shop.qoldiq();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// callback functions 

// console.log("jack ma maslahatlari");
// const list =[
//   "yaxshi talaba boling",
//   "togri boshliq tanlang", 
//   "uzingizga ishlashni boshlang",
//   "siz kuchli bo'lgan narsalarni qiling",
//   "yoshlarga invistitsiya qiling",
//   "endi dam oling , foydasi yoq",
// ];

// function advise(age, callback) {
// if (typeof age !=="number") callback("insert a number", null);
// else if (age <=20) callback(null, list[0]);
// else if (age >20 && age <= 30) callback(null, list[1]);
// else if (age >30 && age <= 40) callback(null, list[2]);
// else if (age >40 && age <= 50) callback(null, list[3]);
// else if (age >50 && age <= 60) callback(null, list[4]);
// else {
//   setTimeout(function() {
//     callback(null, list[5]);
//   }, 5000);
  
//   }
// }

// console.log("paased here:")
// advise(65, (err, data) =>{                   // callback da parametr sifatida function ishga tushadi
//  if(err) console.log('ERROR:', err);        //agar xatolik bolsa bizga xatoni korsat
// else { 
//   console.log('javob:', data);
//   }                                         //togri ishlas bizga javobni korsat
// });
// console.log('passed here 1: ');               //csllbackni asosiy vazifasi node.js da RAM ni bant qilmaslik uchun ishlatamiz
                                       //yozayotkan loyihalarimizni tez va oson ishlashi uchu qulay. 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                                       


// asynchronous functionlarni qullash

// console.log("jack ma maslahatlari");
// const list =[
//   "yaxshi talaba boling",
//   "togri boshliq tanlang", 
//   "uzingizga ishlashni boshlang",
//   "siz kuchli bo'lgan narsalarni qiling",
//   "yoshlarga invistitsiya qiling",
//   "endi dam oling , foydasi yoq",
// ];

// async function advise(age) {
// if (typeof age !=="number") throw new Error("insert a number");
// else if (age <=20) return list[0];
// else if (age >20 && age <= 30) return list[1];
// else if (age >20 && age <= 30) return list[2];
// else if (age >20 && age <= 30) return list[3];
// else if (age >20 && age <= 30) return list[4];
// else {
  
//   return new Promise((resolve, reject) =>{
//     setTimeout(()  => {
//      resolve(list[5]);
//     },3000);
//   });
  
  
  
  // setTimeout(function() {
  //   callback(null, list[5]);
  // }, 5000);
  
//   }
// }

// then catch orqali ishlatdik

// console.log("paased here:")
// advise(23)
// .then((data) => {
// console.log("javob:", data);
// })
// .catch((err)  =>{
//   console.log("ERROR:" , err);
// });


// async function run() {
//   let javob = await advise(25);
//   console.log(javob);                           // bu yerta ketma ketlik bilan keyingi javobga otadi 
//   javob = await advise(47);                     // birinchisidan javob kelmaguncha ikkinchisiga otmaydi
//   console.log(javob);
//   javob = await advise(60);
//   console.log(javob);
// }
// run();

/////////////////////////////////////////////////////////////////////////////////////////////////////


//task E

function teskari_soz(matn) {           //teskari soz degan funksiya ichida string yani matn belon qildik
  return matn.split('').reverse().join('');   // bu matnni split yordamida bolib olib uni reverse yordamida teskarisiga ogirib oldik va yana qata join qildik
}

const Soz_kiriting = "bir nima";  // soz  kiriting degan ozgaruvchi bor
const teskari = teskari_soz(Soz_kiriting);    // uni teskari degan ozgaruvchiga tenglab pastta log qildik
console.log(teskari); 



