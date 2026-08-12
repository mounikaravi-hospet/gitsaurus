---
sidebar_position: 7
title: Detached HEAD
---

# Detached HEAD

You may see:

```text
You are in 'detached HEAD' state.
```

Normally, `HEAD` points to your current branch.

For example:

```text
HEAD → feature/login
```

In detached HEAD state, `HEAD` points directly to a commit:

```text
HEAD → commit abc123
```

## If You Were Only Looking Around

Switch back to a branch:

```bash
git switch main
```

or:

```bash
git switch feature/login
```

## If You Made Changes You Want to Keep

Before leaving detached HEAD state, create a branch:

```bash
git switch -c feature/save-my-work
```

Now your work is attached to a branch.

:::warning

If you create commits in detached HEAD state and then switch away without preserving them on a branch, those commits may become difficult to find later.

:::