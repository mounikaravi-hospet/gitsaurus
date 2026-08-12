---
sidebar_position: 9
title: git checkout
---

# `git checkout`

`git checkout` is an older, multi-purpose Git command.

It can be used to:

- switch branches
- create and switch to a branch
- restore files from another commit

Because it does several different things, this guide generally prefers the newer commands:

```bash
git switch
```

for branch switching, and:

```bash
git restore
```

for restoring files.

## Switch to an Existing Branch

Older Git instructions may use:

```bash
git checkout main
```

This is equivalent to:

```bash
git switch main
```

## Create and Switch to a New Branch

Older instructions may use:

```bash
git checkout -b feature/login
```

This is equivalent to:

```bash
git switch -c feature/login
```

The `-b` means:

> Create a new branch and switch to it.

## Restore a File

You may also see:

```bash
git checkout -- file.txt
```

This replaces the working copy of `file.txt` with the version from the current commit.

The newer equivalent is:

```bash
git restore file.txt
```

:::danger[Restoring a file can discard work]

If `file.txt` contains uncommitted changes, restoring it can remove those changes.

Check first:

```bash
git diff file.txt
```

:::

## Why Does This Guide Prefer `git switch`?

`git checkout` performs several unrelated tasks.

For beginners:

```bash
git switch
```

clearly means:

> work with branches

while:

```bash
git restore
```

clearly means:

> restore files

This makes the intent of each command easier to understand.

## You Will Still See `checkout`

Do not worry if another tutorial says:

```bash
git checkout feature/login
```

In this guide, you would normally use:

```bash
git switch feature/login
```

Both can switch branches.

## Quick Comparison

| Older Command | Preferred Command |
|---|---|
| `git checkout main` | `git switch main` |
| `git checkout -b feature/login` | `git switch -c feature/login` |
| `git checkout -- file.txt` | `git restore file.txt` |

:::tip

You do not need to avoid `git checkout`.

You should simply understand that newer Git commands split its common responsibilities into `git switch` and `git restore`.

:::