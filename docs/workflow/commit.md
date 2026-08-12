---
sidebar_position: 4
title: Commit Your Changes
---

# Commit Your Changes

A commit records a meaningful set of changes in your Git repository.

Think of a commit as a saved checkpoint in the history of your project.

## Step 1: Check What Changed

Run:

```bash
git status
```

Git may show something like:

```text
Changes not staged for commit:

    modified: src/Login.jsx
    modified: src/Login.css
```

These files have changed, but they have not yet been prepared for a commit.

## Step 2: Review Your Changes

Before committing, it is a good idea to see what actually changed.

Run:

```bash
git diff
```

Review the changes and make sure you are not accidentally committing something you did not intend to change.

## Step 3: Stage Your Changes

You can stage a specific file:

```bash
git add src/Login.jsx
```

Or multiple specific files:

```bash
git add src/Login.jsx src/Login.css
```

You can also stage all current changes:

```bash
git add .
```

:::warning[Be careful with `git add .`]

`git add .` stages everything that has changed in the current directory.

Before using it, run:

```bash
git status
```

and make sure you understand which files will be included.

:::

## Step 4: Check Again

Run:

```bash
git status
```

You should now see the files under:

```text
Changes to be committed:
```

These are the files that will be included in your next commit.

## Step 5: Commit

Run:

```bash
git commit -m "Add login form validation"
```

The message should briefly explain what the commit accomplishes.

## Good Commit Messages

Examples:

```text
Add login form validation
Create user profile component
Fix navbar alignment on mobile
Handle invalid API response
Add tests for payment calculation
```

## Poor Commit Messages

Avoid messages such as:

```text
changes
update
stuff
fixed
work
final
final-final
asdf
```

A useful commit message tells your teammates what changed without requiring them to inspect every file.

## Commit Meaningful Units of Work

Avoid creating one enormous commit containing several unrelated changes.

For example, this:

```text
Add login page, redesign navbar, fix API, update README, change database
```

would be difficult to understand and review.

Prefer separate commits such as:

```text
Add login form
Add login validation
Fix mobile navbar
Handle API authentication error
Update installation instructions
```

:::tip

A commit does not need to represent an entire completed feature.

It should represent a meaningful and understandable checkpoint.

:::

## Did the Commit Reach GitHub?

Not yet.

A commit is stored in your **local repository**.

Conceptually:

```text
Your files
    ↓
 git add
    ↓
Staging area
    ↓
git commit
    ↓
Local Git repository
```

The commit has not been uploaded to GitHub yet.

## Next Step

Continue to [Push Your Branch](./push.md).