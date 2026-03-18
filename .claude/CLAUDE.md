# functional-tech-salon

## 프로젝트 개요

Bun + Vite + React + TypeScript + SWC 기반의 프로젝트입니다.

## 기술 스택

- **런타임/패키지 매니저**: Bun
- **번들러**: Vite 6
- **UI 라이브러리**: React 19
- **언어**: TypeScript 5.7
- **트랜스파일러**: SWC (`@vitejs/plugin-react-swc`)
- **린터**: ESLint 9 (flat config)

## 개발 명령어

```bash
bun dev         # 개발 서버 실행
bun run build   # 프로덕션 빌드 (tsc -b && vite build)
bun run lint    # ESLint 실행
bun run preview # 빌드 결과물 미리보기
```

## 패키지 관리

항상 `npm`, `yarn`, `pnpm` 대신 **`bun`** 을 사용합니다.

```bash
bun add <package>        # 의존성 추가
bun add -d <package>     # 개발 의존성 추가
bun remove <package>     # 의존성 제거
bun install              # 의존성 설치
```

## 프로젝트 구조

```
src/
  main.tsx        # 진입점
  App.tsx         # 루트 컴포넌트
  App.css
  index.css
  assets/
  vite-env.d.ts   # Vite 타입 선언
index.html
vite.config.ts
tsconfig.json
tsconfig.app.json
tsconfig.node.json
eslint.config.js
```

## TypeScript 설정

- `tsconfig.json`: 루트 설정 (프로젝트 참조)
- `tsconfig.app.json`: 앱 소스용 설정
- `tsconfig.node.json`: Vite 설정 파일용 설정

## ESLint

ESLint 9의 flat config 방식(`eslint.config.js`)을 사용합니다.
- `typescript-eslint` 파서 및 규칙 적용
- `eslint-plugin-react-hooks`: React Hooks 규칙 강제
- `eslint-plugin-react-refresh`: HMR 관련 규칙

## 참고 사항

- SWC를 사용하므로 Babel 기반 플러그인은 사용 불가합니다.
- React 19를 사용하므로 최신 React API(예: `use`, Actions 등)를 활용할 수 있습니다.
- `"type": "module"` 설정으로 ESM 모듈 방식을 사용합니다.


## 프로젝트

해당 프로젝트는 Functional Tech Salon에 참여한 청자들이 직접 프로그램을 만져보면서 "함수형이란 무엇인가?"에 대한 개념을 습득하는 것을 목표로 하고있습니다. 