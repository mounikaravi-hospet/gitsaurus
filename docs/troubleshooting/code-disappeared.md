---
sidebar_position: 6
title: Code Disappeared
---

# Code Disappeared

If code seems to have disappeared, do not immediately assume it is permanently lost.

## First: Stop

Do not run:

```bash
git reset --hard
git clean -fd
```

until you understand what happened.

## Step 1: Check Your Branch

```bash
git branch
```

You may simply be viewing a different branch.

## Step 2: Check Status

```bash
git status
```

## Step 3: Check Recent Commits

```bash
git log --oneline --all --decorate -15
```

Your work may still exist in another commit or branch.

## Step 4: Check GitHub

Look at:

- your branch
- recent commits
- Pull Requests
- teammate branches

## Step 5: Check the Reflog

If commits appear to have moved:

```bash
git reflog
```

The reflog records recent movements of `HEAD` and can sometimes help locate commits that are no longer visible from your current branch.

:::warning

Do not start resetting branches while searching for missing work.

Identify the commit containing the work first.

:::