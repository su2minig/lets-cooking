
const mainContainer = document.getElementById("menu-list");
BASE_URL ="http://localhost:3000/"

function createmenu(imgurl, foodtitle, foodname){
const $product = document.createElement("a")
const img = document.createElement("img");
const name = document.createElement("div");
$product.setAttribute('href' ,'https://su2minig.github.io/lets-cooking/'+foodtitle+'.html')
$product.setAttribute('target', '_blank')
$product.setAttribute('class', 'menulist')
console.log(foodname);
name.innerText = foodname;
img.src =imgurl;
$product.append(img, name);

return $product
}



// 클릭이벤트
const Allmenu = document.querySelector(".food-type");
Allmenu.addEventListener('click',allmenu);

// ------------


function allmenu(){
    let dv = event.target;
    mainContainer.innerHTML = ""
    console.log("ddd",dv.id);
    const foodContainer = document.createElement("div");
    foodContainer.id = "food"
    mainContainer.appendChild(foodContainer);
    fetch(BASE_URL+dv.id).then((res)=>{
        return res.json();
    }).then((json)=>{
        json.forEach(alldata =>{
            
            console.log("gggg",foodContainer);
            const imgurl = alldata.img;
            const foodtitle = alldata.title;
            const foodname = alldata.name;
            const $product = createmenu(imgurl,foodtitle,foodname);
            foodContainer.appendChild($product);
        }
        )}
    )
}
