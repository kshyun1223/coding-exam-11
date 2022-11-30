1. contents 폴더가 비어있는 상태에서 처음 실행시키면
   - ENOENT: no such file or directory, open './contents/log.json' 라는 에러가 나오고 log.json 파일이 생성됨

2. 그 상태에서 한 번 더 실행시키면
   - makeHTML(...) is not a function 라는 에러가 나오고 html.txt 파일이 생성됨
   - 타입스크립트 디버깅하는 방법은 아직 모르겠지만 `console.log(eachContents)`가 실행되는 걸로 봐서 그 다음 줄에 `writeFileSync()` 문제인 것 같음
   - 혹시 비동기 처리를 하면 되는걸까...?