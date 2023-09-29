# Lets-cooking

:question: Let's cooking 사이트는 조리법을 모르는 사용자를 위한 사이트입니다.

:fork_and_knife: 사용자가 만들고싶은 요리의 재료와 조리법을 chatgpt요리사에게 물어보세요!

:eyes: 리스트페이지에서 분류별로 음식사진을 볼 수 있습니다. 무엇을 만들지 고민이시라면 리스트페이지를 이용해보세요!

## 목차

  * [프로젝트 일정 및 구조](#프로젝트-일정-및-구조)
  * [개발 환경 및 배포](#개발-환경-및-배포)
  * [UI](#UI)
  * [기능](#기능)
  * [트러블슈팅](#트러블슈팅)
  * [개발하며](#개발하며)

## 프로젝트 일정 및 구조

> 기간 23.08.29~23.09.06

<p>
  <img src="https://github.com/su2minig/lets-cooking/assets/141402694/b78b9f12-950e-46aa-bfe9-0352e7be6ebf">
</p>

```
lets-cooking
  │  menu.js
  │  db.json
  │  index.html
  │  package.json
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
            dakbokkeumtang.html
            jeyugbokkeum.html
            kimchi.html
            kimchisoup.html
            misosoup.html
            ojingeobokkeum.html
            radishsoup.html
            shrimp.html
            water-gruel.html
```


## 사용 기술 및 배포
  
  >2-1 사용 기술 :

><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 

>2-2 배포 url : https://su2minig.github.io/lets-cooking/index.html
  
  



## UI

|메인페이지|
|------|
|<img src="https://github.com/su2minig/lets-cooking/assets/141402694/df3c2cf3-9cf3-401c-839b-10bff5754d00">|


| 리스트 페이지 |
|---|
| <img src="https://github.com/su2minig/lets-cooking/assets/141402694/5cd2bed9-a543-4e51-8abb-3dd8b195d365"> |



| 레시피 페이지 |
|---|
|<img src="https://github.com/su2minig/lets-cooking/assets/141402694/e0967a2f-adea-40c6-aa3e-419ed7c4ef99">|


## 기능

<p text-align="center"><img src="https://github.com/su2minig/lets-cooking/assets/141402694/b5e417d7-4c96-412c-9007-2cd14ac5022f"></p>
출처 : https://www.mindmeister.com/ko

|<p align="center"> 페이지이동</p> |
|---|
|<p align="center"> <img src="https://github.com/su2minig/lets-cooking/assets/141402694/9333239d-791e-4130-8b4d-edc6d28d6b1a"> </p>|

| <p align="center"> chatgpt요리사 </p> |
|---|
| <p align="center"> <img src="https://github.com/su2minig/lets-cooking/assets/141402694/d5e9b6e8-194e-4534-ae26-c4243c1ef7d5"> </p> |

| <p align="center"> 음식리스트페이지 </p> |
|---|
| <p align="center"> <img src="https://github.com/su2minig/lets-cooking/assets/141402694/e99acd8c-6e6c-4b22-ab11-437201d2ee04"> </p> |

| <p align="center"> 레시피페이지 </p> |
|---|
| <p align="center"> <img src="https://github.com/su2minig/lets-cooking/assets/141402694/57c92f9f-b684-4d5d-b06d-d6a5e51037eb"> </p> |

## 트러블슈팅

* chatgpt api에 http 요청 후 데이터를 그대로 놔두어서 2번째 요청부터 요리를 다시 입력해달라는 대답이나 전에 질문한 음식에 대한 대답이 돌아왔다. 처음에는 요리를 다시 입력해달라는 응답만 돌아와서 뭐가 문제인지 알기어려웠지만 몇번 더해보니 전에 입력한 음식에 대한 응답이 중첩되어 돌아오는 것을 보고서 요청data를 살펴보니 요청한 데이터가 남아있는 것을 알게되어 데이터 요청후 요청한 데이터를 잘라내어 해결했다.
* 음식분류 페이지를 처음 만들 때 메뉴칸마다 이벤트를 주어 개발을 진행하니 코드가 길어지고 복잡해져가서 개발이 막혔을 때 수업에서 배운 이벤트 발생 지점을 확인했던 것이 기억이나 다시 이벤트 부분을 복습하여 메뉴를 테이블로 감싸 테이블에 이벤트를 주고 target속성을 통해 이벤트가 발생한 지점에 접근하게 되어 기능을 구현할 수 있게되었다.


## 개발하며


