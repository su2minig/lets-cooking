const getrecipe = () => {
    const localkeys = Object.keys(localStorage)

    const recipecontainer = document.querySelector('#title');

    localkeys.forEach(item => {
        const json = localStorage.getItem(item)
        const value = JSON.parse(json)
        const recipeitem = document.createElement('li');
        recipeitem.innerText = value["food"]
        recipecontainer.appendChild(recipeitem)

        recipeitem.addEventListener('click', (e) => {
            const $recipe = document.querySelector('#container')
            document.querySelector('.white-bg').classList.add('show-modal')
            document.querySelector('.modal-bg').classList.add('show-modal')
            $recipe.innerText = value['recipe']
        })
        const btnClose = document.querySelector('.close')
        btnClose.addEventListener('click', () =>{
            document.querySelector('.white-bg').classList.remove('show-modal')
            document.querySelector('.modal-bg').classList.remove('show-modal')
        })
    })
}
getrecipe();