# Product Buying Flow Developement

이 레포지토리는 e-커머스 서비스의 제품 구매 과정을 파악하고 이를 배운 것을 복습해보기 위해 구현한 프로젝트입니다.

API는 [FackStore API](https://fakestoreapi.com/)를 이용했으며, 프론트엔드를 중점으로 구현했으므로 실제 제품 구매 과정과 다를 수 있습니다.

## 🧑🏻‍💻 프로젝트 정보

### 실행 방법

```markdown
git clone https://github.com/devseop/productBuyingFlow
yarn install && yarn dev
```

### 프로젝트 구조

```javascript
📦 src
 ┣ 📂 api
 ┃ ┗ api.ts
 ┣ 📂 components
 ┃ ┣ 📂 buy
 ┃ ┃ ┣ CheckInfoForm.tsx
 ┃ ┃ ┣ PaymentSecureKeypad.tsx
 ┃ ┃ ┗ PaymentSuccess.tsx
 ┃ ┣ 📂 product
 ┃ ┃ ┣ ProductDetail.tsx
 ┃ ┃ ┣ ProductItem.tsx
 ┃ ┃ ┗ ProductList.tsx
 ┃ ┣ 📂 user
 ┃ ┃ ┣ Profile.tsx
 ┃ ┃ ┗ SignIn.tsx
 ┃ ┣ AppHeader.tsx
 ┃ ┣ AppLayout.tsx
 ┃ ┣ BackButton.tsx
 ┃ ┣ SkeletonUI.tsx
 ┃ ┗ Spinner.tsx
 ┣ 📂 hooks
 ┃ ┣ useInput.ts
 ┃ ┗ useProductId.ts
 ┣ 📂 pages
 ┃ ┗ App.tsx
 ┣ 📂 router
 ┃ ┗ router.tsx
 ┣ 📂 rtk // redux-toolkit 적용을 위한 관련 폴더
 ┃ ┣ 📂 slice
 ┃ ┃ ┣ productSlice.ts
 ┃ ┃ ┗ userSlice.ts
 ┃ ┗ store.ts
 ┣ 📂 styles
 ┃ ┗ reset.css
 ┣ 📂 types
 ┃ ┗ types.ts
 ┣ 📂 utils
 ┃ ┣ 📂 cache // cache API를 이용한 로컬 캐싱 관련 폴더
 ┃ ┃ ┣ cacheForProducts.ts
 ┃ ┃ ┗ cacheForUser.ts
 ┃ ┣ checkInputVaild.ts // 입력값 검사를 위한 유효성 검사 함수
 ┃ ┣ shuffleArray.ts // 보안 키패드 생성을 위한 배열 셔플 함수
 ┃ ┗ typeGuard.ts // id 여부에 따른 알맞은 데이터 페칭을 위한 타입 가드 함수
 ┣ main.tsx
 ┗ vite-env.d.ts
```

### 사용 라이브러리

```javascript
  "dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@reduxjs/toolkit": "^1.9.7",
    "axios": "^1.5.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.11.0",
    "react-redux": "^8.1.3",
    "react-router-dom": "^6.16.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "prettier": "^3.0.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  },

```

## 📝 구현 내용

### ✅ Assignment 1

## 🫱🏻‍🫲🏿 Commit Convention

커밋 컨벤션과 브랜치 전략은 [원티드 프론트엔드 프리온보딩]의 팀 과제 진행시 결정된 팀 컨벤션을 따랐습니다.

e.g. FEAT: 로그인 유효성 검증 기능 구현

| 태그      | 설명 (한국어로만 작성하기)                                     |
| --------- | -------------------------------------------------------------- |
| FEAT:     | 새로운 기능 추가 (변수명 변경 포함)                            |
| FIX:      | 버그 해결                                                      |
| DESIGN:   | CSS 등 사용자 UI 디자인 변경                                   |
| STYLE:    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우          |
| REFACTOR: | 프로덕션 코드 리팩토링                                         |
| COMMENT:  | 필요한 주석 추가 및 변경                                       |
| DOCS:     | 문서를 수정한 경우                                             |
| CHORE:    | 빌드 테스크 업데이트, 패키지 매니저 설정(프로덕션 코드 변경 X) |
| RENAME:   | 파일 혹은 폴더명을 수정하거나 옮기는 작업                      |
| REMOVE:   | 파일을 삭제하는 작업만 수행한 경우                             |
| INIT:     | 초기 커밋을 진행한 경우                                        |
