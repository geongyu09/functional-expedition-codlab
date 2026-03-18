## 요구사항 분석

다크 테마 기반의 랜딩 페이지(첫 화면)를 구현합니다. 화면 중앙에 "함수형 프로그래밍" 타이틀, 두 개의 토픽 태그("액션에서 계산 추출하기", "계층형 설계"), 그리고 "실습 시작하기" 버튼으로 구성됩니다. React Router를 도입하여 `/` 경로에서 이 화면을 렌더링하고, 버튼 클릭 시 `/step1`로 이동합니다. 현재 Vite 기본 boilerplate 코드는 모두 제거합니다.

## 구현 단계

### 1단계: React Router 설치 및 라우팅 기반 구성

- [x] `bun add react-router-dom` 으로 패키지 설치
- [x] `src/main.tsx`: `<App />`을 `<BrowserRouter>`로 감싸기
- [x] `src/App.tsx`: Vite boilerplate 제거, `Routes`/`Route`로 `/` → `HomePage`, `/step1` → placeholder 컴포넌트 매핑
- [x] `src/App.css`: 기존 boilerplate 스타일 전체 제거

### 2단계: 글로벌 스타일 및 HTML 초기화

- [x] `index.html`: `lang="ko"` 설정, `<title>` 변경, Google Fonts Inter CDN 추가
- [x] `src/index.css`: 기존 스타일 제거, 다크 테마 기반 글로벌 스타일 작성 (배경 `#0C1117`, Inter 폰트, 마진/패딩 리셋)

### 3단계: TopicTag 공통 컴포넌트 생성

- [x] `src/components/TopicTag/index.tsx`: `label` prop을 받아 파란 점 + 텍스트 렌더링하는 컴포넌트 작성
- [x] `src/components/TopicTag/TopicTag.css`: 디자인 스펙 스타일 작성
  - 배경 `#1A2332`, `border-radius: 20px`, `padding: 10px 20px`, `border: 1px solid #2A3A4A`
  - 파란 점: 8x8, `background: #3B82F6`, `border-radius: 50%`
  - 라벨: `color: #94A3B8`, `font-size: 15px`, `font-weight: 500`

### 4단계: HomePage 페이지 컴포넌트 생성

- [x] `src/pages/HomePage/index.tsx`: 랜딩 페이지 전체 레이아웃 구현
  - `useNavigate` 훅으로 버튼 클릭 시 `/step1` 이동
  - `TopicTag` 컴포넌트 2개 사용
- [x] `src/pages/HomePage/HomePage.css`: 디자인 스펙 스타일 작성
  - 페이지: `flex-direction: column`, `justify-content: center`, `align-items: center`, `min-height: 100vh`, `gap: 24px`
  - 타이틀: `color: #FFFFFF`, `font-size: 48px`, `font-weight: 700`
  - 버튼: `background: #3B82F6`, `border-radius: 8px`, `padding: 14px 32px`, `font-size: 18px`, `font-weight: 600`

### 5단계: 정리

- [x] `src/assets/react.svg`, `public/vite.svg` 삭제 (미사용 boilerplate 파일)
- [x] `/` 경로 렌더링 및 `/step1` 이동 동작 최종 확인

## 주의사항

- **`/step1` 경로**: 현재 요구사항은 첫 화면만이므로, `/step1`에는 최소한의 placeholder 컴포넌트만 배치합니다 (빈 화면 방지)
- **Inter 폰트**: Google Fonts CDN 사용, 네트워크 실패에 대비해 `font-family` 스택에 `system-ui` fallback 포함
- **Vite SPA 라우팅**: 개발 서버에서는 별도 설정 불필요, 프로덕션 배포 시 서버에서 모든 경로를 `index.html`로 fallback해야 함
- **TypeScript strict 모드**: `noUnusedLocals`, `noUnusedParameters` 활성화 상태 — 미사용 import/변수 없도록 주의
- **접근성**: `<button>` 시맨틱 태그 사용, `<h1>` 타이틀 마크업, focus 상태 스타일 유지
