
document.addEventListener('DOMContentLoaded', () => getCookies());


async function filterCookies() {
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
};


async function getCookies() {
    fetch('http://localhost:3000/cookies')
        .then((res) => res.json())
        .then((data) => {


            // let output =
            //     '<table id="myTable"><tr><th>Avatar</th><th>Character</th><th>Rarity</th><th>Type</th><th>Position</th><th>Best Toppings</th></tr>';

            const container = document.querySelector('#myTable');

            data.forEach(function (data) {
                const card = document.createElement('tr');
                card.classList.add('tr');

                const image = document.createElement('td');
                image.textContent = data.image;

                const name = document.createElement('td');
                name.textContent = data.character;
                name.classList.add('hover');
                name.setAttribute('id', 'hover');

                const rarity = document.createElement('td');
                rarity.textContent = data.rarity;

                //         output +=
                //             `
                //      <tr class='tr'>
                //      <td><img src="${data.image}" id="image" class="image"</img></td>
                //          <td class="hover">${data.character}</td>
                //          <td>${data.rarity}</td>
                //          <td>${data.type}</td>
                //          <td>${data.position}</td>
                //          <td>${data.toppings}</td>

                //      </tr>
                //  `;
                card.appendChild(image);

                card.appendChild(name);
                card.appendChild(rarity);
                container.appendChild(card);


                name.addEventListener('mouseover', (event) => {

                    name.querySelectorAll('hover').forEach(element => {
                        // element.style.color = 'red';
                    })
                    event.target.style.color = 'red';

                });

                name.addEventListener('mouseout', (event) => {

                    name.querySelectorAll('hover').forEach(element => {
                        // element.style.color = 'red';
                    })
                    event.target.style.visibility = "hidden";
                    document.getElementById('output').innerHTML = "bllllaaaaahhhhh";


                });


            });




        });



    // let divs = document.getElementsByClassName('hover')[0];
    // divs.style.color = 'red';


    // let names = document.getElementsByClassName('hover')[2];
    // names.style.color = 'red';

    // document.getElementsByClassName('hover')[0].click = function () {
    //     this.style.color = 'red';
    // };

    // output += '</table>'
    // document.getElementById('output').innerHTML = output;



    // console.log(divs)


};


const userNameInput = document.querySelector("#myInput");

userNameInput.addEventListener("keyup", (event) => {
    const inputValue = event.target.value;
    filterCookies();
});




// const test = document.getElementsByClassName("hover");

// test.addEventListener("click", (event) => {
//     test.style.color = 'red';

// });


// document.getElementById("image").addEventListener("click", happyFunction);

// function happyFunction() {
//     endPoint = 'happiness';

//     fetchQuoteOption();
//     let element = document.getElementById("card");
//     element.classList.toggle("mystyle");

// };


// const container = document.querySelector('#alert-container');

// // Click handler for entire DIV container
// container.addEventListener('click', function (e) {
//     // But only alert for elements that have an alert-button class
//     if (e.target.classList.contains('alert-button')) {
//         alert(e.target.innerHTML);
//     }
// });

// const newBtn = document.createElement('button');
// newBtn.classList.add('alert-button');
// newBtn.innerHTML = 'Button 3';
// container.append(newBtn);