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