---
sidebar_position: 1
title: Before You Panic
---

# 🚨 Before You Panic

Git problems happen.

Do not immediately copy commands from random search results.

## Step 1: Run

```bash
git status
```

Read the output.

## Step 2: Check Your Branch

```bash
git branch
```

## Step 3: Check Your Remotes

If the problem involves GitHub:

```bash
git remote -v
```

## What Happened?

### Push rejected

[Push Rejected](./push-rejected.md)

### Merge conflict

[Merge Conflict](./merge-conflict.md)

### Committed to the wrong branch

[Wrong Branch](./wrong-branch.md)

### Can't see teammate changes

[Missing Changes](./missing-changes.md)

### Code disappeared

[Code Disappeared](./code-disappeared.md)

### Git says `HEAD` is detached

[Detached HEAD](./detached-head.md)

### GitHub remote is wrong or missing

[Remote Problems](./remote-errors.md)

:::danger

Avoid commands such as:

```bash
git reset --hard
git clean -fd
git push --force
```

until you understand exactly what they will do.

:::