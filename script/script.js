const ticketList = [];
let count = 0;
const maxTicket = 4;
let total = 0;
console.log(total);
const allSit = document.getElementsByClassName('sit-num');
for (const sitBtn of allSit) {
    sitBtn.addEventListener('click', function () {
        sitBtn.classList.add('bg-main-bg');


        // REMAINING sit

        sitBtn.classList.add('bg-main-bg');
        const sitsLeft = document.querySelector('#seats-left');
        const currentSitleft = parseInt(sitsLeft.innerText);
        sitsLeft.innerText = currentSitleft - 1;


        const perTicketPriceTxt = document.querySelector('#Per-ticket');
        const perTicketPrice = parseInt(perTicketPriceTxt.innerText)
        total = total + perTicketPrice;
        setElementValue('Total-price', total)

        setElementValue('Grand-total', total);


        const ticketPurchesDetailBox = document.querySelector('#ticket-list');
        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = sitBtn.innerText;
        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        const p3 = document.createElement('p');
        p3.innerText = perTicketPriceTxt.innerText;
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        ticketPurchesDetailBox.appendChild(li);
        ticketList.push(p1.innerText);


        count++;
        if (count === maxTicket) {
            for (const sitBtn of allSit) {
                sitBtn.disabled = true;
            }
            discountBtn.removeAttribute('disabled', true)
        }

    })
}


const applyBtn = document.getElementById('discount-btn');
applyBtn.addEventListener('click', function () {
    const discountInputSection = document.getElementById('discount-input');
    const cupon1 = document.getElementById('Cupon-code1').innerText;
    const cupon2 = document.getElementById('Cupon-code2').innerText;
    const inputCoupon = document.querySelector('#input-coupon').value;
    const discountBox = document.getElementById('discount-section');
    const li = document.createElement('li');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    li.appendChild(p1);
    li.appendChild(p2);
    discountBox.appendChild(li);
    if (count === maxTicket) {
        if (inputCoupon === cupon1) {
            const discountPrice = total * 0.15;
            p1.innerText = '15% OFF'
            p2.innerText = discountPrice; 
            setElementValue('Grand-total', total - discountPrice);

            discountInputSection.style.display = 'none';

        }
        document.getElementById('input-coupon').value = ' ';
    }
        if (inputCoupon === cupon2) {
            const discountPrice = total * 0.20;
            p1.innerText = '20% OFF'
            p2.innerText = discountPrice; 
            setElementValue('Grand-total', total - discountPrice);

            discountInputSection.style.display = 'none';

        }
        document.getElementById('input-coupon').value = ' ';
    }
)

const nextBtn = document.querySelector('#next-btn');

nextBtn.addEventListener('click', function () {
    const inputNumber = document.querySelector('#number').value;
    if (!inputNumber || ticketList.length <= 0) {
        alert("You should type your number and min Buy a ticket");
    }
    else {
        hiddenSection('navbar');
        hiddenSection('banner');
        hiddenSection('promo-add');
        hiddenSection('detail-section');
        hiddenSection('sell-ticket');
        hiddenSection('footer')
        visableSection('success');
    }
})
const continueBtn = document.getElementById('continue');
continueBtn.addEventListener('click', function () {
    visableSection('navbar');
    visableSection('banner');
    visableSection('promo-add');
    visableSection('detail-section');
    visableSection('sell-ticket');
    visableSection('footer')
    hiddenSection('success');

})




const sitBookedTxt = document.querySelector('#Sit-booked');
sitBookedTxt.innerText = count;
const discountBtn = document.querySelector('#discount-btn');

if (count === maxTicket) {


    const inputCoupon = document.querySelector('#input-coupon').value;

    if (inputCoupon === cupon1) {
        ;
        discountBtn, addEventListener('click', function () {
            const discountPrice = parseInt(TotalPrice.innerText) * 0.15;
            console.log(discountPrice);
        })

    }




}

// Total Price
