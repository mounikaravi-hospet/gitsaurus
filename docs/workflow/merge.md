---
sidebar_position: 7
title: Merge Changes
---

# Merge Changes

Once a Pull Request has been reviewed and is ready, its changes can be merged into `main`.

## Before Merging

Check that:

- the intended files are included
- required reviews are complete
- conflicts are resolved
- required tests or checks pass

## Merge the Pull Request

On GitHub, use the merge option allowed by your repository settings.

After the merge, the feature branch is no longer needed for normal development.

## Delete the Feature Branch

You can usually delete the remote feature branch after it has been successfully merged.

This helps keep the repository clean.

## Update Your Local `main`

After the PR is merged:

```bash
git switch main
git pull
```

Your local `main` now includes the merged changes.

## Start New Work

Create a new branch from the updated `main`:

```bash
git switch -c feature/new-feature
```

:::warning

Do not keep adding unrelated work to a branch whose Pull Request has already been merged.

Start a new branch.

:::