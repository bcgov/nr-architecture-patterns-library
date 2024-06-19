---
sidebar_position: 4
---
<table class="wrapped relative-table"><colgroup></colgroup><tbody><tr><th>Status</th><td><div class="content-wrapper"><p>GreenPublished</p></div></td></tr><tr><th>Overview</th><td><div class="content-wrapper"><p>The purpose of this page is to outline some coding practices when developing an application. Practices used by a team should be documented in the repository.</p></div></td></tr></tbody></table>

Languages Supported
===================

Currently, most agile teams use one of these 4 languages and it is encouraged to stay within these languages, it may expand in the future. ( Typescript/JavaScript, Java On Native, Python, Go)

Native Deployments
==================

Some Languages are interpreted by their runtime ex:(java on JVM, python, javascript, etc..) whereas some languages are compiled (Golang, Rust).

Use native(static binary) deployments wherever available. for ex: it is a **MUST** for teams using Java to deploy using GraalVM native image without the overhead of JVM interpreter.

Focus on the scale-out vs scale-up as deployments are into containers or serverless.

Code Design Patterns and Principles
===================================

*   Apply SOLID and DRY principles. ([https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/), [https://www.baeldung.com/cs/dry-software-design-principle](https://www.baeldung.com/cs/dry-software-design-principle))
*   Use Composition over inheritance as much as possible.
*   Use IOC(Inversion of Control) pattern for dependency Injection, following constructor-based injection over setter or field-based injection.
*   The Service Layer should contain all the business logic of the application, and wrap each atomic transaction in the proper transaction boundary, Use transactions for read-only methods as well for ex: GET endpoints.
    *   (controller/endpoints → service → repository/active record → entity/query/mutation)
    *   The controller should call the service or multiple services inside a transaction boundary to perf
    *   orm the atomic operation.
    *   The Service Layer MUST have a transactional context.
*   Use Lazy Loading and Cascading in ORM to avoid fetching child entities unnecessarily and also make sure the mutations are cascaded as well.
*   Follow the TDD approach and the unit tests become living documentation of code, Stub external services with some sort of code, ex in java :- wiremock or powermock, split test lifecycles, so that UTs and Integration Tests can run independently.
*   Follow The Twelve-Factor App standards -[https://12factor.net/](https://12factor.net/)
*   Use testcontainers([https://www.testcontainers.org/](https://www.testcontainers.org/)) or GHA services([https://docs.github.com/en/actions/using-containerized-services/about-service-containers](https://docs.github.com/en/actions/using-containerized-services/about-service-containers)) for integration TESTS which includes, databases, queues, cache etc...

Folder Structure and Naming Conventions
=======================================

*   Establish and understand your folder structure, if using a template avoid reorganizing (eg. [https://github.com/bcgov/quickstart-openshift](https://github.com/bcgov/quickstart-openshift))
*   Have a common consistent way when creating names. (eg. for your controllers - The naming of controller APIs should be in line with the pattern of tag definition in swagger - Swagger Tag resource-subresource - URN resource/subresource/pathParameter/subresource)

Secret and Environment Variable Handling
========================================

*   Exercise the practice of least privilege (eg. Who can and should be able to access secrets)
*   Do not put sensitive information in the code, use a secret
*   Use environment variables when they may not be sensitive but change between environments (eg. Dev, Test, Prod)
*   Do not create secrets manually in Openshift.

Secure APIs
===========

*   APIs should always be secured. This is generally achieved by using role based access based off their role validated via JWT.
*   The exception to this would be public APIs.

Error Handling
==============

*   Gracefully handle errors
*   Use plain language when reporting an error. (example. If an error requires a user to do an action they should be able to follow the direction from the error)
*   Avoid generic language (eg. Error, review logs)

Code Formatters and Plugins
===========================

*   Use common plugins and common formatters across team members to avoid flagging code as changed when it was just the format that was changed. (eg. Prettier, SQL Formatter, ESLint)
*   Share the IDE specific formatter in the GitHub to avoid conflicts

Infrastructure as Code
======================

*   Keep in mind what happens when things go wrong, and how we recover. Maintain your infrastructure as code where possible. If it's not possible ensure you have sufficient documentation to stand back up your infrastructure.

Pipeline
========

Align your CI/CD pipeline with your hosting environment (GitHub Actions for Openshift Silver/Gold, GitHub Actions with ArgoCD for Openshift Emerald, GiHub Actions with Terraform for AWS)

*   Understand your DevOps pipeline (eg. What happens when I create a PR, merge a PR, how an image gets built, how code get tested)
*   Maintain your pipeline and align if possible to common practice (eg. [https://github.com/bcgov/quickstart-openshift](https://github.com/bcgov/quickstart-openshift))

The below was created using the [QuickStart OpenShift](https://github.com/bcgov/quickstart-openshift) as a reference. Please refer to the repo for the most up to date information.

trueBranching Strategyfalseautotoptrue10111

GitHub PRs - Commits
====================

*   Follow the Conventional Commits for a better understanding -[https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)

PR Review and Practices
=======================

*   PR titles should follow a pattern (eg. "fix/feat: #Ticket Number - Nice Description (#)")
*   Branches should also follow a similar pattern (eg. feat/<featurename>
*   A single PR should be for a single Feature/bug/hotfix/patch/etc and kept as small as possible and reasonable
*   Add appropriate labels established by your team. (eg. Adding labels to also indicate the applications being impacted by the PR, for instance, "web" or "API")
*   Connect the issue using the button "Connect Issue", if not available install the Chrome Extension[ZenHub for GitHub](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd)or similar (this will help trace a completed task to the code modified)
*   If you are the author of the PR avoid resolving the comments, instead reply to them to let the reviewer be aware of your thoughts.
*   If you are a reviewer try to mark the comments as resolved to help the PR author to identify easily what is still missing.
*   Comments and conversations on the PR are good to let everyone be aware of what is happening but a quick call can also save a lot of time.
*   Once a review is raised, a reviewer should do the best effort to try to find a good moment to start. (eg. in the next 3 business hours. It does not mean finishing it in the 3 hours, just try to start providing some feedback. If multiple PRs are open at the same time the delays will be completely acceptable)
*   Review according to best practices for the code and application. PRs are about code review (**not people review**)
*   Have a merging practice. (eg. Squash the commits before merging to keep the main timeline clean)
*   Clean up your branches (eg. Delete the branch after the merge is done (after mergingdo not reuse the branch))

Dependency Management
=====================

*   It is **strongly recommended to keep dependencies updated** with automated pull requests from tools like **Renovate, Snyk or Dependabot**.
*   This introduces new features, fix bugs, address vulnerabilities or improve performance, affecting the quality, security, and functionality of a project.
*   Regular dependency pull requests help to keep changes small, up to date and, of course, manageable.
*   These pull requests should not be closed without careful consideration. Unmerged updates should be written into an issue with reasoning and details to follow up in future.

API framework evaluation factors
================================

The below outlines a few**key**considerations which would help in the decision-making of language/framework to use for API development for**containerized**environments.

Details around API Design are outlined here([https://developer.gov.bc.ca/Data-and-APIs/BC-Government-API-Guidelines](https://developer.gov.bc.ca/Data-and-APIs/BC-Government-API-Guidelines)). The below points are on top of the guidelines provided in the link.

1.  Developer friendly, community support and libraries.
2.  Resource Consumption(memory/CPU) the less the better, supports the move towards green computing.
3.  Automated Open API 3 Specification generation, Swagger UI.
4.  Automated DB schema management (flyway/Liquibase or something similar).
5.  ORM integration for Database, ACID, Transaction support, Nested Transactions, Advanced Query with pagination, filter, sorting support.
6.  Supports TDD(Test Driven Development) out of the box, which supports unit and integration testing.
7.  Easiness of testing for pipelines and other automation.
8.  Easiness of OAUTH2 integration.
9.  Easiness of Circuit breaker integration and Resiliency.
10.  API versioning.
11.  Support for REST, GraphQL and gRPC
12.  Asynchronous REST Client.
13.  API Health checks(for liveness/readiness checks in Kubernetes world) out of the box which includes checking DB Connections and Message Broker connection (If present).
14.  Easiness of writing to log files in different formats.
15.  Switching Between Relational Database should be config only.
16.  Easy Concurrency.
17.  Easiness of Integration with Distributed tracing frameworks.