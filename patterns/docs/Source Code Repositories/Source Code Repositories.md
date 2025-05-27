---
sidebar_position: 2
---
<table class="wrapped"><colgroup></colgroup><tbody><tr><th>Status</th><td><div class="content-wrapper"><p>GreenPublished</p></div></td></tr><tr><th>Overview</th><td><div class="content-wrapper"><p>This page is general awareness, guidance, and recommendations for source code repositories within the NRM</p></div></td></tr></tbody></table>

Summary
=======

Source code should be stored in a GitHub repository in the "bcgov" organization.

Private repositories can be requested in the bcgov-c organization

NRM specific guidance on Github is here: [Source Code Repositories](https://apps.nrs.gov.bc.ca/int/confluence/display/AR/Source+Code+Repositories)

Repository Type Overview
========================

<table class="wrapped"><colgroup class=""></colgroup><tbody class=""><tr class=""><th><p>Repository Type</p></th><th><p>When to Use</p></th><th><p>Notes</p></th></tr><tr class=""><td>Subversion</td><td>Never</td><td>Subversion is deprecated, do not create any new repositories.</td></tr><tr class=""><td>BitBucket</td><td>Closed, internal</td><td>Manual, complex, (currently) in-house. Works with RFC/RFD process and JIRA. Very customizable.</td></tr><tr class=""><td>Github</td><td>Whenever possible</td><td><p>Ideal for automation, open source. Industry leader in most significant areas. Very unconstrained.</p><p>see <a href="https://github.com/bcgov/BC-Policy-Framework-For-GitHub">https://github.com/bcgov/BC-Policy-Framework-For-GitHub</a></p></td></tr></tbody></table>

GitHub:
-------

Beginner Guide: [https://github.blog/2024-05-27-what-is-git-our-beginners-guide-to-version-control/](https://github.blog/2024-05-27-what-is-git-our-beginners-guide-to-version-control/)

*   Predominant Source Code Management(SCM) system used in BC Government
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

BitBucket:
----------

*   JIRA integration
*   Connections are stronger between teams and interal processes, e.g. [RFC/RFD](https://apps.nrs.gov.bc.ca/int/confluence/display/TS/RFC+Process) RFC/RFD
*   Fine-grained control, e.g.:
    *   Prevent even repo administrators from merging code or side-stepping requirements
    *   Asphyxiate contractors with red tape until code is abandoned and/or overwritten
*   Currently on-premise, working Jenkins and minimal firewall/networking changes
*   Potential shift to cloud will require similar admin and network changes to GitHub

Subversion (SVN):
-----------------

*   Lessened need to retrain on legacy projects, some are comfortable/familiar

Source Code Repository Naming
=============================

*   Github: prefix each repository with "nr-"
    *   e.g. nr-(app-name), replace the (app-name) with actual application/product name.
    *   e.g. nr-fom-api

Folder Naming
=============

*   "frontend" folder for frontend
    *   for multiple frontends use "frontend-\*"
        *   Example: frontend-admin
*   "backend" folder for backend
    *   for multiple backends use "backend-\*"
        *   Example: backend-doc-gen
*   "migrations" folder for applications using flyway
*   "tests" folder for applications with non-component specific tests (eg. Load). Component specific tests (unit, integration, e2e) should be within their specific subfolder (backend, frontend)

Diagrams
========

*   All repositories should have a .diagrams folder in the root of the repo. This folder should have at least:
    *   1x application architecture diagram in the source file format .drawio.xml
    *   1x system integration and data flow diagram in the source file format .drawio.xml
    *   1x architecture diagram in the file format .png for each .drawio.xml diagram

Source Code Repository Topics
=============================

*   Topics are labels that create subject-based connections between GitHub repositories and let you explore projects by type, technology, and more
*   putting nrs as a topic in the repos.

Mono Repo vs Multi Repo?
========================

As a general recommendation, it is preferred to use product based monorepos.

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

Source Code Repository License & Ownership
==========================================