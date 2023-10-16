const mockUsers = [
    {
      "id": 1,
      "nome": "João Silva",
      "email": "joao.silva@example.com",
      "foto": "../images/edna.jpg"
    },
    {
      "id": 2,
      "nome": "Maria Santos",
      "email": "maria.santos@example.com",
      "foto": "../images/stitch.jpeg"
    },
    {
      "id": 3,
      "nome": "Carlos Oliveira",
      "email": "carlos.oliveira@example.com",
      "foto": "../images/edna.jpg"
    },
    {
      "id": 4,
      "nome": "Ana Pereira",
      "email": "ana.pereira@example.com",
      "foto": "../images/stitch.jpeg"
    },
    {
      "id": 5,
      "nome": "Rafael Sousa",
      "email": "rafael.sousa@example.com",
      "foto": "../images/edna.jpg"
    },
    {
      "id": 6,
      "nome": "Sofia Fernandes",
      "email": "sofia.fernandes@example.com",
      "foto": "../images/stitch.jpeg"
    },
    {
      "id": 7,
      "nome": "Pedro Costa",
      "email": "pedro.costa@example.com",
      "foto": "../images/edna.jpg"
    },
    {
      "id": 8,
      "nome": "Marta Rodrigues",
      "email": "marta.rodrigues@example.com",
      "foto": "../images/stitch.jpeg"
    },
    {
      "id": 9,
      "nome": "Luís Santos",
      "email": "luis.santos@example.com",
      "foto": "../images/edna.jpg"
    },
    {
      "id": 10,
      "nome": "Carla Pereira",
      "email": "carla.pereira@example.com",
      "foto": "../images/stitch.jpeg"
    }
  ];

function updateCardList() {

    const cardList = document.getElementById("cardList");
    cardList.innerHTML = '';

    const filterValue = document.getElementById("filterInput").value.toLowerCase();

    mockUsers.forEach(card => {
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
}

document.addEventListener("DOMContentLoaded", function () {
    updateCardList();
});