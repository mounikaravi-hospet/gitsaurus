---
sidebar_position: 5
title: Push Your Branch
---

# Push Your Branch

After committing your work locally, push your branch to GitHub so your teammates can access it.

## Step 1: Check Your Branch

Run:

```bash
git branch
```

Make sure you are on the branch containing your work.

For example:

```text
  main
* feature/login-page
```

## Step 2: Check Your Repository

Run:

```bash
git status
```

You may see:

```text
nothing to commit, working tree clean
```

This means your changes have been committed.

## Step 3: Push the Branch

The first time you push a new branch, run:

```bash
git push -u origin feature/login-page
```

Replace:

```text
feature/login-page
```

with the name of your branch.

For example:

```bash
git push -u origin feature/user-profile
```

## What Does `-u` Do?

The `-u` connects your local branch to the corresponding branch on GitHub.

After that connection has been established, future pushes from the same branch can usually be done with:

```bash
git push
```

So:

### First push

```bash
git push -u origin feature/login-page
```

### Later pushes

```bash
git push
```

## What Just Happened?

Before pushing:

```text
Your Computer

main
 └── feature/login-page
        └── your commits
```

After pushing:

```text
Your Computer              GitHub

feature/login-page   →   feature/login-page
```

Your branch and commits are now available on GitHub.

## Verify on GitHub

Open your repository in GitHub.

You should be able to find your branch in the branch selector.

GitHub may also display a message such as:

```text
Compare & pull request
```

That means GitHub recognizes that your branch contains changes that are not yet in `main`.

:::danger[Do not force push]

Do not use:

```bash
git push --force
```

or:

```bash
git push -f
```

in a shared team repository unless your instructor or TA specifically tells you to.

Force pushing can overwrite Git history and potentially remove your teammates' work.

:::

## If Your Push Is Rejected

You may see an error such as:

```text
! [rejected]
error: failed to push some refs
```

Do **not** immediately force push.

Go to the [Push Rejected Guide](../troubleshooting/push-rejected.md).

## Is Your Work Now in `main`?

No.

Pushing your feature branch uploads the branch to GitHub:

```text
feature/login-page
```

but your changes have **not yet been merged into**:

```text
main
```

Your team should review the changes before they become part of `main`.

## Next Step

The next step is to create a **Pull Request** so your team can review and merge your work.

Continue to the [Pull Request Guide](./pull-requests.md).