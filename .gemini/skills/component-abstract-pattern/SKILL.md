---
name: component-abstract-pattern
description: Rules for React component abstraction levels (feature, common). Use when creating new components, refactoring, or reviewing code to ensure correct hierarchy and separation of domain logic.
---

# 리액트 컴포넌트 추상화 가이드라인

이 스킬은 모든 컴포넌트들 해당 프로젝트에서 지켜져야하는 컴포넌트 추상화 레벨을 정의합니다.

## 핵심 원칙

모든 컴포넌트는 도메인 로직을 다루는 여부에 따라서 feature, common으로 나눕니다.

### 컴포넌트 종류

- **feature/pages**: 특정 페이지에 종속된 큰 컴포넌트 (section 단위). 도메인 로직 포함.
- **feature/widget**: 여러 페이지에서 재사용 가능한 도메인 로직 컴포넌트.
- **common/entities**: 도메인 로직 없이 내부 로직만 다루는 컴포넌트 (e.g. Calendar, Tab).
- **common/shared**: 내부 로직 없이 UI만 다루는 컴포넌트 (e.g. Button, Flex).

### 계층 구조 (Precedence)
`feature > entities > shared`
- 하위 레벨은 상위 레벨을 임포트할 수 없습니다.
- e.g. `shared`는 `entities`를 사용할 수 없습니다.

## 컴포넌트 구현 절차

1. **도메인 로직 확인**: 도메인 로직이 포함되는지 확인.
2. **추상화 레벨 결정**: `pages`, `widget`, `entities`, `shared` 중 선택.
3. **불필요한 추상화 금지**: 정의된 규칙 외의 과도한 추상화는 지양합니다.
