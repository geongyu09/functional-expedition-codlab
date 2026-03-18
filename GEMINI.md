# Gemini CLI Configuration for functional-tech-salon

This project is a functional programming study material built with Bun, Vite, React 19, and TypeScript.

## Core Mandates

- **Workflow Integrity**: Strictly follow the established workflow:
  1.  Read requirements from `context/requirement.md`.
  2.  Generate/Update implementation plan in `context/statement.md` before coding.
  3.  Implement changes following project-specific patterns.
  4.  Verify with tests (TDD preferred).
  5.  Perform self-review against `code-reviewer` standards.
- **Tech Stack**: Use `bun` for all package management and task execution.
- **Architectural Patterns**: Adhere to:
  - Component Abstraction Level (`skill-component-abstract-pattern`)
  - Component Colocation Pattern (`skill-component-colocation-pattern`)
  - Hook Abstraction Pattern (`skill-hook-abstract-pattern`)

## Development Commands

- `bun dev`: Start development server
- `bun run build`: Production build
- `bun run lint`: Run ESLint
- `bun run preview`: Preview build
- `bun add <pkg>`: Add dependency

## Agent Roles (Contextual Guidance)

When performing specific tasks, adopt the following personas based on `.claude/agents/`:
- **Planner**: Use for analyzing requirements and creating implementation steps in `context/statement.md`.
    - **Format**:
        1. Overview
        2. Requirements
        3. Component Structure
        4. State Management Strategy
        5. Implementation Steps (Phased with Files, Actions, Reasons, Dependencies, Risks)
        6. Testing Strategy
        7. Risks & Mitigation
        8. Success Criteria
- **TDD Guide**: Use for writing tests before or alongside feature implementation.
- **Code Reviewer**: Use for final verification of implemented code.
    - **Focus**: Security, Code Quality (Single Responsibility, naming, DRY), Performance, and Best Practices.

## Available Skills

Activate these skills for deep context on specific areas:
- `skill-domain-knowledge`: Understanding the functional programming concepts of this project.
- `skill-component-abstract-pattern`: Rules for component abstraction.
- `skill-component-colocation-pattern`: Rules for file organization.
- `skill-hook-abstract-pattern`: Rules for custom hooks.

## Project Structure

- `src/components/`: Reusable components (with local styles/tests).
- `src/hooks/`: Business logic extracted into custom hooks.
- `src/pages/`: Page-level components.
- `context/`: Requirement and implementation statement documents.
