---
sidebar_position: 5
title: git push
---

# `git push`

`git push` uploads your local commits to a remote repository such as GitHub.

## Push an Existing Tracking Branch

```bash
git push
```

## First Push of a New Branch

```bash
git push -u origin feature/login
```

The `-u` connects your local branch to the remote branch.

After that, you can usually run:

```bash
git push
```

## Important

`git push` sends committed changes.

If you changed files but did not commit them, pushing will not upload those changes.

Check:

```bash
git status
```

:::danger[Do not force push shared branches]

Avoid:

```bash
git push --force
```

on shared branches such as `main`.

It can rewrite remote history.

:::