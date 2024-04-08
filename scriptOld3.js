
// document.addEventListener('DOMContentLoaded', () => getCookies());


function filterCookies() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];   // use 1 instead of 0
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



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

        const position = document.createElement('p');
        position.textContent = cookie.position;

        card.appendChild(name);
        card.appendChild(position);
        container.appendChild(card);
    });
}

renderData();
// async function getCookies() {
//     const response = await fetch('http://localhost:3000/cookies');
//     const data = await response.json();
//     console.log(data);
//     // return data;
//     // const values = Object.values(data)

//     // const randomValue = values[parseInt(Math.random() * values.length)]

//     // console.log(randomValue)

//     let output =
//         '<table id="myTable"><tr><th>Avatar</th><th>Character</th><th>Rarity</th><th>Type</th><th>Position</th><th>Best Toppings</th></tr>';
//     data.forEach(function (data) {


//         output +=
//             `
//              <tr class='tr'>
//              <td><img src="${data.image}" id="image" class="image"</img></td>
//                  <td>${data.character}</td>
//                  <td>${data.rarity}</td>
//                  <td>${data.type}</td>
//                  <td>${data.position}</td>
//                  <td>${data.toppings}</td>

//              </tr>
//          `;
//     });

//     output += '</table>'
//     document.getElementById('output').innerHTML = output;
// };



// async function test() {
//     const data = await response.json();
//     console.log(data);
//     // return data;
//     const values = Object.values(data)

//     const randomValue = values[parseInt(Math.random() * values.length)]

//     console.log(randomValue)
// };


// const userNameInput = document.querySelector("#myInput");

// userNameInput.addEventListener("keyup", (event) => {
//     const inputValue = event.target.value;
//     filterCookies();
// });

// const getRandom = document.querySelector("#randomBtn");

// getRandom.addEventListener("click", (event) => {
//     test();
// });

// // document.getElementById("image").addEventListener("click", happyFunction);

// // function happyFunction() {
// //     endPoint = 'happiness';

// //     fetchQuoteOption();
// //     let element = document.getElementById("card");
// //     element.classList.toggle("mystyle");

// // };