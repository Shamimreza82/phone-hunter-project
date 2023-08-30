const phoneHandaler = async (searchText) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json(); 
    const phone = data.data;
    phoneDisplay (phone)
}
phoneHandaler(12);


const phoneDisplay = (phones) => {
    console.log (phones)
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent= " ";
    phones = phones.slice(0,12)
    phones.forEach(phone => {
        // console.log (phone);
        const div = document.createElement ('div'); 
        div.innerHTML = ` 
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="${phone.image}" alt="Shoes"/></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <h2>Brand Name: ${phone.brand}</h2>
                      <p >There are many variations of passages of available, but the majority have suffered</p>
                      <div class="card-actions justify-center">
                        <button onclick="butonHandaar('${phone.slug}')" class="btn btn-primary">Show Details</button>
                      </div>
                    </div>
                </div>
        `; 
        phoneContainer.appendChild (div);
    });
}



const serchHandle = () => {
    const inputFild = document.getElementById("input-text"); 
    const inputVlaue = inputFild.value; 
    phoneHandaler (inputVlaue)
}


const searchHandeler2 = () => {
    const searchHandaler2w = document.getElementById('input-text2'); 
    const searchHandaler2Value = searchHandaler2w.value; 
    phoneHandaler (searchHandaler2Value);

}



const butonHandaar = async (id) => {
    console.log (id)
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
   const phone = data.data
    showPhoned(phone);
    
    
}

const showPhoned = (phone) => {

    
    const phoneFeture = document.getElementById ('phone-feture');
    phoneFeture.innerText = " ";
    const div = document.createElement ('div');
    div.innerHTML = `
            <h1 class =" text-lg font-bold text-center"> ${phone.name} </h1> 
    <div class = " flex justify-center" >
        <img src="${phone.image}" alt="">
    </div>
     <div class = "" >
     <h1 class =" text-base"> <span class =" font-bold">ChipSet:</span> ${phone.mainFeatures.chipSet} </h1> 
     <h1 class ="">  <span class =" font-bold">Display Size:</span>  ${phone.mainFeatures.displaySize} </h1> 
     <h1 class =""> <span class =" font-bold"> Memore:</span> ${phone.mainFeatures.memory} </h1> 
     <h1 class =""> <span class =" font-bold">Storage:</span>  ${phone.mainFeatures.storage} </h1> 
    </div>
    `

    phoneFeture.appendChild(div)




    console.log (phone)
    show_deieles_modal.showModal()
}