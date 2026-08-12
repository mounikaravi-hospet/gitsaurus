---
sidebar_position: 4
title: Clone a Repository
---

# Clone a Repository

Cloning downloads a GitHub repository to your computer.

You usually need to clone a repository only once.

## Step 1: Copy the Repository URL

On GitHub:

1. Open the repository
2. Click **Code**
3. Copy the HTTPS URL

It will look similar to:

```text
https://github.com/organization/project.git
```

## Step 2: Open a Terminal

Navigate to the folder where you want to store the project.

Example:

```bash
cd Documents
```

## Step 3: Clone

```bash
git clone YOUR_REPOSITORY_URL
```

Example:

```bash
git clone https://github.com/organization/project.git
```

## Step 4: Enter the Project Directory

```bash
cd project
```

## Step 5: Verify

```bash
git status
```

You should see information about your current branch and working tree.

You can also check the GitHub connection:

```bash
git remote -v
```

## Next Step

When you return to the project later, you do **not** clone it again.

Instead, use:

[Get the Latest Team Code](../workflow/pull.md)