const btn = document.getElementById('btn');
btn.addEventListener('click', clickHandler);

let p = document.getElementById('p');

function clickHandler() {

    let joke = "";

    // Fetch the joke by the API

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=1');
    xhr.setRequestHeader('X-Api-Key', 'D+5ooOjI0UNHwwSspUqXHQ==zY3QMwz9AYSLXSSz');
    xhr.send();

    btn.innerHTML = "Fetching the jokes";

    xhr.onload = function () {
        if (xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);

console.log( result);

            joke = result[0].joke;
            console.log(joke);
            p.innerHTML = joke;

            btn.innerText = "Tell me a joke";


        }
        else {
            // Handle error
            p.innerHTML = "Failed to fetch joke";
        }
    }


};