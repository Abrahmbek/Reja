console.log("salom");
//TASK C


const  tekshir = (matn1, matn2) => {
 

    const qosh1 = matn1.split('').sort();
    
    const qosh2 = matn2.split('').sort();
  
    
    return qosh1.join('') === qosh2.join('');
  }
  
  
  console.log(tekshir("abababa", "abababa")); 