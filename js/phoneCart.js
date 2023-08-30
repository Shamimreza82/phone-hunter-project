const phoneHandaler = async (searchText) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json(); 
    const phone = data.data;
    phoneDisplay (phone)
}
// phoneHandaler();


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

    const PhoneName = document.getElementById('Phone-Name').innerText = phone.name; 
    const phoneFeture = document.getElementById ('phone-feture');
    const div = document.createElement ('div');
    div.innerHTML = `
    <img src="${phone.image}" alt="">
    `

    phoneFeture.appendChild(div)




    console.log (phone)
    show_deieles_modal.showModal()
}