function updateCardList() {

    const cardList = document.getElementById("cardList");
    cardList.innerHTML = '';

    const filterValue = document.getElementById("filterInput").value.toLowerCase();

    fetch('loadPlants.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(card => {
                if (card.scientific_name.toLowerCase().includes(filterValue)) {
                    var cardHtml = `
                    <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="${card.image_url}" alt="Card Image">
                        <div class="card-body">
                            <h5 class="card-title">Nome Científico:</h5>
                            <p class="card-text">${card.scientific_name}</p>
                        </div>
                    </div>
                    </div>`;
                    cardList.innerHTML += cardHtml;
                }
            });
        }).catch(error => console.error('Erro ao recuperar dados:', error));
}

document.addEventListener("DOMContentLoaded", function () {
    updateCardList();
});