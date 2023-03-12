# Apollo Subgraph 템플릿

> 설정사항

## github action workflow

- prod.yaml & stag.yaml 수정
- secrets.APOLLO_KEY 설정
- rover 커맨드 설정 (check & publish)

## .env

- .env.example -> .env 로 파일명 변경
- .env & .env.dev & .env.prod 모두 수정
- DATABASE_URL -> railway에 올라간 DB URL로 설정


> 주의사항
> 
> git push 하기전에 Apollo와 Railway 설정을 모두 해야 함