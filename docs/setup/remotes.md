---
sidebar_position: 5
title: Understand Git Remotes
---

# Understand Git Remotes

A Git remote is a saved connection to another Git repository.

Check your remotes with:

```bash
git remote -v
```

You may see:

```text
origin  https://github.com/team/project.git (fetch)
origin  https://github.com/team/project.git (push)
```

## `origin`

`origin` usually refers to the GitHub repository your local repository was cloned from.

Conceptually:

```text
GitHub Repository
      ↑
    origin
      ↑
Your Computer
```

## `upstream`

When working with a fork, `upstream` usually refers to the original repository.

Example:

```text
Original Repository
       ↑
    upstream

Team Fork
       ↑
     origin

Your Computer
```

## Add an Upstream Remote

```bash
git remote add upstream ORIGINAL_REPOSITORY_URL
```

Example:

```bash
git remote add upstream https://github.com/instructor/starter.git
```

Verify:

```bash
git remote -v
```

## Change a Remote URL

```bash
git remote set-url origin NEW_URL
```

:::warning

Do not change remote URLs randomly when trying to fix a push or pull problem.

Always run:

```bash
git remote -v
```

first.

:::

## Next Step

If your repository is a fork, see:

[Sync a Fork](../workflow/sync-fork.md)