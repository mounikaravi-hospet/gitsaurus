---
sidebar_position: 2
title: Protect the Main Branch
---

# Protect the Main Branch

Your team's `main` branch should represent reviewed and integrated project code.

Repository rules can prevent accidental or inappropriate changes to `main`.

## Recommended Workflow

```text
Feature Branch
      ↓
Pull Request
      ↓
Review
      ↓
Merge
      ↓
main
```

Instead of:

```text
Developer
    ↓
Direct push
    ↓
main
```

## Create a Rule for `main`

On GitHub, open your repository settings.

Look for repository **Rules** or **Rulesets**.

Create a branch ruleset targeting:

```text
main
```

## Recommended Rules

For a student team project, consider requiring:

- Pull Requests before merging
- at least one approval
- resolved conversations before merging
- passing status checks if your project uses CI
- protection against force pushes
- protection against accidental branch deletion

## Keep the Configuration Practical

Do not enable requirements your team cannot actually satisfy.

For example, do not require automated status checks unless your repository has those checks configured.

:::warning[Team administrators]

Repository administrators or organization owners may be able to bypass certain rules depending on the ruleset configuration.

Configure bypass permissions intentionally.

:::

## Suggested Course Setup

For most team projects:

```text
main
├── Pull Request required
├── 1 review required
├── No force pushes
└── No deletion
```

Later, you can add CI checks once your team has automated testing configured.