
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

const moment = require("moment");
class Shop {
   
     constructor(cola_bor, non_bor, pista_bor) {
      this.mahsulotlar = {
        cola: cola_bor,
        non: non_bor,
        pista: pista_bor
      };
     }


     xabar(){
      const time = moment().format("HH:MM:SS");
      console.log(`[${time}] da xabar mahsulotlar mavjud,`, this.mahsulotlar);
     }

     sotuv(mahsulot, mavjud){
      const time = moment().format("HH:MM:SS");
      if(this.mahsulotlar[mahsulot]) {
        this.mahsulotlar[mahsulot] -= mavjud;
        console.log(`[${time}] da ushbu ${mavjud} mahsulot sotildi ${this.mahsulot}`);
        }
        else{
          console.log(`[${time}] da ushbu ${mahsulot} mavjud emas`);
        }
    
     }
      
     qabul(mahsulot, mavjud) {
      const time = moment().format("HH:MM:SS");
      if(this.mahsulotlar[mahsulot]) {
        this.mahsulotlar[mahsulot] += mavjud;
        console.log(`[${time}] da ushbu ${mavjud} mahsulot ${mahsulot} qoshildi`);
        }
        else{
          console.log(`[${time}] da ushbu ${mahsulot} qabul qilinmadi`);
        }
    
     }
     qoldiq(){
      const time = moment().format("HH:MM:SS");
      console.log(`[${time}] da mahsulotlar mavjud:`, this.mahsulotlar);
     }


}
const shop = new Shop(4, 3, 1);

shop.xabar();
shop.sotuv('choy', 3);
shop.qabul('pista', 4);
shop.qoldiq();
//fishupsbvs