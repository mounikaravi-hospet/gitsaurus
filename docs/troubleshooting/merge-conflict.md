---
sidebar_position: 3
title: Merge Conflict
---

# Merge Conflict

A merge conflict occurs when Git cannot automatically determine how competing changes should be combined.

You may see:

```text
CONFLICT (content): Merge conflict in src/App.js
```

## Step 1: Check the Conflict

```bash
git status
```

Git will list conflicted files.

## Step 2: Open the File

You may see markers similar to:

```text
<<<<<<< HEAD (Current Change)
const port = 3000;
=======
const port = 5000;
>>>>>>> feature/api (Incoming Change)
```

These markers show competing versions of the same area.

Sometimes you might not see the conflict markers. Check out [Cannot See Conflict Markers](./cannot-see-conflict-markers.md)

## Step 3: Decide What the Final Code Should Be

Do not simply choose one side because it looks newer.

Understand both changes.

The final file should contain the correct intended code and **none** of the conflict markers.

For example:

```js
const port = 5000;
```

## Step 4: Stage the Resolved File

```bash
git add src/App.js
```

## Step 5: Finish the Merge

After all conflicts are resolved:

```bash
git commit
```

or follow the instructions Git provides for the operation you were performing.

## Step 6: Check

```bash
git status
```

:::warning

A merge conflict is a code decision, not just a Git problem.

If two teammates changed the same logic, communicate before deciding which version should remain.

:::