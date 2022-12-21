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

  /* fares.forEach(fare => {
    
    const h1FareElement = fareElement(
      fare.outbound.departureAirport.city.name,
      fare.outbound.arrivalAirport.city.name,
      fare.outbound.arrivalDate,
      fare.outbound.price.value,
      fare.outbound.price.currencySymbol
      );
    
    root.insertAdjacentHTML("beforeend", h1FareElement);
  });
 */
  const result = cheapestFare(fares);
  root.insertAdjacentHTML("beforeend", `<h3>The first cheapest fare: ${result.departureAirport} - ${result.arrivalAirport} ${result.price}</h3>`);
  const result2 = countFlights(fares);
  root.insertAdjacentHTML("beforeend", `<h3>Number of flights from Kraków to Dortmund: ${result2}</h3>`);
}

const cheapestFare = function (fares){
  let cheapestFare = fares[0];
  for (let i=0; i<fares.length; i++){
    if (fares[i].outbound.price.value < cheapestFare.outbound.price.value){
      cheapestFare = fares[i];
    }
  }
  return {
    departureAirport: `${cheapestFare.outbound.departureAirport.city.name}`,
    arrivalAirport: `${cheapestFare.outbound.arrivalAirport.city.name}`,
    price : `${cheapestFare.outbound.price.value}`}
}


const countFlights = function(fares){
  let counter = 0;
  fares.forEach(fare => {
    if (fare.outbound.departureAirport.iataCode === "KRK" && fare.outbound.arrivalAirport.iataCode === "DTM" ){
      counter++
    }
  });
  return counter
}


window.addEventListener("load", loadEvent);
