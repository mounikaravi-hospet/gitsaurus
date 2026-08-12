---
sidebar_position: 3
title: git switch
---

# `git switch`

Use `git switch` to change branches.

## Switch to an Existing Branch

```bash
git switch main
```

## Create and Switch to a New Branch

```bash
git switch -c feature/login
```

The `-c` means:

> create a branch and switch to it

## Check Your Current Branch

```bash
git branch
```

:::tip

For normal branch navigation, this guide uses `git switch` instead of the older multi-purpose `git checkout` command.

:::