---
sidebar_position: 4
title: Cannot See Conflict Markers
---

# Cannot See Conflict Markers

Git says you have a merge conflict, but when you open the file you cannot find:

```text
<<<<<<< HEAD
=======
>>>>>>> branch-name
```

This can happen when Git does not recognize the file as a normal text file.

One common cause is the file's **text encoding**.

## First: Confirm That Git Sees a Conflict

Run:

```bash
git status
```

You may see something similar to:

```text
both modified:   path/to/file
```

or:

```text
Unmerged paths:
```

If Git lists the file as conflicted but you cannot see conflict markers inside the file, continue below.

---

## Check Whether Git Thinks the File Is Binary

During the merge, Git may have displayed something similar to:

```text
warning: Cannot merge binary files
```

or:

```text
CONFLICT (content): Merge conflict in ...
```

In some cases, a file that looks like ordinary text to you may still be treated as binary by Git.

A common example is a file saved using **UTF-16** encoding.

---

## UTF-8 vs UTF-16

Most source-code files should normally be stored as UTF-8.

For example:

```text
UTF-8
```

A file may accidentally have been saved as:

```text
UTF-16 LE
```

or:

```text
UTF-16 BE
```

UTF-16 files commonly contain byte patterns that cause Git to classify them as binary.

When Git treats the file as binary, it may not insert the normal:

```text
<<<<<<<
=======
>>>>>>>
```

conflict markers.

---

## Check the Encoding in VS Code

Open the conflicted file in VS Code.

Look at the bottom-right corner of the VS Code window.

You may see something such as:

```text
UTF-8
```

or:

```text
UTF-16 LE
```

If the file says `UTF-16`, this may be the reason you cannot see normal conflict markers.

---

## Convert the File to UTF-8

In VS Code:

1. Open the file.
2. Click the encoding shown in the bottom-right corner.
3. Select **Save with Encoding**.
4. Choose:

```text
UTF-8
```

:::warning[Do not choose "Reopen with Encoding" when converting]

**Reopen with Encoding** changes how VS Code interprets the existing file.

**Save with Encoding** actually converts and saves the file using the selected encoding.

If your goal is to permanently convert the file from UTF-16 to UTF-8, use **Save with Encoding**.

:::

---

## Be Careful During an Active Merge

Changing the encoding does not automatically resolve the actual code conflict.

The two versions of the file may still contain different changes that must be reconciled.

Before modifying anything further, inspect the versions involved in the conflict.

You can see your current version with:

```bash
git show :2:path/to/file
```

and the incoming version with:

```bash
git show :3:path/to/file
```

:::tip[What are `:2` and `:3`?]

During a merge conflict:

```text
:2 = your version
:3 = incoming version
```

This can be useful when Git cannot display the conflict normally inside the file.

:::

---

## Another Option: Use VS Code's Merge Editor

VS Code may recognize that the file is conflicted even when the normal conflict markers are not obvious.

Open **Source Control** and look under:

```text
Merge Changes
```

Select the conflicted file.

If available, choose:

```text
Open in Merge Editor
```

This can show the two versions separately and help you decide what the final file should contain.

---

## After Resolving the File

Once you have:

1. converted the file to the correct encoding if necessary
2. reviewed both versions
3. created the correct final version

stage the resolved file:

```bash
git add path/to/file
```

Then check:

```bash
git status
```

If all conflicts are resolved, complete the merge as instructed by Git.

---

## Prevent This Problem

For source-code projects, team members should generally use the same encoding.

A good default is:

```text
UTF-8
```

In VS Code, you can check a file's encoding in the bottom-right corner.

Your team should avoid having one person save source files as UTF-16 while everyone else uses UTF-8.

:::tip[Repository-wide consistency]

Encoding differences can create confusing Git diffs and merge conflicts even when the visible code looks almost identical.

Using UTF-8 consistently across the project helps avoid these problems.

:::

---

## Still Cannot Find the Conflict?

Run:

```bash
git status
```

and check exactly which files Git considers conflicted.

Then check:

```bash
git diff
```

If Git still treats the file as binary or the conflict is unclear, do **not** start running reset or force commands.

Ask your instructor or TA before changing the repository history.