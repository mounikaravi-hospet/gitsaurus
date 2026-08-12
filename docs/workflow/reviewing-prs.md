---
sidebar_position: 6
title: Review a Pull Request
---

# Review a Pull Request

Pull Request reviews are an important part of team development.

Do not approve a PR simply because it belongs to your teammate.

## Step 1: Understand the Purpose

Read:

- the PR title
- the description
- linked issues or tasks

Ask:

> What is this change supposed to accomplish?

## Step 2: Review the Files

Open **Files changed**.

Look for:

- incorrect logic
- accidental changes
- duplicate code
- missing error handling
- unclear naming
- debugging code
- exposed credentials
- unrelated changes

## Step 3: Test When Appropriate

Pull the branch locally or use the project's available testing process.

Check that:

- the feature works
- existing functionality still works
- tests pass

## Step 4: Leave Useful Feedback

Instead of:

```text
This is wrong.
```

prefer:

```text
Could this condition also handle the case where the API returns an empty response?
```

## Step 5: Choose a Review

GitHub allows reviewers to:

- comment
- approve
- request changes

Use the option that matches your review.

:::tip

Code review is not just about finding mistakes.

It is also about helping the team understand and maintain the code.

:::

## Next Step

Once the PR is ready:

[Merge the Pull Request](./merge.md)