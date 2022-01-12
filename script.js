const list = document.getElementById("cars-select");
let characteristicOfCar = document.getElementById("characteristic-of-car");
const form = document.getElementById("cars");

const getData = async ({ url }) => {
  const response = await fetch(url);
  const cars = await response.json();
  return cars;
};

getData({
  url: "db.json",
})
  .then((cars) => {
    const bmv = cars[Object.keys(cars)][0];
    const volvo = cars[Object.keys(cars)][1];
    const optionBmv = new Option(bmv.brand);
    const optionVolvo = new Option(volvo.brand);
    list.append(optionBmv);
    list.append(optionVolvo);
    list.addEventListener("change", (e) => {
      if (e.target.value == bmv.brand) {
        characteristicOfCar.innerText = `Тачка ${bmv.brand} ${bmv.model}
Цена: ${bmv.price} $`;
      }
      if (e.target.value == volvo.brand) {
        characteristicOfCar.innerText = `Тачка ${volvo.brand} ${volvo.model}
Цена: ${volvo.price} $`;
      }
      if (e.target.value == "Выберите тачку") {
        characteristicOfCar.innerText = "Выберите тачку";
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
