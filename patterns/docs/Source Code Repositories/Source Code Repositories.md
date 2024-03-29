---
sidebar_position: 2
---
<table class="wrapped"><colgroup class=""></colgroup><tbody class=""><tr class=""><th>Status</th><td><div class="content-wrapper"><p>Document</p></div></td></tr><tr class=""><th>Stakeholders</th><td>NRIDS Architecture</td></tr><tr class=""><th>Description</th><td>General guidance and recommendations for source code repositories</td></tr><tr class=""><th>Owner</th><td>NRIDS (Architecture)</td></tr></tbody></table>

### Source Code Repository Types

| 
Repository Type

 | 

When to Use

 | 

Key Contacts

 | 

Notes

 |
| --- | --- | --- | --- |
| Subversion | Never |  | Subversion is deprecated, do not create any new repositories. |
| BitBucket | Closed, internal |  | Manual, complex, (currently) in-house. Works with RFC/RFD process and JIRA. Very customizable. |
| Github | Whenever possible |  | 

Ideal for automation, open source. Industry leader in most significant areas. Very unconstrained.

see [https://github.com/bcgov/BC-Policy-Framework-For-GitHub](https://github.com/bcgov/BC-Policy-Framework-For-GitHub)

 |

**GitHub**:

*   Predominant SCM system used in BC Government
*   Free code repositories for open source projects
*   Free GitHub Actions for open source projects
*   Marketplace provides an incredible amount of[technologies and services](https://github.com/marketplace)
*   Free container registry (\*within GitHub Actions)
    *   Images can be consumed by OpenShift/Kubernetes, AWS, Azure, Podman/Docker and more
*   Biggest code repository system
    *   Highest visibility, globally and locally
    *   Largest developer ecosystem
    *   Largest reach for talent
    *   Largest base for tooling and 3rd party app support
*   Functions as a live resume for developers
*   System for templating and [starting projects quickly](https://github.com/bcgov/greenfield-template)
*   Content is easily discovered by public search (e.g. Google)
*   Open source content is readily available, login-free
*   Visibility encourages collaboration and discourages undesirable behavior
*   Sensible patterns prevent code from being deployed to production, but not merged
*   Versatility allows teams to tailor their processes, increasing productivity

For practices on using GitHub see:

**BitBucket**:

*   JIRA integration
*   Connections are stronger between teams and interal processes, e.g. RFC/RFD
*   Fine-grained control, e.g.:
    *   Prevent even repo administrators from merging code or side-stepping requirements
    *   Asphyxiate contractors with red tape until code is abandoned and/or overwritten
*   Currently on-premise, working Jenkins and minimal firewall/networking changes
*   Potential shift to cloud will require similar admin and network changes to GitHub

**Subversion (SVN)**:

*   Lessened need to retrain on legacy projects, some are comfortable/familiar

### Source Code Repository Naming

*   Github: prefix each repository with "nr-"
    *   e.g. nr-(app-name), replace the (app-name) with actual application/product name.
    *   e.g. nr-fom-api

### Diagrams

*   All repositories should have a .diagrams folder in the root of the repo. This folder should have at least:
    *   1x application architecture diagram in the source file format .drawio.xml
    *   1x system integration and data flow diagram in the source file format .drawio.xml
    *   1x architecture diagram in the file format .png for each .drawio.xml diagram

### Source Code Repository Topics

*   Topics are labels that create subject-based connections between GitHub repositories and let you explore projects by type, technology, and more
*   putting nrs as a topic in the repos.

### Mono Repo vs Multi Repo?

*   TL;DR - mono initially, multi with growth (e.g. +services, micro-service, APIs)
*   In a mono repo approach, all services and codebase are kept in a single repository
*   Generally speaking, mono repos minimize dependency management
*   If you have multiple services sharing the same libraries or common code, you may want to opt for a mono repo architecture
*   If you predict that your project will be extremely large or complex, a mono repo approach may become untenable over time
*   If you have a large team with multi developers doing commits and triggering builds a mono repo approach may not suit your needs
*   If your project is being worked on by multiple teams (e.g. back end & front end teams) you may want to opt for a multi repo architecture
*   If a versioning strategy is important to your project and you want to version services independently, a multi repo approach might be a better fit
*   If you have more than one team working in multiple repos for your project, developing patterns and best practices within your teams might be important
*   Uptime is easier to maintain with a mult-repo approach
*   Multi-repo allows for individual parts to be fixed/updated without taking down the service
*   Complex projects and supporting architecture (pipelines, APIs, DBs) are easier to manage with multi repo
*   Implementation (mono, multi, APIs, auth) matters far more than how the repositories are arranged

### Source Code Repository License & Ownership