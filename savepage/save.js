const myUl = document.querySelector("ul");

function getrecipe(){
    const recipes = localStorage.getItem("recipes")?JSON.parse(localStorage.getItem("recipes")):[]
    return recipes
}
function getfoodname(){
    const foodnamelist = localStorage.getItem("title")?JSON.parse(localStorage.getItem("title")):[]
    return foodnamelist
}
function recipelist(text){
    const myLi = document.createElement('li');
    const btnOpen = document.createElement('button');
    const btnOpenTxt = document.createTextNode('열기');
    btnOpen.append(btnOpenTxt);
    btnOpen.addEventListener('click',()=>{
        document.querySelector('.black-bg').classList.add('show-modal')
    });
    const btnClose = document.querySelector('.close')
    btnClose.addEventListener('click', () =>{
        document.querySelector('.black-bg').classList.remove('show-modal')
    })
    const btnDel = document.createElement('button');
    const btnDelTxt = document.createTextNode('삭제');
    btnDel.append(btnDelTxt);
    btnDel.addEventListener('click',()=>{
        myLi.remove();
    });
    myLi.append('레시피: ',text, btnOpen, btnDel);
    myUl.appendChild(myLi);
}

function makerecipelist(){
    const title = getfoodname();
    title.forEach(recipe =>{
        recipelist(recipe);
    })
}
makerecipelist()
