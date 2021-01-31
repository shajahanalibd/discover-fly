const economyClassPrice = 100;
const firstClassPrice = 150;


// first Class ticket handler
function handleFirstClassTicket(isIncrease){
   const firstClassInput = document.getElementById('first-class-count');
   const firstClassCount = parseInt(firstClassInput.value);
   let firstClassNewCount = firstClassCount;
   if(isIncrease == true){
      firstClassNewCount = firstClassCount + 1;
   }
   if(isIncrease == false && firstClassCount > 0){
      firstClassNewCount = firstClassCount - 1;
   }
   firstClassInput.value = firstClassNewCount;
   const firstClassTotal = firstClassNewCount * firstClassPrice;
   calculateSubTotal();
}

// economy Class ticket handler
function handleEconomyClassTicket(isIncrease){
   const economyClassInput = document.getElementById('economy-class-count');
   const economyClassCount = parseInt(economyClassInput.value);
   let economyClassNewCount = economyClassCount;
   if(isIncrease == true){
      economyClassNewCount = economyClassCount + 1;
   }
   if(isIncrease == false && economyClassCount > 0){
      economyClassNewCount = economyClassCount - 1;
   }
   economyClassInput.value = economyClassNewCount;
   const economyClassTotal = economyClassNewCount * economyClassPrice;
   calculateSubTotal();
}

// total price calculate

function calculateSubTotal(){
   const firstClassInput = document.getElementById('first-class-count');
   const firstClassCount = parseInt(firstClassInput.value);

   const economyClassInput = document.getElementById('economy-class-count');
   const economyClassCount = parseInt(economyClassInput.value);

   const totalPrice = firstClassCount * firstClassPrice + economyClassCount * economyClassPrice;
   document.getElementById('subtotal').innerText = '$' + totalPrice;

   const vat = totalPrice * 0.1;
   document.getElementById('vat').innerText = '$' + vat;

   const grandTotal = totalPrice + vat;
   document.getElementById('grand-total').innerText = '$' + grandTotal;
   
}

//Booking confirm

const bookingConfirm = document.getElementById('book-now');
bookingConfirm.addEventListener("click", function(){
   const bookingForm = document.getElementById("booking-area");
   bookingForm.style.display = "none";

   const bookingContent = document.getElementById("booking-text");
   bookingContent.style.display = "none";

   const bookingArea = document.getElementById("booking-confirm");
   bookingArea.style.display = "block";
})

