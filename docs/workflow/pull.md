---
sidebar_position: 1
title: Get the Latest Team Code
---

# Get the Latest Team Code

Before starting new work, update your local `main` branch.

## Step 1: Check Your Current Branch

```bash
git branch
```

If necessary:

```bash
git switch main
```

## Step 2: Check Your Working Tree

```bash
git status
```

Ideally:

```text
nothing to commit, working tree clean
```

:::warning[Uncommitted changes?]

If you have unfinished changes, do not delete them just so you can pull.

Decide whether the changes should be:

- committed
- stashed
- intentionally discarded

:::

## Step 3: Pull

```bash
git pull
```

You may see:

```text
Already up to date.
```

or Git may download newer commits.

## Recommended Start-of-Work Routine

```bash
git switch main
git status
git pull
```

## Next Step

Create a branch for your new work:

[Create a Feature Branch](./branches.md)