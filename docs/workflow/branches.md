---
sidebar_position: 3
title: Create a Feature Branch
---

# Create a Feature Branch

#### DO NOT make every change directly on `main`.

Instead, create a separate branch for the feature, bug fix, or task you are working on.

## Before Creating a Branch

Make sure you have the latest version of `main`:

```bash
git switch main
git pull
```

Then check:

```bash
git status
```

You should ideally see:

```text
nothing to commit, working tree clean
```

## Step 1: Create the Branch

Run:

```bash
git switch -c feature/your-feature-name
```

For example:

```bash
git switch -c feature/login-page
```

The `-c` means:

> Create a new branch and switch to it.

## Step 2: Verify Your Branch

Run:

```bash
git branch
```

You may see:

```text
  main
* feature/login-page
```

The `*` shows the branch you are currently working on.

## Naming Your Branch

Use names that describe the work being done.

Good examples:

```text
feature/login-page
feature/user-profile
feature/search
fix/navbar-layout
fix/login-validation
```

Avoid names such as:

```text
mybranch
test
new
branch1
mounika
stuff
```

A teammate should be able to understand the purpose of the branch just by reading its name.

## Why Use Feature Branches?

Suppose your team has:

```text
main
```

One student is implementing login:

```text
feature/login
```

Another is implementing search:

```text
feature/search
```

Another is working on the dashboard:

```text
feature/dashboard
```

Conceptually:

```text
                 feature/login
                /
main ──────────●
                \
                 feature/search
```

Each person can work without constantly changing the stable `main` branch.

When a feature is ready, it can be reviewed and merged back into `main`.

:::warning[Do not reuse old feature branches]

Create a new branch for a new task.

Do not keep using one branch for unrelated features throughout the semester.

:::

## Your Workflow So Far

```text
Switch to main
      ↓
Pull latest changes
      ↓
Create feature branch
      ↓
Start working
```

Commands:

```bash
git switch main
git pull
git switch -c feature/your-feature-name
```

## Next Step

Make your changes in the project.

When you have completed a meaningful piece of work, continue to [Commit Your Changes](./commit.md).