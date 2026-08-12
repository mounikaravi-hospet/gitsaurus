---
sidebar_position: 4
title: git remote
---

# `git remote`

Git remotes are saved references to other repositories.

## View Remotes

```bash
git remote -v
```

## Add a Remote

```bash
git remote add origin REPOSITORY_URL
```

## Add an Upstream Repository

```bash
git remote add upstream ORIGINAL_REPOSITORY_URL
```

## Change a Remote URL

```bash
git remote set-url origin NEW_URL
```

## Remove a Remote

```bash
git remote remove REMOTE_NAME
```

:::warning

Before changing or removing a remote, run:

```bash
git remote -v
```

and make sure you understand what the existing remote points to.

:::