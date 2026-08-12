---
sidebar_position: 8
title: Remote Problems
---

# Remote Problems

Remote problems often appear as errors such as:

```text
repository not found
```

```text
permission denied
```

```text
remote origin already exists
```

## Step 1: Check the Remote

```bash
git remote -v
```

## Wrong URL?

Update it:

```bash
git remote set-url origin CORRECT_REPOSITORY_URL
```

## No `origin`?

Add it:

```bash
git remote add origin REPOSITORY_URL
```

## `origin` Already Exists?

Do not add another one.

Inspect:

```bash
git remote -v
```

Then update the existing remote if necessary.

## Repository Not Found?

Check:

- spelling of the owner
- spelling of the repository
- whether the repository is private
- whether you have permission
- which GitHub account you are using

## Test the Connection

Try:

```bash
git fetch
```

If the remote and authentication are correct, Git should be able to contact the repository.