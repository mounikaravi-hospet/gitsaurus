---
sidebar_position: 11
title: git stash
---

# `git stash`

`git stash` temporarily saves uncommitted changes so you can work with a clean working tree.

## Save Current Changes

```bash
git stash
```

Your modified tracked files are temporarily set aside.

## See Saved Stashes

```bash
git stash list
```

Example:

```text
stash@{0}: WIP on main
```

## Restore the Latest Stash

```bash
git stash pop
```

This restores the changes and removes that stash entry.

## Restore Without Removing the Stash

```bash
git stash apply
```

## Common Use

You accidentally started working on `main`:

```bash
git stash
git switch feature/login
git stash pop
```

:::warning

By default, untracked files may not be included.

If you need them included:

```bash
git stash -u
```

:::