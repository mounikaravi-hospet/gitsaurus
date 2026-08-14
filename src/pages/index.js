import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import logo from "@site/static/img/fulllogo.png";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="Gitsaurus"
      description="Git and GitHub help for software development students"
    >
      <main className={styles.home}>
        <div className={styles.logoWrapper}>
          <img
            src={logo}
            alt="Gitsaurus logo"
            className={styles.logo}
          />
        </div>

        <div className={styles.grid}>
          <Link
            className={`card padding--lg ${styles.card} ${styles.smallCard}`}
            to="/docs/setup/create-repository"
          >
            <h2>🚀 Set Up a Project</h2>
            <p>
              Create, fork, clone, or upload a repository and understand Git
              remotes.
            </p>
          </Link>

          <Link
            className={`card padding--lg ${styles.card} ${styles.smallCard}`}
            to="/docs/workflow/pull"
          >
            <h2>🔁 Git & Team Workflow</h2>
            <p>
              Pull, branch, commit, push, create Pull Requests, review, and
              merge.
            </p>
          </Link>

          <Link
            className={`card padding--lg ${styles.card} ${styles.smallCard}`}
            to="/docs/repository-management/branch-protection"
          >
            <h2>⚙️ Repository Management</h2>
            <p>
              Protect main, manage collaborators, use .gitignore, and protect
              secrets.
            </p>
          </Link>

          <Link
            className={`card padding--lg ${styles.card} ${styles.largeCard}`}
            to="/docs/troubleshooting/intro"
          >
            <h2>🚨 Troubleshooting</h2>
            <p>Push rejected? Missing code? Merge conflict? Start here.</p>
          </Link>

          <Link
            className={`card padding--lg ${styles.card} ${styles.largeCard}`}
            to="/docs/commands/status"
          >
            <h2>💻 Command Reference</h2>
            <p>Quickly look up common Git commands and what they do.</p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}