---
sidebar_position: 6
title: Missing Teammate Changes
---

# Missing Teammate Changes

Your teammate says they changed or pushed code, but you cannot see it.

Do not start copying files manually. Work through these checks in order.

## Step 1: Are You Both Using the Same Repository?

Run:

```bash
git remote -v
```

You should both see the same repository URL for `origin`.

Example:

```text
origin  https://github.com/team/project.git (fetch)
origin  https://github.com/team/project.git (push)
```

If your teammate is pushing to a different repository or fork, their changes will not automatically appear in yours.

---

## Step 2: Did Your Teammate Actually Push?

A commit can exist only on your teammate's computer.

Ask them to run:

```bash
git status
```

They may see something like:

```text
Your branch is ahead of 'origin/feature/login' by 2 commits.
```

That means the commits have **not been pushed yet**.

They should run:

```bash
git push
```

Then continue below.

---

## Step 3: Which Branch Did They Push To?

Ask your teammate for the branch name.

For example:

```text
feature/login
```

On your computer, run:

```bash
git fetch
```

`git fetch` downloads updated information about branches and commits from GitHub without changing your current files.

Then run:

```bash
git branch -a
```

You may see:

```text
* main
  remotes/origin/feature/login
```

If the changes are on:

```text
origin/feature/login
```

but you are looking at:

```text
main
```

you will not see those changes yet.

---

## Step 4: Was the Pull Request Merged?

A pushed feature branch is **not the same thing as code being in `main`**.

The workflow is:

```text
feature/login
      ↓
Push
      ↓
GitHub feature branch
      ↓
Pull Request
      ↓
Merge
      ↓
main
```

Open GitHub and check the Pull Request.

If the PR is still open, the changes are not yet part of `main`. GitHub treats the head branch and base branch as separate until the PR is merged. :contentReference[oaicite:1]{index=1}

---

## Step 5: The PR Was Merged, but I Still Cannot See the Changes

Update your local `main`:

```bash
git switch main
git pull
```

Then check:

```bash
git log --oneline -5
```

Look for your teammate's merged commit.

---

## Step 6: Are You Tracking the Branch You Think You Are?

Run:

```bash
git branch -vv
```

This shows your local branches and which remote branches they track.

Example:

```text
* main  abc1234 [origin/main] Merge login feature
```

You normally want your local `main` to track:

```text
origin/main
```

Git uses this tracking relationship when deciding what a plain `git pull` should fetch and integrate. :contentReference[oaicite:2]{index=2}

---

## Step 7: Did Your Teammate Actually Commit the File?

Your teammate may have changed a file without including it in the commit.

Ask them to run:

```bash
git status
```

If the file appears under:

```text
Changes not staged for commit
```

or:

```text
Untracked files
```

then it was never included in the pushed commit.

They need to stage and commit it:

```bash
git add path/to/file
git commit -m "Add missing file"
git push
```

---

## Step 8: Is the File Being Ignored?

If the missing file never appears in Git, check:

```bash
git status
```

and:

```bash
git check-ignore -v path/to/file
```

If Git reports a `.gitignore` rule, the file may have been intentionally excluded.

Common examples:

```text
.env
node_modules/
build/
dist/
```

:::warning

Files such as `.env` should usually remain ignored because they may contain secrets.

Do not remove them from `.gitignore` simply because they are missing from GitHub.

:::

---

## Step 9: Was the File Renamed or Deleted?

Update your repository:

```bash
git fetch
```

Then inspect recent history:

```bash
git log --oneline --all -10
```

You can also check changes to a specific file:

```bash
git log -- path/to/file
```

The file may have been renamed or intentionally deleted in a newer commit.

---

## Step 10: Are You Using a Fork?

If your team works from a fork, check:

```bash
git remote -v
```

You may have:

```text
origin
upstream
```

Your teammate may have pushed changes to `origin`, while you are expecting them from `upstream`, or vice versa.

See [Understand Git Remotes](../setup/remotes.md).

---

## Less Common Cases

### Sparse Checkout

A repository can be configured so only part of its files are placed in your working directory.

Check:

```bash
git sparse-checkout list
```

If sparse checkout is enabled, some tracked files may intentionally not appear locally. Git documents sparse checkout as a way to populate only a subset of tracked paths in the working tree. :contentReference[oaicite:3]{index=3}

### Submodules

If the project uses Git submodules, the main repository may contain only a reference to another repository.

Run:

```bash
git submodule status
```

If submodules are present, initialize/update them with:

```bash
git submodule update --init --recursive
```

---

# Quick Checklist

If teammate changes are missing, check:

```text
Same repository?
      ↓
Did teammate commit?
      ↓
Did teammate push?
      ↓
Correct branch?
      ↓
git fetch
      ↓
Was PR merged?
      ↓
git switch main
git pull
      ↓
Still missing?
      ↓
Check tracking branch / ignored files / forks
```

:::tip

The three most common causes are:

1. teammate never pushed
2. teammate pushed to a feature branch that was not merged
3. your local `main` has not been pulled

Start there before investigating anything more complicated.
:::