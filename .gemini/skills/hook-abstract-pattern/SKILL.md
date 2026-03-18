---
name: hook-abstract-pattern
description: Rules for custom hook abstraction (feature vs common). Use when creating or refactoring hooks to ensure domain logic is correctly separated and folder/index.tsx pattern is followed.
---

# 커스텀 훅 추상화 패턴 가이드라인

이 스킬은 모든 커스텀 훅들 해당 프로젝트에서 지켜져야하는 커스텀 훅 추상화 패턴을 정의합니다.

## 핵심 원칙

- **feature 훅**: 특정 도메인 로직을 다루는 훅.
- **common 훅**: 도메인 로직과 상관없이 재사용 가능한 훅.

### 계층 구조
- `feature 훅`은 `common 훅`을 호출할 수 있지만, 반대는 불가능합니다.
- 각 훅은 하나의 일(Single Responsibility)만 수행해야 합니다.

### 폴더 구조
```plaintext
src/hooks/
├── common/useForm/index.tsx
└── feature/useMemberForm/index.tsx
```

## 주의사항
- `feature 훅` 내에서 다른 `feature 훅`을 호출하지 마세요.
- 모든 훅은 폴더 내 `index.tsx` 구조를 가져야 합니다.
- 훅 전용 유틸이나 타입은 해당 폴더 내에 위치시킵니다.
