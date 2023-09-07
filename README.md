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
> HTML , CSS , JavaScript

>2-2 배포 url : https://su2minig.github.io/lets-cooking/index.html
  
  

## 기능

<p text-align="center"><img src="https://github.com/su2minig/lets-cooking/assets/141402694/b5e417d7-4c96-412c-9007-2cd14ac5022f"></p>
출처 : https://www.mindmeister.com/ko

* ### chatgpt 요리사
  *   chatgpt api 연동으로 입력한 요리의 재료와 조리법 표시

* ### 리스트 페이지
  *  음식 분류 (클릭시 해당 음식들 사진과 이름 표시)
  *  음식 클릭 시 해당 음식 레시피 창 생성



## UI

|메인페이지|
|------|
|<img src="https://github.com/su2minig/lets-cooking/assets/141402694/df3c2cf3-9cf3-401c-839b-10bff5754d00">|

| 리스트 페이지 |
|---|
| <img src="https://github.com/su2minig/lets-cooking/assets/141402694/5cd2bed9-a543-4e51-8abb-3dd8b195d365"> |
| <img src="https://github.com/su2minig/lets-cooking/assets/141402694/14bae50c-767e-48e8-b7b3-47759de14ac6"> |

| 레시피 페이지 |
|---|
|<img src="https://github.com/su2minig/lets-cooking/assets/141402694/e0967a2f-adea-40c6-aa3e-419ed7c4ef99">|

## 구현 기능

| 페이지이동 |
|---|
| <img src="https://github.com/su2minig/lets-cooking/assets/141402694/9333239d-791e-4130-8b4d-edc6d28d6b1a"> |

|  chatgpt요리사  |
|---|
|  <img src="https://github.com/su2minig/lets-cooking/assets/141402694/d5e9b6e8-194e-4534-ae26-c4243c1ef7d5">  |

|  음식리스트페이지  |
|---|
|  <img src="https://github.com/su2minig/lets-cooking/assets/141402694/e99acd8c-6e6c-4b22-ab11-437201d2ee04">  |

|  레시피페이지  |
|---|
|  <img src="https://github.com/su2minig/lets-cooking/assets/141402694/57c92f9f-b684-4d5d-b06d-d6a5e51037eb">  |

## 개발하며

* 좋았던 점 
  * 직접 아이디어부터 시작해서 배운 내용으로 HTML, CSS, JavasSript를 이용해서 결과물이 이미지한 결과물에 가까워질수록 정말 재미있었습니다.
  * 꼭 구현하고싶었던 이벤트와 fetch를 이용해서 서버에 저장된 음식 정보들을 가져와서 표시하는 것에 성공해서 좋았습니다. 특히 처음에는 이벤트도 잘사용못해서 메뉴테이블 하나하나에 이벤트를 주고서 구현을 시도했고 너무 코드가 더럽워서 복잡해져 이벤트부분을 다시 공부하여 타겟과 변수를 이용하여 코드를 줄이는 것에 성공했다.

* 아쉬웟던 점
  * 처음부터 계획표를 작성하지 않고 시작한 결과 하나의 일을 끝내고 다음에 무엇을 해야할지 정해야하는 딜레이가 발생해 시간낭비가 생겨 아쉬웠다.
  * js구현에 생각보다 어려움을 겪어 초조함에 쉬지않고서 한탓에 생각이 둔해져 시간만 많이 소비하고 컨디션까지 망쳐버렸다.
  * 문제가 발생하면 발생 이유를 보고 왜 이러한 상황이 발생했는지 생각을 하지않고 그저 문제가 발생한 부분의 코드만 본탓에 문제수정에 시간이 너무 많이 들어갔다.

* 교훈
  * 모든 일은 계획부터 확실하게
  * 잘 안될때에는 휴식하며 리프레쉬!
  * 문제가 발생하면 발생한 상황과 이유를 꼼꼼하게 분석하자
