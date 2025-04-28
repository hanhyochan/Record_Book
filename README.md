# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## 📝 커밋 메시지 컨벤션

| 태그     | 설명                           |
|----------|--------------------------------|
| feat     | 새로운 기능 추가               |
| fix      | 버그 수정                      |
| docs     | 문서(README 등) 수정           |
| style    | 코드 스타일 변경 (세미콜론 등) |
| refactor | 리팩토링 (기능 변경 없음)      |
| test     | 테스트 코드 추가/수정          |
| chore    | 기타 변경 (빌드, 설정 등)      |

### 예시
docs: README  커밋메시지 컨벤션 작성

### 프로젝트 설명
사용자가 자유롭게 게시글을 작성하고, 다른 사람의 게시글을 조회하고 댓글을 달 수 있는 커뮤니티 사이트입니다.
로그인, 게시글 작성, 조회, 댓글 작성 기능을 포함하고 있으며 카드 컨텐츠를 스와이프 형식으로 확인할 수 있는 반응형 웹 사이트입니다.
해당 프로젝트는 PC, 태블릿, 모바일에서 모두 사용 가능합니다.

### 사용 기술
프론트엔드: React19, TypeScript
스타일링: TailwindCSS
상태관리: Zustand
기타 라이브러리: Vite, axios

### 폴더구조
src/
├── api/                 # API 호출 관련 로직
├── components/          # UI 컴포넌트들 
│   ├── common/          # 공통 UI 컴포넌트들 (버튼, 인풋 등)
│   ├── header/          # 헤더 관련 컴포넌트
│   └── home/            # 홈 화면 관련 컴포넌트들
├── hooks/               # 커스텀 훅들
├── store/               # 상태 관리 (Zustand)
├── types/               # TypeScript 타입 정의
└── utils/               # 유틸리티 함수들

### 미구현 사항
1. 인증 부분에서 회원가입, 로그아웃, 자동 로그아웃 API 연동이 아직 구현되지 않았습니다. 현재 로그인과 토큰 저장 기능만 구현된 상태입니다.
2. 게시글 관련 부분에서 수정, 삭제 API연동이 아직 구현되지 않았습니다. 게시글 상세 조회 시 반환받은 게시글 id로 삭제 및 조회 구현 예정입니다.
3. 댓글 작성, 조회, 수정, 삭제 API 연동이 구현되지 않았습니다. 게시글 id 기반으로 댓글 작성 기능 구현할 예정이며 댓글 조회 시 반환값으로 나오는 user 정보로 사용자를 구분해 수정, 삭제 버튼을 조건부 렌더링 할 예정입니다.
4. 첫 화면 렌더링 시 홈화면이 아닌 로그인 화면이 나오며 다른 화면으로 이동이 안되는 상황입니다. 첫 렌더링 시 홈 화면이 나오도록 구현할 예정입니다.
5. 게시글 상세 페이지 조회 모바일 버전, 헤더 프로필 이미지(로그인 상태) 클릭 시 나오는 토스트 알림 형태 팝업을 포함한 UI 일부가 구현되지 않았습니다.

### 전달사항
id: test0542
pw: test0542!?
위의 전달주신 계정을 사용해 로그인 기능을 구현하는 것으로 이해하여 로그인 시도를 해보았으나 로그인이 되지 않는 문제가 있었습니다.
따라서 아래의 계정으로 스웨거에서 회원가입 후, 로그인 구현하는 데 사용하였습니다. 

아래 계정으로 로그인 후 제가 만든 배포 사이트를 확인해주시면 감사하겠습니다.
id: test12345
pw: password12345

### 제가 생각하는 코드 특징
사이트에 사용할 모든 컴포넌트(버튼, 인풋, 게시글 작성 인풋, 로그인팝업, 게시글 작성 팝업 등)를 모듈화하고, 자주 사용하는 함수는 커스텀 훅으로 분리하여 코드를 독립적으로 관리할 수 있도록 노력했습니다.

### 아쉬운 부분
1. 페이지 전환할 때 라우터를 사용하지 않은 부분이 아쉬웠습니다. 구현 초기에 컴포넌트 구조가 단순하다고 생각하여 조건부 렌더링을 통해서 구현하려고 했으나, 게시글 상세 조회, 게시글 작성, 홈 화면, 등 생각보다 구조가 더 복잡했고 if 문이나 스위치문만으로 구현하기에는 코드의 가독성이 떨어지며, 뒤로가기 버튼을 사용할 수 없고 url 관리가 불가능하다는 단점을 느끼게 되었습니다. 라우트로 구현하면 어땠을까 하는 아쉬움이 있습니다.
2. swiper과 react-js-pagination 문제로 빌드 오류가 나서 배포에 실패했습니다. 기한은 지났지만 배포가 계속 안됬던 이유를 계속 찾아볼 예정입니다.

