
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
        const node0 = document.createTextNode('Name:' + ' ' + cookie.character);

        const rarity = document.createElement('p');
        const node1 = document.createTextNode('Rarity:' + ' ' + cookie.rarity);

        const type = document.createElement('p');
        const node2 = document.createTextNode('Type:' + ' ' + cookie.type);

        const position = document.createElement('p');
        const node3 = document.createTextNode('Position:' + ' ' + cookie.position);

        const toppings = document.createElement('p');
        const node4 = document.createTextNode('Best Toppings:' + ' ' + cookie.toppings);

        const image = new Image();
        image.src = cookie.image;
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


    const result = Object.values(data).filter(cookie => cookie.rarity === 'Common')
    console.log(result)

}
// renderData();

// Call the renderData function to display data

document.getElementById("happyBtn").addEventListener("click", search_cookies);

function search_cookies() {

    renderData();
    let element = document.getElementById("card");
    element.classList.toggle("mystyle");

};



// function search_cookies() {
//     const data = fetchData();

//     const result = Object.values(data).filter(cookie => cookie.rarity === 'Common')
//     console.log(result)
//     renderData();
// }


// JavaScript code

// function search_cookies() {
//     let input = document.getElementById('searchbar').value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName('cookiesSearch');

//     const data = fetchData();

//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//             //display cooresponding card 
//             console.log(data.rarity);
//         }
//         else {
//             x[i].style.display = "list-item";
//         }
//     }
// }






// const cookies = cookies.map(data => ({
//     character: data.character,
//     position: data.position,
// }));

// console.log(character);