---
sidebar_position: 13
title: git revert
---

# `git revert`

`git revert` undoes a commit by creating a **new commit** that reverses its changes.

This is usually safer than rewriting history on a shared branch.

## Step 1: Find the Commit

```bash
git log --oneline -5
```

Example:

```text
a8c21f4 Add login validation
35d912b Update README
```

## Step 2: Revert It

```bash
git revert a8c21f4
```

Git creates a new commit that reverses the changes made by `a8c21f4`.

Conceptually:

```text
A --- B --- C --- D
          ↑     ↑
       change   revert
```

## When to Use It

Use `git revert` when:

- an incorrect commit has already been shared
- you want to undo changes without rewriting shared history

:::tip

For a shared `main` branch, `git revert` is generally safer than `git reset`.

:::