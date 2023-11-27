const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=90&page=2&sparkline=false";

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-container");
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      for (let item of data) {
        let color = item.price_change_percentage_24h > 0 ? "green" : "red";
        cardContainer.innerHTML += `
        <div class="card">
            <div class="image">
                <img src=${item.image} />
            </div>
            <div class="details">
                <div class="upper-details">
                    <span class="name">${item.name}</span>
                    <span class="price">${item.current_price}</span>
                </div>
                <div class="lower-details">
                    <span class="short-name">${item.symbol}</span>
                    <span class="day-return" style="color:${color};">${item.price_change_percentage_24h}</span>
                </div>
            </div>
        </div>
        `;
      }
    });
});
