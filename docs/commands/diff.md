---
sidebar_position: 16
title: git diff
---

# `git diff`

`git diff` shows the differences between versions of your files.

## See Unstaged Changes

```bash
git diff
```

This shows modifications you have made but have not staged.

## See Staged Changes

```bash
git diff --staged
```

This shows what will be included in your next commit.

## Check One File

```bash
git diff src/Login.jsx
```

## Compare Two Branches

```bash
git diff main..feature/login
```

## Why Use It?

Before committing, run:

```bash
git diff
```

to make sure you understand what you actually changed.

:::tip

`git status` tells you **which files changed**.

`git diff` tells you **what changed inside those files**.

:::