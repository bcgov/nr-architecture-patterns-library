---
sidebar_position: 3
---
<table class="wrapped relative-table"><colgroup></colgroup><tbody><tr><th>Status</th><td><div class="content-wrapper"><p>GreenPublished</p></div></td></tr><tr><th>Overview</th><td><div class="content-wrapper"><p>The purpose of this page is to outline practices when using GitHub as your source code repository</p></div></td></tr></tbody></table>

Removing Sensitive Data from a GitHub Repo, How To#
===================================================

**[https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)**

Please make sure to follow those instructions carefully, as simply deleting the content will not remove it completely from the repository commit history.

Repository Setup
================

> It is recommended to have product-based monorepos

The below options are found under settings

Branch Protection
=================

Create at least 1 branch protection rule for your "main" branch that;

*   Forces an approval before merging to your "main" branch
    *   An approver should be someone able to understand the code changes and has the authority to approve code changes and pipeline activities associated with a PR Merge (Eg. Data Custodian and Test/Prod deployments)

Note: Admins can bypass this

*   Enforces status checks to be passed before merging, this should include;
    *   SonarCloud (vulnerability, code coverage)
    *   Code scanning (Trivy, Snyk, CodeQL)
    *   Builds
    *   Deployments
    *   Route verification (up/down, penetration testing)
*   Note: checks need to have been run once to populate the drop-down

(Ensure you select your options below when enabling the rule)

*   Ensures branches are up to date before merging

Manage Your Administrators
==========================

*   Have at least 1 backup administrator
*   Have as few admins as possible, most developers will not need to be an admin

Manage Your Team
================

*   Create a Team in GitHub and Manage the permission in the team. ([https://github.com/orgs/bcgov/teams](https://github.com/orgs/bcgov/teams))
*   This way if the single team is working on multiple products, authorization will be easier to manage and tracking will be easier.
*   All team names shall be prefixed by `nr-` .
*   Team names shall be suffixed by `-devops` if it is designed to be administrative in nature. This should only contain Product Owners/Mangers, Devops Specialists and Technical Leads .
*   All team names shall be lowercase, and use `dashes` for `spacing` (_do not use spaces or underscores, or other non-ASCII characters_)
*   Team name descriptors should attempt to preserve hierarchical team specificity where relevant.
*   GitHub teams does not have to be nested into other existing GitHub teams; they should depend on naming convention and be `top level` .
*   Team name acronyms should match formal team names where possible.

Manage Your Code Owners
=======================

*   Add a CODEOWNERS file under the /.github directory
*   Add this rule to your main branch protection to ensure PRs are reviewed by code owner

Setup Your Pull Request Repository Settings (Very Useful to Help Ensure Guidelines are Followed)
================================================================================================

*   Use squash merging to keep histories clean
    *   We recommend using pull request titles
*   Suggest updating pull requests
    *   Being up to date is required (see above)
    *   Selecting this will add an easy update button to PRs
*   Automatically delete head branches, which are merged feature branches
    *   Excessive numbers of branches can degrade performance and increase clone times
    *   Long lived-branches are strongly discouraged

For additional PR, Pipeline, and Deployment practices: See

Create Repository Documentation
===============================

*   Create a meaningful Readme.md, see [https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Gov-Org-HowTo/SAMPLE-README.md](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Gov-Org-HowTo/SAMPLE-README.md)
*   Add a license and other required documentation, see [https://docs.developer.gov.bc.ca/required-pages-for-github-repository/](https://docs.developer.gov.bc.ca/required-pages-for-github-repository/)
*   Make use of the GitHub Wiki
    *   The GitHub Wiki provides version controlled documentation that multiple people can edit and does not require technical expertise
    *   If you're going to use the Wiki make sure you add a reference to it in your Readme.md
*   Create a reference in confluence to your repository and documentation

GitHub Wiki - Suggestions of What to Add
========================================

*   Points of Contact
*   How-To's:
    *   Running Locally
    *   Developer Practices
    *   Coding Practices
    *   Ticket management
    *   Backup and restore
*   Application process flows

Handle Your Secrets and Environment Variables
=============================================

See