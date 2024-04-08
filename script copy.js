
// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/cookies');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();



// Function to render data in cards
async function renderData() {

    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

    // const cookie = data;
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomCookie = data[randomIndex];
    console.log(randomCookie);

    data.forEach(cookie => {
        this.cookie = cookie;

        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h2');
        const node0 = document.createTextNode(this.cookie.character);

        const rarity = document.createElement('p');
        const node1 = document.createTextNode('Rarity:' + ' ' + this.cookie.rarity);

        const type = document.createElement('p');
        const node2 = document.createTextNode('Type:' + ' ' + this.cookie.type);

        const position = document.createElement('p');
        const node3 = document.createTextNode('Position:' + ' ' + this.cookie.position);

        const toppings = document.createElement('p');
        const node4 = document.createTextNode('Best Toppings:' + ' ' + this.cookie.toppings);

        const image = new Image();
        image.src = this.cookie.image;
        image.classList.add('image');

        name.appendChild(node0);
        rarity.appendChild(node1);
        type.appendChild(node2);
        position.appendChild(node3);
        toppings.appendChild(node4);

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(rarity);
        card.appendChild(type);
        card.appendChild(position);
        card.appendChild(toppings);
        container.appendChild(card);

    });
}




// async function randomCookie() {

//     const data = await fetchData();

//     const cookie = data;
//     const randomIndex = Math.floor(Math.random() * cookie.length);
//     const randomCookie = cookie[randomIndex];

//     console.log(randomCookie);
// };



const getRandom = document.querySelector("#randomBtn");

getRandom.addEventListener("click", (event) => {
    // randomCookie();
    renderData();

});