---
sidebar_position: 9
title: git merge
---

# `git merge`

`git merge` combines another branch into your current branch.

## Example

Suppose you are on:

```text
main
```

and want to merge:

```text
feature/login
```

Run:

```bash
git switch main
git merge feature/login
```

Conceptually:

```text
feature/login
       \
main ----\---- merged result
```

## If Git Finds a Conflict

You may see:

```text
CONFLICT (content)
```

Resolve the conflicting files, then:

```bash
git add path/to/file
git commit
```

See the [Merge Conflict Guide](../troubleshooting/merge-conflict.md).

:::tip

In team repositories, you may do most merges through GitHub Pull Requests instead of manually running `git merge`.

:::