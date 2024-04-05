
// Function to fetch data from the API
async function fetchData() {
    fetch('http://localhost:3000/cookies')
        .then(res => res.json())
        .then(data => {
            renderData(data)

        })
}
fetchData();

// // Function to render data in cards
async function renderData(data) {
    const container = document.querySelector('.container');

    // const arr2 = data.filter(card => card.rarity === 'Common');
    // console.log(arr2);

    if (!data) {
        return;
    }
    let cookieList = document.getElementById("data-list");
    cookieList.innerHTML = '';

    data.forEach(function (data) {

        cookieList.innerHTML += `
            <div class="card">
            <h4 class="A news-card__type">${data.character}</h4>
            <h4 class="A news-card__type">${data.type}</h4>
            <h4 class="A news-card__type">${data.rarity}</h4>
            <img src="${data.image}" alt="${data.character}" width="100px">
            <h4 class="A news-card__type">${data.toppings}</h4>
                <h3 class="B news-card__title">${data.position}</h3>
            </div>
          `;
    });
}
// renderData();

document.querySelector('#filterList').addEventListener('change', function ({ currentTarget }) {
    fetchData(
        Array.from(currentTarget.querySelectorAll('.checkbox'))
            .filter(function (cb) { return cb.checked; })
            .map(function (cb) { return cb.value; })
    );
});


// document.addEventListener("load", renderData());


// const rarity = [3503, 3508];
// const parsedData = data.items.filter((item) => rarity.includes(item.rarity));

// console.log(parsedData)



// function getValue(data) {
//     let checkboxes =
//         document.getElementsByName('cookie');
//     let result = "";
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             result += checkboxes[i].value
//                 + " " + " Cookie, ";
//         }
//     }

// }