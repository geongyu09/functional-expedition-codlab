---
name: component-colocation-pattern
description: Rules for component colocation using the folder/index.tsx pattern. Use when organizing component files, including styles, hooks, and sub-components, to ensure they stay within their parent component folder.
---

# 컴포넌트 콜로케이션 패턴 가이드라인

이 스킬은 모든 컴포넌트들 해당 프로젝트에서 지켜져야하는 컴포넌트 콜로케이션 패턴을 정의합니다.

## 핵심 원칙

모든 컴포넌트는 자신의 폴더를 가지며, `index.tsx`를 통해 익스포트됩니다.
컴포넌트와 관련된 모든 파일(스타일, 유틸, 서브 컴포넌트, 훅 등)은 해당 컴포넌트 폴더 내에 위치해야 합니다.

### 폴더 구조 예시

```plaintext
src/components/Button/
├── index.tsx               # 메인 구현 및 익스포트
├── components/             # 서브 컴포넌트
├── utils/                  # 전용 유틸리티
├── styles.ts               # 스타일 정의
└── hooks/                  # 전용 커스텀 훅
```

### 주의사항
- `src/components` 바로 아래에 파일을 직접 두지 마세요.
- `index.tsx`에서 메인 로직을 구현하고 외부로 노출합니다.
- 내부 전용 파일들이 외부에서 임포트되지 않도록 주의합니다.
