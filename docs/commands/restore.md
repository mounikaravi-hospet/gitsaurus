---
sidebar_position: 12
title: git restore
---

# `git restore`

`git restore` is used to restore file contents or remove files from the staging area.

## Unstage a File

If you ran:

```bash
git add file.txt
```

by mistake:

```bash
git restore --staged file.txt
```

The file remains modified, but it is no longer staged.

## Discard Changes in a File

```bash
git restore file.txt
```

:::danger[This can discard work]

If the file contains uncommitted changes, this restores the file to its last committed version.

Those changes may be lost.

Check:

```bash
git diff file.txt
```

before using it.

:::