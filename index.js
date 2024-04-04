




// async function getData() {

//     const response = await fetch('http://localhost:3000/cookies');
//     const data = await response.json();
//     // console.log(data);

//     return data;

// }

// getData();



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

    data.forEach(cookie => {
        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h2');
        name.textContent = cookie.character;

        const rarity = document.createElement('p');
        rarity.textContent = cookie.rarity;

        const type = document.createElement('p');
        type.textContent = cookie.type;

        const position = document.createElement('p');
        position.textContent = cookie.position;

        const toppings = document.createElement('p');
        toppings.textContent = cookie.toppings;

        // const toppings = document.createElement('p');
        // toppings.textContent = cookie.toppings;

        card.appendChild(name);
        card.appendChild(rarity);
        card.appendChild(type);
        card.appendChild(position);
        card.appendChild(toppings);
        container.appendChild(card);
    });
}

// Call the renderData function to display data
renderData();

// JavaScript code

function search_cookies() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('cookiesSearch');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}






// const cookies = cookies.map(data => ({
//     character: data.character,
//     position: data.position,
// }));

// console.log(character);