
document.addEventListener('DOMContentLoaded', () => getCookies());


function filterCookies() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];   // use 1 instead of 0
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function getCookies() {
    fetch('http://localhost:3000/cookies')
        .then((res) => res.json())
        .then((data) => {

            let output =
                '<table id="myTable"><tr><th>Avatar</th><th>Character</th><th>Rarity</th><th>Type</th><th>Position</th><th>Best Toppings</th></tr>';
            data.forEach(function (data) {


                output +=
                    `
             <tr class='tr'>
             <td><img src="${data.image}" id="image" class="image"</img></td>
                 <td>${data.character}</td>
                 <td>${data.rarity}</td>
                 <td>${data.type}</td>
                 <td>${data.position}</td>
                 <td>${data.toppings}</td>

             </tr>
         `;
            });

            output += '</table>'
            document.getElementById('output').innerHTML = output;
        })
};


const userNameInput = document.querySelector("#myInput");

userNameInput.addEventListener("keyup", (event) => {
    const inputValue = event.target.value;
    filterCookies();
});



document.getElementById("image").addEventListener("click", happyFunction);

function happyFunction() {
    endPoint = 'happiness';

    fetchQuoteOption();
    let element = document.getElementById("card");
    element.classList.toggle("mystyle");

};