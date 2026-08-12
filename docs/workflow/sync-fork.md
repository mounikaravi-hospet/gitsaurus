---
sidebar_position: 8
title: Sync a Fork
---

# Sync a Fork

If your repository is a fork, the original repository may receive updates after your fork was created.

You can bring those changes into your fork.

## Understand the Remotes

Typical setup:

```text
Original Repository
       ↑
    upstream

Your Fork
       ↑
     origin

Your Computer
```

Check:

```bash
git remote -v
```

If `upstream` does not exist:

```bash
git remote add upstream ORIGINAL_REPOSITORY_URL
```

## Step 1: Switch to `main`

```bash
git switch main
```

## Step 2: Get Updates from Upstream

```bash
git fetch upstream
```

## Step 3: Merge the Upstream Changes

```bash
git merge upstream/main
```

## Step 4: Update Your Fork on GitHub

```bash
git push origin main
```

Your fork's `main` branch is now synchronized.

## GitHub Website Option

GitHub may also provide a **Sync fork** option on the repository page.

:::warning

Syncing a fork is not the same as getting changes from your teammates.

For normal team work, you will usually use:

```bash
git pull
```

from your team repository.

:::