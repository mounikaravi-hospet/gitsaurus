---
sidebar_position: 5
title: Create a Pull Request
---

# Create a Pull Request

A Pull Request, or **PR**, asks your team to review changes before merging them into another branch.

Typical workflow:

```text
feature branch
↓
Pull Request
↓
Review
↓
Merge
↓
main
```

## Step 1: Push Your Branch

Make sure your branch is on GitHub.

```bash
git push
```

## Step 2: Open GitHub

Open your repository.

GitHub may show:

**Compare & pull request**

Click it.

Otherwise:

1. Open **Pull requests**
2. Click **New pull request**

## Step 3: Check the Branches

The target should usually be:

```text
base: main
```

and the branch containing your work should be:

```text
compare: feature/your-feature
```

## Step 4: Add a Clear Title

Good:

```text
Add login form validation
```

Avoid:

```text
PR
changes
done
```

## Step 5: Describe the Changes

Briefly explain:

- what changed
- why it changed
- anything reviewers should test
- any known limitations

## Step 6: Create the Pull Request

Click **Create pull request**.

:::warning

Opening a Pull Request does **not** automatically put your code into `main`.

The PR must still be reviewed and merged.

:::

## Next Step

[Review a Pull Request](./reviewing-prs.md)