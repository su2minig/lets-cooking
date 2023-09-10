const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $recipe = document.querySelector(".recipe");
const $ingredients = document.querySelector(".ingredients");

const ingredients_data = [];
ingredients_data.push({
role: "system",
content:
    "assistant는 요리에 필요한 재료를 알려주는 요리사다.재료는 종류:수량으로 알려줘",
});

const url1 = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

const recipe_data = [];
recipe_data.push({
role: "system",
content:
    "assistant는 요리의 조리법을 알려주는 요리사다. 조리법은 순서대로 알려줘",
});

const url2 = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

$button.addEventListener("click", (e) => {
e.preventDefault();
const contents = $input.value;
ingredients_data.push({
    role: "user",
    content: contents,
});
recipe_data.push({
    role: "user",
    content: contents,
});
$input.value = "";
ingredientsGPT();
recipeGPT();
ingredients_data.splice(1, 1);
recipe_data.splice(1, 1);
});

function ingredientsGPT() {
    fetch(url1, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(ingredients_data),
    redirect: "follow",
})
    .then((res) => res.json())
    .then((res) => {
    console.log(res);
    $ingredients.innerHTML =
        `<p>${res.choices[0].message.content}</p>`.replaceAll("\n", "<br>");
    });
}

function recipeGPT() {
    fetch(url2, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe_data),
    redirect: "follow",
})
    .then((res) => res.json())
    .then((res) => {
    console.log(res);
    $recipe.innerHTML = `<p>${res.choices[0].message.content}</p>`.replaceAll(
        "\n",
        "<br>"
    );
    });
}
