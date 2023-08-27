const phoneHandaler = async () => {
    const res = await fetch ('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json(); 
    const phone = data.data;
    phoneDisplay (phone)
}
phoneHandaler();

const phoneDisplay = (phone) => {
    const phoneContainer = document.getElementById('phone-container')
    phone.forEach(phone => {
        console.log (phone);
        const div = document.createElement ('div'); 
        div.innerHTML = ` 
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/></figure>
                    <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                </div>
        `; 
        phoneContainer.appendChild (div);
    });
    


}
