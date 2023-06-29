const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const searchBtn = $('.btn--search');
const deleteBtn = $('.btn--delete');
const listItem = $('.items');
const input = $('#input-search');

searchBtn.onclick = function () {
    let inputValue = input.value.trim().toLowerCase();
    let imgUrl;
    let api = `https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=0LFJaT7IK5wFysh8wQuGedkcTSE4pO7y`;

    if(inputValue === '' || inputValue === null) {
        alert('Please enter field search');
    } else {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                imgUrl = data.data[0].images.original.webp;
                let divItem = document.createElement('div');
                divItem.classList.add('item');
                listItem.appendChild(divItem);
                divItem.innerHTML = `<img src="${imgUrl}" alt="">`
                input.value = '';
                input.focus();
            })
            .catch(error => {
                console.log(error);
            });
    }
};

deleteBtn.onclick = function () {
    listItem.innerHTML = '';
    input.focus();
}