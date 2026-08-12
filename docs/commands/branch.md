---
sidebar_position: 7
title: git branch
---

# `git branch`

`git branch` shows and manages local branches.

## Show Local Branches

```bash
git branch
```

Example:

```text
* main
  feature/login
  feature/search
```

The `*` marks your current branch.

## Show Local and Remote Branches

```bash
git branch -a
```

## Show Tracking Information

```bash
git branch -vv
```

Example:

```text
* main abc1234 [origin/main] Merge login feature
```

This shows which remote branch your local branch tracks.

## Create a Branch

You can create a branch with:

```bash
git branch feature/login
```

However, for beginners, this guide recommends:

```bash
git switch -c feature/login
```

because it creates **and switches to** the branch in one command.