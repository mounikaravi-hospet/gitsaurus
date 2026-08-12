---
sidebar_position: 15
title: git log
---

# `git log`

`git log` shows the commit history.

## Basic Log

```bash
git log
```

This shows detailed commit information.

## Compact Log

```bash
git log --oneline
```

Example:

```text
a8c21f4 Add login validation
35d912b Update README
91a7c33 Initial setup
```

The code at the beginning, such as:

```text
a8c21f4
```

is the shortened commit ID.

## Show Only the Latest 5 Commits

```bash
git log --oneline -5
```

- `git log` → shows commit history
- `--oneline` → one commit per line
- `-5` → only the latest 5 commits

## Show Branch Information

```bash
git log --oneline --decorate -10
```

## Show Commits From All Branches

```bash
git log --oneline --all --decorate -15
```

This can be helpful when trying to locate missing work.