
const mainContainer = document.getElementById("menu-list");
BASE_URL ="https://my-json-server.typicode.com/su2minig/lets-cooking/"

function createmenu(imgurl, foodtitle, foodname){
const $product = document.createElement("a")
const img = document.createElement("img");
const name = document.createElement("div");
img.setAttribute('class', 'foodimg');
name.setAttribute('class', 'name');
$product.setAttribute('href' ,'https://su2minig.github.io/lets-cooking/recipe/page/'+foodtitle+'.html');
$product.setAttribute('target', '_blank');
$product.setAttribute('class', 'menulist');
name.innerText = foodname;
img.src =imgurl;
$product.append(img, name);

return $product
}

const Allmenu = document.querySelector(".food-type");
Allmenu.addEventListener('click',allmenu);


function allmenu(){
    
    const data = event.target;
    console.log(data.id);
    mainContainer.innerHTML = ""
    const foodContainer = document.createElement("div");
    foodContainer.id = "food"
    mainContainer.appendChild(foodContainer);
    fetch(BASE_URL+data.id).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)
        data.forEach(info =>{
            const imgurl = info.img;
            const foodtitle = info.title;
            const foodname = info.name;
            const $product = createmenu(imgurl,foodtitle,foodname);
            foodContainer.appendChild($product);
        }
        )}
    )
}
