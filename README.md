# Lets-cooking

:question: Let's cooking 사이트는 조리법을 모르는 사용자를 위한 사이트입니다.

:fork_and_knife: 사용자가 만들고싶은 요리의 재료와 조리법을 chatgpt요리사에게 물어보세요!

:eyes: 리스트페이지에서 분류별로 음식사진을 볼 수 있습니다. 무엇을 만들지 고민이시라면 리스트페이지를 이용해보세요!

## 목차

  * [프로젝트 일정 및 구조](#프로젝트-일정-및-구조)
  * [개발 환경 및 배포](#개발-환경-및-배포)
  * [기능](#기능)
  * [UI](#UI)
  * [구현 기능](#구현-기능)
  * [개발하며..](#개발하며..)

## 프로젝트 일정 및 구조

> 기간 23.08.29~23.09.06

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
|<img src="https://github.com/su2minig/lets-cooking/assets/141402694/df3c2cf3-9cf3-401c-839b-10bff5754d00" width="600px" height="300px">|

| 리스트 페이지 |
|---|
| <img src="https://github.com/su2minig/lets-cooking/assets/141402694/5cd2bed9-a543-4e51-8abb-3dd8b195d365" width="600px" height="300px"> |
| <img src="https://github.com/su2minig/lets-cooking/assets/141402694/14bae50c-767e-48e8-b7b3-47759de14ac6" width="600px" height="300px"> |

| 레시피 페이지 |
|---|
|<img src="https://github.com/su2minig/lets-cooking/assets/141402694/e0967a2f-adea-40c6-aa3e-419ed7c4ef99" width="600px" height="300px">|

## 구현 기능

|  chatgpt요리사  |
|---|
|  <img src="https://github.com/su2minig/lets-cooking/assets/141402694/d5e9b6e8-194e-4534-ae26-c4243c1ef7d5" width="600px" height="300px">  |

|  음식리스트페이지  |
|---|
|  <img src="https://github.com/su2minig/lets-cooking/assets/141402694/e99acd8c-6e6c-4b22-ab11-437201d2ee04" width="600px" height="300px">  |

|  레시피페이지  |
|---|
|  <img src="https://github.com/su2minig/lets-cooking/assets/141402694/57c92f9f-b684-4d5d-b06d-d6a5e51037eb" width="600px" height="300px">  |

## 개발하며..

* 좋았던 점 
  * 직접 아이디어부터 시작해서 배운 내용으로 html, css, javascript를 이용해서 결과물이 이미지한 결과물에 가까워질수록 정말 재미있었습니다. 특히 js부분은 html와 css보다 훨씬 미숙했기에 정말 많이 방황하며 고치고 또 고쳤기에 js부분이 작동할때는 정말 좋았습니다.

* 아쉬웟던 점
  * 처음부터 계획표를 작성하지 않고 시작한 결과 하나의 일을 끝내고 다음에 무엇을 해야할지 정해야하는 딜레이가 발생해 시간낭비가 생겨 아쉬웠다.
  * js구현에 생각보다 어려움을 겪어 초조함에 쉬지않고서 한탓에 생각이 둔해져 시간만 많이 소비하고 컨디션까지 망쳐버렸다.
  * 문제가 발생하면 발생 이유를 보고 왜 이러한 상황이 발생했는지 생각을 하지않고 그저 문제가 발생한 부분의 코드만 본탓에 문제수정에 시간이 너무 많이 들어갔다.

* 교훈
  * 모든 일은 계획부터 확실하게..
  * 휴식도 중요하다!
  * 문제가 발생하면 발생한 상황과 이유를 꼼꼼하게 분석하자


 
