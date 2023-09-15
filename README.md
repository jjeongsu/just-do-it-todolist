# Tave WEB 스터디 프로젝트

## Todo List 만들기

TodoList 작성조차 귀찮은 귀차니스트들을 위해 만든 "Just Do It!" 투두리스트 고민말고 일단 그냥해!

### 개발환경

TypeScript + React.js + styled-component

상태관리 라이브러리 : Redux `npm install react-redux`
날짜 관련 라이브러리 : Moment `npm install moment --save `

기타 :carrot:

- React Icons `npm install react-icons --save`

### 폴더구조

```
just-do-it-list
├── node_modules
├── public
├── src
├── .gitignore
├── package.json
└── README.md
```

- public : 정적파일들이 위치합니다.

#### src 내부 폴더 구조

```
└─ src
 ├─ components
 ├─ constants
 ├─ assets
 ├─ hooks (= hoc)
 ├─ pages
 ├─ styles
 ├─ services (= api)
 ├─ App.js
 └─ index.js
```

- component : 재사용가능한 컴포넌트들이 위치합니다.
- constants : 공통적으로 사용되는 상수들을 정의한 파일들이 위치합니다.
- assets : 컴포넌트 내부의 이미지, 폰트파일이 저장됩니다.
- hooks(=hoc) : 커스텀 훅이 위치합니다.
- pages : 라우팅을 적용할 때 페이지 컴포넌트들이 이 폴더에 위치합니다.
- styles : css 파일들이 위치합니다.
