let result = document.getElementById('result')

document.querySelector('form')


.addEventListener("submit",(event)=>{
    
    event.preventDefault()
    console.log(event)
   
    let height =Number( document.getElementById("height").value);
    console.log(height)
    let weight = Number(document.getElementById("weight").value);
    console.log(weight) 

    if(typeof(height) === null && typeof(height)==="undefined"&& height < 0 && isNaN(height)){
        result.innerHTML = `<h2>Please enter valid height</h2>`
    }
    else if(typeof(weight) === null && typeof(weight)==="undefined"&& weight < 0 && isNaN(weight)){
        result.innerHTML = `<h2>Please enter valid weight</h2>`
    }else{

        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML=`<h2>${bmi}</h2>`
    }

         
       
            

        }
      
    

)