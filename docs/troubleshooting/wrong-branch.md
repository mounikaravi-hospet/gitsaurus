---
sidebar_position: 5
title: Committed to the Wrong Branch
---

# Committed to the Wrong Branch

You meant to commit your work on a feature branch, but accidentally committed it on another branch, often `main`.

This is usually fixable.

Start by checking where you are:

```bash
git branch
git log --oneline -5
```

`git branch` shows your local branches and marks your current branch with `*`.

`git log --oneline -5` shows the **5 most recent commits** in a compact format:

- `git log` → shows commit history
- `--oneline` → shows each commit on one line
- `-5` → limits the output to the latest 5 commits

Example:

```text
a8c21f4 Add login validation
35d912b Update README
91a7c33 Initial setup
```

The value at the beginning of each line, such as:

```text
a8c21f4
```

is the shortened **commit ID**. You can use that ID later in commands such as:

```bash
git revert a8c21f4
```

Look for:

- the branch with `*`
- the commit you accidentally made

---

# Which Situation Are You In?

## Situation 1: I committed to `main`, but I have NOT pushed it

This is the easiest case.

Suppose your accidental commit is currently on:

```text
main
```

but it should have been on:

```text
feature/login
```

### Step 1: Create the correct branch

While you are still on `main`, run:

```bash
git switch -c feature/login
```

Your commit is now also part of:

```text
feature/login
```

Conceptually:

```text
Before:

main
  ↓
A --- B --- C
          accidental


After creating the branch:

main
  ↓
A --- B --- C
          ↑
     feature/login
```

### Step 2: Move `main` back one commit

Now switch back to `main`:

```bash
git switch main
```

Run:

```bash
git reset --hard HEAD~1
```

Your branches now look like:

```text
main
  ↓
A --- B
       \
        C
        ↑
 feature/login
```

Your work is still safely stored on `feature/login`.

### Step 3: Verify

Run:

```bash
git log --oneline --all --decorate -5
```

You should see your accidental commit attached to your feature branch but not to `main`.

Then switch back to your feature branch:

```bash
git switch feature/login
```

Continue working normally.

:::warning[Only use this when the commit has NOT been pushed]

This solution rewrites your local `main` branch.

Do not use it if the accidental commit has already been pushed to the shared `main` branch.

:::

---

# Situation 2: I committed to `main` AND already pushed it

Do **not** use:

```bash
git reset --hard
git push --force
```

on shared `main`.

Instead, preserve the work on a feature branch and undo it from `main` using a new commit.

### Step 1: Create a feature branch containing your work

If you are currently on `main`:

```bash
git switch -c feature/login
```

Your feature branch now contains the accidental commit.

### Step 2: Find the accidental commit

Run:

```bash
git log --oneline -5
```

You may see:

```text
a8c21f4 Add login validation
35d912b Update README
91a7c33 Initial setup
```

Copy the commit ID of the accidental commit.

For example:

```text
a8c21f4
```

### Step 3: Return to `main`

```bash
git switch main
```

### Step 4: Revert the accidental commit

Run:

```bash
git revert a8c21f4
```

Git creates a **new commit** that reverses the accidental changes.

This is safer for a shared branch because it does not rewrite existing history.

### Step 5: Push the correction

```bash
git push
```

Now:

- `main` no longer contains the accidental change
- the feature branch still contains your work
- shared Git history remains intact

Conceptually:

```text
main

A --- B --- C --- D
          ↑     ↑
       mistake  revert


feature/login

A --- B --- C
          ↑
       your work
```

You can now continue working from:

```bash
git switch feature/login
```

---

# Situation 3: I have changes on the wrong branch, but I have NOT committed them yet

This is different.

Run:

```bash
git status
```

If your changes are not committed, you may be able to create the correct branch immediately:

```bash
git switch -c feature/login
```

Your uncommitted changes normally move with you to the new branch.

Then verify:

```bash
git status
```

Commit the changes on the correct branch:

```bash
git add .
git commit -m "Add login validation"
```

---

# Situation 4: Git will not let me switch branches because of my changes

You may see something like:

```text
Your local changes would be overwritten by checkout
```

Temporarily save your changes:

```bash
git stash
```

Switch to the correct branch:

```bash
git switch feature/login
```

or create it:

```bash
git switch -c feature/login
```

Then restore your changes:

```bash
git stash pop
```

Check:

```bash
git status
```

and continue working.

---

# Quick Decision Guide

```text
Did you commit the changes?
        |
       / \
     NO   YES
     |      |
Create/    Did you push?
switch     |
to the    / \
correct  NO  YES
branch   |     |
        Create   Create feature branch
        feature  ↓
        branch   Revert commit on main
        ↓
        Reset
        local
        main
```

---

# Most Common Case

If you:

1. accidentally committed to `main`
2. did **not** push

use:

```bash
git switch -c feature/your-feature
git switch main
git reset --hard HEAD~1
git switch feature/your-feature
```

If you:

1. accidentally committed to `main`
2. **already pushed**

use:

```bash
git switch -c feature/your-feature
git switch main
git log --oneline -5
git revert COMMIT_ID
git push
git switch feature/your-feature
```

:::danger[Do not force push shared `main`]

Never fix this by running:

```bash
git push --force
```

on your team's shared `main` branch.

If your situation does not match any of the cases above, stop before changing history and ask your TA or instructor.
:::