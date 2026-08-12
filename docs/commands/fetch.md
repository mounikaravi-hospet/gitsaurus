---
sidebar_position: 2
title: git fetch
---

# `git fetch`

Use:

```bash
git fetch
```

to download information about remote commits and branches without automatically merging them into your current branch.

## Example

```bash
git fetch origin
```

For a fork:

```bash
git fetch upstream
```

## Fetch vs Pull

Conceptually:

```text
git fetch
Remote → Local Git information
```

while:

```text
git pull
Remote → Fetch + integrate into current branch
```

Use `fetch` when you want to inspect remote changes before integrating them.