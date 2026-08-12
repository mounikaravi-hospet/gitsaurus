---
sidebar_position: 5
title: git reset
---

# `git reset`

`git reset` changes where Git considers a branch or staging state to be.

It can be useful, but some forms can also discard work.

## Unstage a File

If you accidentally staged a file:

```bash
git restore --staged filename
```

For beginners, this is usually clearer than using `git reset` for unstaging.

## Soft Reset

```bash
git reset --soft HEAD~1
```

Moves the branch pointer back while keeping the changes staged.

## Mixed Reset

```bash
git reset HEAD~1
```

Moves the branch pointer back and keeps the changes in your working directory.

## Hard Reset

```bash
git reset --hard HEAD~1
```

:::danger[`--hard` can destroy work]

A hard reset changes the branch and working tree to match the selected commit.

Uncommitted changes can be permanently lost.

Do not use `git reset --hard` simply because another Git command failed.

:::

## Before Using Reset

Run:

```bash
git status
git log --oneline -10
```

Make sure you know:

- which branch you are changing
- which commit you are targeting
- whether the commits have already been shared with teammates