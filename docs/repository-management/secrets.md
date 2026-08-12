---
sidebar_position: 4
title: Protect Secrets
---

# Protect Secrets

Never intentionally commit sensitive credentials to your repository.

Examples include:

- API keys
- passwords
- access tokens
- private keys
- database credentials
- service-account credentials

## Use Environment Variables

Example `.env`:

```env
API_KEY=your-secret-value
DATABASE_PASSWORD=your-password
```

Add:

```gitignore
.env
```

to `.gitignore`.

## Provide an Example File

Instead of committing the real `.env`, you can provide:

```text
.env.example
```

Example:

```env
API_KEY=
DATABASE_PASSWORD=
```

This tells teammates which variables are required without exposing credentials.

## If You Accidentally Commit a Secret

Do not assume deleting the file solves the problem.

1. revoke or rotate the exposed credential
2. stop tracking the file
3. update `.gitignore`
4. determine whether repository history also needs to be cleaned

:::danger

Once a secret has been pushed to GitHub, treat that secret as exposed.

Do not continue using it.

:::