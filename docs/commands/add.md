---
sidebar_position: 2
title: git add
---

# `git add`

`git add` tells Git which changes you want to include in your next commit.

## Add One File

```bash
git add src/Login.jsx
```

## Add Multiple Files

```bash
git add src/Login.jsx src/Login.css
```

## Add All Changes

```bash
git add .
```

:::warning[`git add .`]

This stages all changed and untracked files in the current directory.

Run:

```bash
git status
```

first so you know what you are adding.

:::

## Check What Is Staged

```bash
git status
```

Files under:

```text
Changes to be committed:
```

will be included in your next commit.

## Important

`git add` does **not** upload anything to GitHub.

The sequence is:

```text
Change files
    ↓
git add
    ↓
git commit
    ↓
git push
```