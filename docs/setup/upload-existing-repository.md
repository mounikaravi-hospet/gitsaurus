---
sidebar_position: 2
title: Upload an Existing Local Project
---

# Upload an Existing Local Project/Repository

Use this when you already have a project on your computer and want to put it on GitHub.

## Step 1: Open the Project Folder

```bash
cd path/to/your-project
```

## Step 2: Check Whether Git Is Already Initialized

Run:

```bash
git status
```

If Git says:

```text
fatal: not a git repository
```

initialize Git:

```bash
git init
```

## Step 3: Add a `.gitignore`

Before committing, make sure files that should not be tracked are ignored.

For example:

```gitignore
node_modules/
.env
dist/
build/
```

See the [.gitignore Guide](../repository-management/gitignore.md).

## Step 4: Create the First Commit

```bash
git add .
git commit -m "Initial commit"
```

## Step 5: Create an Empty GitHub Repository

Create a repository on [GitHub](https://github.com/).

For an existing local project, avoid creating additional starter files such as a README unless you intend to reconcile them with your local files.

## Step 6: Connect Your Local Repository

Copy the GitHub repository URL.

Then run:

```bash
git remote add origin YOUR_REPOSITORY_URL
```

For example:

```bash
git remote add origin https://github.com/example/project.git
```

## Step 7: Make Sure the Main Branch Is Named `main`

```bash
git branch -M main
```

## Step 8: Push the Project

```bash
git push -u origin main
```

## Verify

Run:

```bash
git remote -v
```

You should see your GitHub repository listed as `origin`.

Then refresh GitHub and confirm that your project files appear.

:::warning[Remote already exists?]

If you see:

```text
error: remote origin already exists
```

do not add another `origin`.

Run:

```bash
git remote -v
```

and check where the existing remote points.

:::