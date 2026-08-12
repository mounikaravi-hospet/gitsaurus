---
sidebar_position: 2
title: Push Rejected
---

# Push Rejected

You may see:

```text
! [rejected]
error: failed to push some refs
```

This usually means Git cannot safely perform the push as requested.

## Step 1: Check Your Branch

```bash
git branch
```

## Step 2: Check Your Status

```bash
git status
```

## Step 3: Read the Actual Error

Different push errors require different fixes.

### Non-Fast-Forward

The remote branch may contain commits you do not have locally.

Get the latest changes before trying again.

Depending on your workflow, this may involve:

```bash
git pull
```

Resolve any conflicts if they occur.

### Protected Branch

If you are trying to push directly to `main`, repository rules may prevent it.

Instead:

1. create/use a feature branch
2. push the feature branch
3. create a Pull Request

### Permission Denied

Check:

```bash
git remote -v
```

Then verify that:

- the repository URL is correct
- you are signed into the correct GitHub account
- you have access to the repository

:::danger

Do not solve a rejected push by automatically running:

```bash
git push --force
```

:::