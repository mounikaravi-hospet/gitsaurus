---
sidebar_position: 1
title: Add Collaborators
---

# Add Collaborators

Your teammates need appropriate access to the repository before they can collaborate.

## Organization Repository

If the repository belongs to a GitHub organization, access may be managed through:

- organization membership
- GitHub teams
- repository access settings

## Check Repository Access

Open:

```text
Repository
→ Settings
→ Collaborators / Access
```

The exact wording may vary depending on repository ownership and organization settings.

## Give Only the Access Needed

Team members who need to push branches and contribute code generally need write-level access.

Avoid giving administrative access unless it is actually necessary.

## Verify

Have each team member confirm that they can:

- view the repository
- clone it
- create/push an allowed branch
- open Pull Requests

:::warning

Repository access and branch rules are different things.

A student may have write access to the repository while still being prevented from directly pushing to protected `main`.

:::