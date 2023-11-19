function updateCardList() {
    const cardList = document.getElementById("cardList");
    cardList.innerHTML = '';

    const filterValue = document.getElementById("filterInput").value.toLowerCase();

    fetch('loadPlants.php')
        .then(response => response.json())
        .then(datafound => {

            datafound.forEach(card => {
                if (card.common_name.toLowerCase().includes(filterValue)) {
                    var cardHtml = `
                    <li class="list-group-item">
                    <div class="list-group-item-heading" data-toggle="collapse" data-target="#item${card.id}">
                        <img src="${card.image_url}" alt="Item 1" style="width: 50px; height: 50px; margin-right: 10px;">
                        <span><strong>Nome: </strong></span>
                        <span class="spText">${card.common_name}</span>
                        <span class="sciName"><strong> | Nome Científico: </strong></span>
                        <span class="spanSciName spText">${card.scientific_name}</span>
                        <span class="spanGenero"><strong> | Gênero: </strong></span>
                        <span class="spanGenero spText">${card.genus}</span>
                        <span class="spanFamilia"><strong> | Família: </strong></span>
                        <span class="spanFamilia spText">${card.family}</span>
                    </div>
                    <div id="item${card.id}" class="list-group-item-text collapse p-3 m-2 border">
                        <img src="${card.image_url}" alt="Item 1" style="width: 300px; height: 300px; margin-right: 10px;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Nome Comum: </strong>${card.common_name}</li>
                            <li class="list-group-item"><strong>Slug: </strong>${card.slug}</li>
                            <li class="list-group-item"><strong>Nome Científico: </strong>${card.scientific_name}</li>
                            <li class="list-group-item"><strong>Ano: </strong>${card.year}</li>
                            <li class="list-group-item"><strong>Bibliografia: </strong>${card.bibliography}</li>
                            <li class="list-group-item"><strong>Autor: </strong>${card.author}</li>
                            <li class="list-group-item"><strong>Classificação: </strong>${card.rank}</li>
                            <li class="list-group-item"><strong>Gênero: </strong>${card.genus}</li>
                            <li class="list-group-item"><strong>Família: </strong>${card.family}</li>`;
                        cardHtml += `
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" data-id="${card.id}">Editar</button>
                        <button type="button" class="btn btn-danger pr-4 pl-4" id="deleteButton">Deletar</button>
                    </div>
                </li>`;
                        cardList.innerHTML += cardHtml;
                    }
                });

            const editButtons = document.querySelectorAll('[data-bs-target="#editModal"]');
                editButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const cardId = parseInt(button.getAttribute('data-id'));
                        const selectedCard = datafound.find(card => card.id === cardId);

                        document.getElementById("id").value = selectedCard.id;
                        document.getElementById("editNome").value = selectedCard.common_name;
                        document.getElementById("editNomeCientifico").value = selectedCard.scientific_name;
                        document.getElementById("editGenero").value = selectedCard.genus;
                        document.getElementById("editFamilia").value = selectedCard.family;

                        document.getElementById("saveButton").addEventListener('click', () => {
                            // Save the edited card
                            selectedCard.common_name = document.getElementById("editNome").value;
                            selectedCard.scientific_name = document.getElementById("editNomeCientifico").value;
                            selectedCard.genus = document.getElementById("editGenero").value;
                            selectedCard.family = document.getElementById("editFamilia").value;


                            updateCardList();
                            $('#editModal').modal('hide');
                        });
                    });
                });

        }).catch(error => console.error('Erro ao recuperar dados:', error));
}

document.addEventListener("DOMContentLoaded", function () {
    updateCardList();
});