---
sidebar_position: 4
title: git pull
---

# `git pull`

`git pull` gets changes from a remote repository and integrates them into your current branch.

Typical use:

```bash
git switch main
git pull
```

Conceptually:

```text
GitHub
  ↓
fetch changes
  ↓
integrate changes
  ↓
Your current branch
```

## Before Pulling

Run:

```bash
git status
```

Make sure you understand any uncommitted changes you currently have.

## Pull From a Specific Remote and Branch

```bash
git pull origin main
```

Usually, if your branch is configured to track `origin/main`, this is enough:

```bash
git pull
```

## Pull vs Fetch

`git fetch` downloads information without changing your current files.

`git pull` fetches and then integrates the changes.