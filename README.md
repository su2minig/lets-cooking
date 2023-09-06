# Lets-cooking

:question: Let's cooking 사이트는 조리법을 모르는 사용자를 위한 사이트입니다.

:fork_and_knife: 사용자가 만들고싶은 요리의 재료와 조리법을 chatgpt요리사에게 물어보세요!

:eyes: 리스트페이지에서 분류별로 음식사진을 볼 수 있습니다. 무엇을 만들지 고민이시라면 리스트페이지를 이용해보세요!



## 프로젝트 기간 및 구조

> 23.08.29~23.09.06

<p>
  <img src="https://github.com/su2minig/lets-cooking/assets/141402694/b78b9f12-950e-46aa-bfe9-0352e7be6ebf" width="600px" height="300px">
</p>

```
│  app.js
│  db.json
│  index.html
│  package.json
│
├─.vscode
│      settings.json
│
├─css
│      common.css
│      foodpage.css
│      main.css
│      recipe.css
│
├─img
│      backimg.jpg
│      table.jpg
│      검색.png
│      김치볶음밥.jpg
│      김치찌개.jpg
│      닭볶음탕.webp
│      된장국.jpg
│      무국.jpg
│      새우볶음밥.jpg
│      오징어볶음.jpg
│      제육볶음.png
│      죽.jpg
│
└─recipe
    │  list.html
    │
    └─page
            Dakbokkeumtang.html
            jeyugbokkeum.html
            kimchi.html
            kimchisoup.html
            misosoup.html
            ojingeobokkeum.html
            radishsoup.html
            shrimp.html
            water-gruel.html
```


## 개발 환경 및 배포
  
  >2-1 개발 환경 :
> Html , Css , Javascript

>2-2 배포 url : https://su2minig.github.io/lets-cooking/index.html
  
  

## 기능

* ### chatgpt 요리사
  *   chatgpt api 연동으로 입력한 요리의 재료와 조리법 표시

* ### 리스트 페이지
  *  음식 분류 (클릭시 해당 음식들 사진과 이름 표시)
  *  음식 클릭 시 해당 음식 레시피 창 생성



## UI

|메인페이지|
|------|
|<p align="center"><img src="https://github.com/su2minig/lets-cooking/assets/141402694/df3c2cf3-9cf3-401c-839b-10bff5754d00" width="600px" height="300px"></p>|

| 리스트 페이지 |
|---|
| <p align="center"><img src="https://github.com/su2minig/lets-cooking/assets/141402694/5cd2bed9-a543-4e51-8abb-3dd8b195d365" width="600px" height="300px"></p> |
| <p align="center"><img src="https://github.com/su2minig/lets-cooking/assets/141402694/14bae50c-767e-48e8-b7b3-47759de14ac6" width="600px" height="300px"></p>  |

| 레시피 페이지 |
|---|
| <p align="center"><img src="https://github.com/su2minig/lets-cooking/assets/141402694/e0967a2f-adea-40c6-aa3e-419ed7c4ef99" width="600px" height="300px"></p> |

## 구현 기능

|  chatgpt요리사  |
|---|
|  <p align="center"><img src="https://github.com/su2minig/lets-cooking/assets/141402694/66f1bbb6-9ec1-4d78-8c14-a44d954170c1"</p>  |

|  음식리스트페이지  |
|---|
|  <p align="center"><img src="https://github.com/su2minig/lets-cooking/assets/141402694/57c92f9f-b684-4d5d-b06d-d6a5e51037eb"</p>  |

|  레시피페이지  |
|---|
|  <p align="center"><img src="https://github.com/su2minig/lets-cooking/assets/141402694/d5e9b6e8-194e-4534-ae26-c4243c1ef7d5"</p>  |




