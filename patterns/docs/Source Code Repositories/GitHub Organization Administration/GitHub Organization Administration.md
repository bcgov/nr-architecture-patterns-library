---
sidebar_position: 1
---
<table class="wrapped"><colgroup class=""></colgroup><tbody class=""><tr class=""><th>Status</th><td><div class="content-wrapper"><p>Document</p></div></td></tr><tr class=""><th>Stakeholders</th><td>NRIDS Architecture, FDS</td></tr><tr class=""><th>Description</th><td>The purpose of this page is to outline practices when managing GitHub Org Administration</td></tr><tr class=""><th>Outcome</th><td>Consistent point of reference for onboarding new product teams into the NRM's.</td></tr><tr class=""><th>Owner</th><td>NRIDS Architecture, FDS</td></tr></tbody></table>

Participants
============

*   Administrators
    *   Application Delivery Team
    *   with support of:
        *   1Team
        *   Derek Roberts
        *   Om Mishra
        *   engagement/communication specialists
        *   security specialists
*   Audience
    *   developers
    *   designers
    *   devops specialists
    *   product owners
    *   internal staff

*   Advisors – OCIO, Jeff Card, Adam Dewey, Michelle Douville

Costs
=====

*   NRIDS will proceed with a Github Teams License for the BCGOV-NR tenancy [https://github.com/bcgov-nr](https://github.com/bcgov-nr)
*   NRIDS Architecture will continue to engage with OCIOs Platform Services team on their negotiations with Github Enterprise.
*   Currently, February 2024, there are less than 30 participants in the tenancy and include developers, vendors and internal staff of Team Epsilon, 1Team, DBAs, Application Deliveries, AOT and CGI.
*   [https://github.com/pricing](https://github.com/pricing)

Components of Github Organization Administration
================================================

*   Organization Structure & Access Control
    ---------------------------------------
    

Organization Structure

   - Define a clear organizational structure with teams based on projects or functions.

   - Assign appropriate permissions to teams and members to control access.

Access Control

   - Regularly review and update access permissions.

   - Implement branch protection rules to safeguard critical branches.

License Management

    - Clearly specify and manage licenses for each repository.

    - Regularly review and update licenses as needed.

*   Repository Management
    ---------------------
    

Repositories and Branching

   - Create repositories for each project or component.

   - Establish a branching strategy (e.g., Gitflow) for a structured development process.

Issue Tracking

   - Utilize GitHub Issues for tracking tasks, bugs, and enhancements.

   - Establish labeling conventions for better categorization.

Backups and Recovery

    - Regularly back up repositories and related data.

    - Establish a recovery plan in case of accidental data loss or compromise.

*   Code Review Process & Security
    ------------------------------
    

Code Review Process

   -  Implement a code review process to maintain code quality.

   - Require reviews before merging, and use pull request templates.

Security Measures

   - Regularly scan code for vulnerabilities using GitHub code scanning.

   - Implement Dependabot for automated dependency updates.

*   Automation and CI/CD
    --------------------
    
       - Set up continuous integration and continuous deployment (CI/CD) pipelines.
    
       - Use GitHub Actions or other CI/CD tools to automate testing and deployment processes.
    
*   Documentation, Collaboration & Community
    ----------------------------------------
    

Documentation

   - Maintain comprehensive README files for each repository.

   - Utilize GitHub Wiki for extensive documentation on larger projects.

Collaboration and Communication

   - Encourage collaboration through discussion in issues and pull requests.

   - Use GitHub Discussions for broader conversations within the organization.

Training and Onboarding

    - Provide training sessions for new members on GitHub workflows.

    - Maintain a detailed onboarding guide for new contributors.

Community Guidelines

    - Establish and communicate community guidelines for contributors.

    - Enforce a code of conduct to ensure a positive and inclusive environment.

*   Monitoring and Auditing
    -----------------------
    

    - Use GitHub Insights to monitor repository activity and contributions.

    - Analyze metrics to identify areas for improvement in development processes.

Regular Audits

    - Conduct periodic audits of repositories, permissions, and workflows.

    - Address any issues or improvements identified during audits.

Ie. Script a monthly mail out to Github Team administrators to review team memberships they own.

Ie. Script compliance to metadata standards (readme/pubcode) 

References
==========

[https://stackify.com/managing-teams-github/](https://stackify.com/managing-teams-github/)

[GitHub in BC Government - RC1.pdf](https://bcgov.sharepoint.com/:b:/t/03678/EYd__CQ_OflDiaukjBDrYp8BsnA5RXqqQEde9IVQR_qM8w?e=HjAJaY)

[https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/github-enterprise-user-licenses-bc-government/)