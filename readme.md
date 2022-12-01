## 1회차
### 요구사항
- 주어진 txt 파일을 조립해서 html 형태로 응답하시오
- html.txt = 헤드 + 바디
- 바디 = 헤더 + 메인 + 풋터
- html 파일로 만들 수도 있지만 이번엔 텍스트파일로 다 만들어놓고 나중에 파싱 해보자 (실무에서는 그렇게 많이 한다)

### 파일 구성
- head.txt
```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
```

- header.txt
```html
<ul><li>메뉴</li></ul>
```

- main.txt
```html
<div id="root">hello</div>
```

- footer.txt
```html
<footer>kdt 클래스</footer>
```

- body.txt
```html
<!-- 빈 파일 -->
```

## 2회차
### 요구사항
- `/`, `/a`, `/b`, `/c`, `/d` 네 개의 라우트를 만들어보자

## 3회차
### 요구사항
- 응답할 html 파일 내에 post 요청 달기
- post 요청 처리 (post 내용 텍스트 파일로 저장하기)
- 일단 post 요청 form을 하나 만들자

## 4회차
### 요구사항
- port : 5580
- request.method = "POST"
- <form method="POST">
- event : Enter
- 설명 : post form에 데이터를 넣은 후 엔터를 누르면
- 이벤트가 실행되어 -> 임의의 디렉토리에 JSON파일로 날짜와 함께 저장됨
- 날짜구하는 API : new Date()