const memo8gb = document.getElementById('memory-8gb');
memo8gb.addEventListener('click', function(){
    memoryCost.innerText = 0;
    updateTotal();
})


const memo16gb = document.getElementById('memory-16gb');
memo16gb.addEventListener('click', function(){
    memoryCost.innerText = 180;
    updateTotal();
})

const memoryCost = document.getElementById('memory-cost');
memoryCost.addEventListener('click', function(){
    updateTotal();
})

const storage256gb = document.getElementById('storage-256gb');
storage256gb.addEventListener('click', function(){
    storageCost.innerText = 0;
})

const storage512gb = document.getElementById('storage-512gb');
storage512gb.addEventListener('click', function(){
    storageCost.innerText = 100;
    updateTotal();
})

const storageCost = document.getElementById('storage-cost');
storageCost.addEventListener('click', function(){
    updateTotal();
   
})
const storage1tb = document.getElementById('storage-1tb');
storage1tb.addEventListener('click', function(){
    storageCost.innerText = 180;
    updateTotal();
})

const free = document.getElementById('free');
free.addEventListener('click', function(){
    deliveryCost.innerText = 0;
    updateTotal();
})

const delivery = document.getElementById('charge');
delivery.addEventListener('click', function(){
    deliveryCost.innerText = 20;
    updateTotal();
})

const deliveryCost = document.getElementById('delivery-cost');
deliveryCost.addEventListener('click', function(){
    updateTotal();
})

const bestPrice = document.getElementById('best-price');
bestPrice.addEventListener('click', function(){
    updateTotal();
})

const totalPrice = document.getElementById('total');
totalPrice.addEventListener('click', function(){
    // console.log('best')
})

function updateTotal(){
    const bestOption = Number(bestPrice.innerText);
    const memory = Number(memoryCost.innerText);
    const storage = Number(storageCost.innerText);
    const delivery = Number(deliveryCost.innerText);
    const grandTotal = bestOption + memory + storage + delivery;
    total.innerText = grandTotal;
}