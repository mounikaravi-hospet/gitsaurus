---
sidebar_position: 3
title: git commit
---

# `git commit`

`git commit` creates a saved checkpoint in your local Git history.

Before committing, stage the files you want:

```bash
git add .
```

Then commit:

```bash
git commit -m "Add login validation"
```

The text after `-m` is the commit message.

## Good Commit Messages

```text
Add login form validation
Fix navbar alignment
Handle invalid API response
```

Avoid:

```text
update
changes
stuff
final
```

## Check Recent Commits

```bash
git log --oneline -5
```

:::tip

A commit is still only on your computer until you push it to GitHub.

:::