function updateCardList() {

    const cardList = document.getElementById("cardList");
    cardList.innerHTML = '';

    const filterValue = document.getElementById("filterInput").value.toLowerCase();

    fetch('loadUsers.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(card => {
                if (card.nome.toLowerCase().includes(filterValue)) {
                    var cardHtml = `
                    <li class="list-group-item">
                        <div>
                            <img src="${card.foto}" alt="Item 1" style="width: 50px; height: 50px; margin-right: 10px;">
                            <span><strong>Nome: </strong></span>
                            <span>${card.nome}</span>
                            <span><strong> | Email: </strong></span>
                            <span>${card.email}</span>
                            <span><button id="deleteButton" class="btn btn-danger" style="float:right" data-id="${card.id}" data-bs-toggle="modal" data-bs-target="#deleteModal">Deletar</button></span>
                        </div>
                    </li>`;

                            cardList.innerHTML += cardHtml;
                        }
                    });
        }).catch(error => console.error('Erro ao recuperar dados:', error));

}

document.addEventListener("DOMContentLoaded", function () {
    updateCardList();
});