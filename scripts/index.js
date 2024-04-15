function setBackgroundColor(elementId) {
  const getElement = document.getElementById(elementId);
  getElement.classList.add('bg-[#1cd100]');
  // getElement.classList.add('btn-disabled')
  const innerText = getElement.innerText;
  appendChild(innerText);
  Count();
  totalPriceFunction();
  disable();
  oneTimeButton(elementId);
  bookNow();
}

// table row
function appendChild(element) {
  const fairTable = document.getElementById('fairTable');
  const data = document.createElement('tr');
  data.innerHTML = `<td>${element}</td>
    <td>Economy</td>
    <td>550</td>`;
  fairTable.appendChild(data);
  coupon();
}
// Counter
function Count() {
  const table = document.getElementById('fairTable');
  const tableRows = table.querySelectorAll('tr').length;
  const seatCounter = (document.getElementById('seat-counter').innerText =
    tableRows);
  const seats = 40 - seatCounter;
  document.getElementById('seatCount').innerText = seats;
}

function totalPriceFunction() {
  const table = document.getElementById('fairTable');
  const totalTicketCost = 550 * table.querySelectorAll('tr').length;
  document.getElementById('total-price').innerText = totalTicketCost;
  document.getElementById('grand-total').innerText =
    document.getElementById('total-price').innerText;
}

// coupon apply function

function coupon() {
  const applyButton = document.getElementById('coupon-apply');
  applyButton.classList.remove('btn-disabled');
}

function couponValidator() {
  const applyButton = document.getElementById('coupon-apply');
  const couponInput = document.getElementById('coupon-input');
  if (couponInput.value === 'NEW15' || couponInput.value === 'Couple 20') {
    document.getElementById('coupon-box').classList.add('hidden');
    if (couponInput.value === 'NEW15') {
      const totalTicketCost = document.getElementById('total-price').innerText;
      document.getElementById('grand-total').innerText =
        totalTicketCost - (totalTicketCost * 15) / 100;
    } else if (couponInput.value === 'Couple 20') {
      const totalTicketCost = document.getElementById('total-price').innerText;
      document.getElementById('grand-total').innerText =
        totalTicketCost - (totalTicketCost * 20) / 100;
    }
  } else if (
    couponInput.value !== 'NEW15' ||
    couponInput.value !== 'Couple 20'
  ) {
    document.getElementById('grand-total').innerText =
      document.getElementById('total-price').innerText;
  }
}
// Button disable function

function disable() {
  const table = document.getElementById('fairTable');
  const tableRows = table.querySelectorAll('tr').length;
  if (tableRows >= 4) {
    const div = document.querySelectorAll('.unique');
    for (let i = 0; i < div.length; i++) {
      div[i].classList.add('btn-disabled');
    }
  }
}

function oneTimeButton(id) {
  const table = document.getElementById('fairTable');
  const tableRows = table.querySelectorAll('tr').length;
  if (tableRows <= 4) {
    document.getElementById(id).classList.add('btn-disabled');
  }
}

function bookNow() {
  const table = document.getElementById('fairTable');
  const tableRows = table.querySelectorAll('tr').length;
  const phoneNumber = document.getElementById('phone-number').value;
  console.log(tableRows);
  if (tableRows >= 1 && phoneNumber.length > 9) {
    document.getElementById('Book-Now').classList.remove('btn-disabled');
  }
}

function bookingHide() {
  document.getElementById('booking-section').classList.add('hidden');
  document.getElementById('booking-successful').classList.remove('hidden');
}

function scrolldiv() {
  const elem = document.getElementById('toggle');
  elem.scrollIntoView();
}
