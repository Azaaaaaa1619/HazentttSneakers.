document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const productCards = document.querySelectorAll(".product-card");

    searchInput.addEventListener("keyup", function () {
        let searchText = searchInput.value.toLowerCase();

        productCards.forEach(function (card) {
            let productName = card.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});