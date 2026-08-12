---
sidebar_position: 3
title: Use .gitignore
---

# Use `.gitignore`

A `.gitignore` file tells Git which untracked files or folders should normally be ignored.

Create:

```text
.gitignore
```

in the root of your repository.

## Example for a JavaScript Project

```gitignore
node_modules/
.env
dist/
build/
.DS_Store
```

## Common Things to Ignore

Examples include:

- dependency folders
- build output
- environment files
- temporary files
- IDE-specific files
- operating-system metadata

## Important: Already Tracked Files

Adding something to `.gitignore` does not automatically stop tracking a file that has already been committed.

For example, if `.env` is already tracked:

```bash
git rm --cached .env
```

Then commit the change:

```bash
git commit -m "Stop tracking environment file"
```

:::warning

Removing a secret from the latest commit does not necessarily remove it from Git history.

If credentials were exposed, treat them as compromised and rotate them.

:::

## Next

See: [Protect Secrets](./secrets.md)