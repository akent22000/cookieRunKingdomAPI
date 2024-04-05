// function makeCards(rarity = []) {
//     let cookieList = document.getElementById("data-list");
//     cookieList.innerHTML = '';
//     data.filter(function (card) {
//         return ((rarity && -1 < rarity.indexOf(card.rarity)) || (0 === rarity.length));
//     })
//         .forEach(function (card) {
//             cookieList.innerHTML += `
//             <div class="card">
//             <h4 class="A news-card__type">${card.character}</h4>
//             <h4 class="A news-card__type">${card.type}</h4>
//             <h4 class="A news-card__type">${card.rarity}</h4>
//             <img src="${card.image}" alt="${card.character}" width="100px">
//             <h4 class="A news-card__type">${card.toppings}</h4>
//                 <h3 class="B news-card__title">${card.position}</h3>
//             </div>
//           `;
//         });
// }

// document.querySelector('#filterList').addEventListener('change', function ({ currentTarget }) {
//     makeCards(
//         Array.from(currentTarget.querySelectorAll('.checkbox'))
//             .filter(function (cb) { return cb.checked; })
//             .map(function (cb) { return cb.value; })
//     );
// });

// let data = [
//     {
//         "character": "Ginger Brave",
//         "rarity": "Common",
//         "type": "Charge",
//         "position": "Front",
//         "toppings": [
//             "Swift Chocolate, Solid Almond"
//         ],
//         "image": "https://static.wikia.nocookie.net/cookierunkingdom/images/c/c1/Brave-cookie.png",
//         "dateAdded": "2024-04-02",
//         "dateModified": "2024-04-02"
//     },
//     {
//         "character": "Strawberry Cookie",
//         "rarity": "Common",
//         "type": "Defense",
//         "position": "Front",
//         "toppings": [
//             "Solid Almond"
//         ],
//         "image": "https://static.wikia.nocookie.net/cookierunkingdom/images/a/a6/Strawberry-cookie.png",
//         "dateAdded": "2024-04-02",
//         "dateModified": "2024-04-02"
//     },
//     {
//         "character": "Princess Cookie",
//         "rarity": "Rare",
//         "type": "Charge",
//         "position": "Front",
//         "toppings": [
//             "Solid Almond"
//         ],
//         "image": "https://static.wikia.nocookie.net/cookierunkingdom/images/4/48/Princess_cookie_alternate.png",
//         "dateAdded": "2024-04-02",
//         "dateModified": "2024-04-02"
//     }
// ]

// document.addEventListener("load", makeCards());











// Function to fetch data from the API
async function fetchData() {
    fetch('http://localhost:3000/cookies')
        .then(res => res.json())
        .then(data => {
            renderData(data)

        })
}
fetchData();

// Function to render data in cards
async function renderData(data) {
    const container = document.querySelector('.container');

    if (!data) {
        return;
    }
    // rarity = []
    let cookieList = document.getElementById("data-list");
    cookieList.innerHTML = '';

    // data.filter(function (card) {
    //     return ((rarity && -1 < rarity.indexOf(card.category)) || (0 === rarity.length));
    // })

    // let filteredCookies = data.filter(function (cookie) {
    //     return cookie.rarity == "Common";
    // })

    // data.filter(function (card) {
    //     rarity = [];

    //     return ((rarity && -1 < rarity.indexOf(card.rarity)) || (0 === rarity.length));
    // })


    data.forEach(function (card) {
        cookieList.innerHTML += `
            <div class="card">
            <h4 class="A news-card__type">${card.character}</h4>
            <h4 class="A news-card__type">${card.type}</h4>
            <h4 class="A news-card__type">${card.rarity}</h4>
            <img src="${card.image}" alt="${card.character}" width="100px">
            <h4 class="A news-card__type">${card.toppings}</h4>
                <h3 class="B news-card__title">${card.position}</h3>
            </div>
          `;
    });

    // data.forEach(cookie => {

    //     const card = document.createElement('div');
    //     card.classList.add('card');

    //     const name = document.createElement('h2');
    //     const node0 = document.createTextNode('Name:' + ' ' + cookie.character);

    //     const rarity = document.createElement('p');
    //     const node1 = document.createTextNode('Rarity:' + ' ' + cookie.rarity);

    //     const type = document.createElement('p');
    //     const node2 = document.createTextNode('Type:' + ' ' + cookie.type);

    //     const position = document.createElement('p');
    //     const node3 = document.createTextNode('Position:' + ' ' + cookie.position);

    //     const toppings = document.createElement('p');
    //     const node4 = document.createTextNode('Best Toppings:' + ' ' + cookie.toppings);

    //     const image = new Image();
    //     image.src = cookie.image;
    //     image.classList.add('image');

    //     name.appendChild(node0);
    //     rarity.appendChild(node1);
    //     type.appendChild(node2);
    //     position.appendChild(node3);
    //     toppings.appendChild(node4);

    //     card.appendChild(image);
    //     card.appendChild(name);
    //     card.appendChild(rarity);
    //     card.appendChild(type);
    //     card.appendChild(position);
    //     card.appendChild(toppings);
    //     container.appendChild(card);


    // });


    // const result = Object.values(data).filter(cookie => cookie.rarity === 'Common')
    // console.log(result)

}

document.querySelector('#filterList').addEventListener('change', function ({ currentTarget }) {
    fetchData(
        Array.from(currentTarget.querySelectorAll('.checkbox'))
            .filter(function (cb) { return cb.checked; })
            .map(function (cb) { return cb.value; })
    );
});

// // Call the renderData function to display data
// document.addEventListener("load", renderData());


