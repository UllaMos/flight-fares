import { fares } from '/data.js';

const fareElement = function (departureAirport, arrivalAirport, arrivalDate, price, currency) {
  return `<h1>
      ${departureAirport} --> ${arrivalAirport} 
      ${arrivalDate} 
      ${price} ${currency}
    </h1>`;
}

const loadEvent = function () {
  const root = document.getElementById("root");
  console.log(fares);
  
}

window.addEventListener("load", loadEvent);
