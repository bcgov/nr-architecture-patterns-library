---
sidebar_position: 1
---
This page has been replicated to a publicly accessible website located [here](https://bcgov.github.io/nr-architecture-patterns-library/docs/Agile%20Team%20Kickstarter)

<table class="wrapped"><colgroup></colgroup><tbody><tr><th>Status</th><td><div class="content-wrapper"><p>GreenPublished</p></div></td></tr><tr><th>Overview</th><td><p>The purpose of this page is to outline some of the key information and connections that product teams should be made aware of as part of team inception. This is a living and collaborative document.</p><p>Teams can use this page a reference point to assist in locating some key areas of information related to their application. If the information you are using does not exist here please review other guideline pages and/or contact the architecture team.</p></td></tr></tbody></table>

Partnership Agreement
=====================

NRM teams that work within our Development and Digital Services (DDS) branch start with a partnership agreement to ensure alignment between NRIDS and the program area.

[NRM Digital Service Delivery Partnership Agreement](https://apps.nrs.gov.bc.ca/int/confluence/display/DEVGUILD/NRM+Digital+Service+Delivery+Partnership+Agreement)

Team Agreement
==============

Before starting development, or when new team members begin contributing, ensure everyone on the team has the same understanding about coding practices, technology choices, and roles within your team. This is typically done during sprint 0.

[Coding Patterns and Practices](https://apps.nrs.gov.bc.ca/int/confluence/display/AR/Coding+Patterns+and+Practices)

Data Guides, Standards and Resources
====================================

Data is the enduring asset as part of any digital service in Government. Below are some recommended resources to get teams familiar with the data ecosystem within BC Government:

[Open Data Policy](https://www2.gov.bc.ca/gov/content/data/policy-standards/open-data) increases government transparency and accountability through the public release of information, including data.

[BC Data Catalogue](https://catalogue.data.gov.bc.ca/) is a resource for discovering thousands of datasets from across Government, and in some cases gaining access to the services themselves.

[Core Metadata Standard](https://www2.gov.bc.ca/gov/content/data/policy-standards/core-metadata-standard) defines the metadata elements that help make digital information easier to find, to improve services, and increase government's efficiency

[Gender and Sex Data Standard](https://www2.gov.bc.ca/gov/content/data/policy-standards/gender-sex-data-standard) improves how government collects and uses data to serve B.C.'s diverse population.

[Indigenous Languages Technology Standard](https://www2.gov.bc.ca/gov/content/data/policy-standards/ilts)**:** the BC Government is committed to including [Indigenous languages in government records, systems and services](https://www2.gov.bc.ca/gov/content?id=666A1FD778FA437994E419A98662ED5C). The [BC Sans](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity/bc-sans) font is an open-source "living" typeface developed for government to improve the readability and delivery of digital services. It was designed to support special characters and syllabics found in Indigenous Languages in B.C. When designing and building your product, ensure it has the ability to collect, store, manage and display BC Sans characters. Connect with your architects for more details and references.

[Working with Data](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/working-with-data/) is a developer focused guide around developing data solutions within BC Government.

Product Lifecycle
=================

Is your team replacing, re-architecting or re-platforming an existing application? If so, it's the Product Owner's responsibility to ensure the existing application is retired and the data is transitioned or preserved to ensure data quality, accuracy and currency as well as overall portfolio sustainability. Product Owners may reach out to their assigned [Ministry Portfolio Manager (MPM)](https://apps.nrs.gov.bc.ca/int/confluence/display/AR/The+Architecture+Team#TheArchitectureTeam-MPMPortfolioAlignment) for assistance with the [Application Retirement](https://apps.nrs.gov.bc.ca/int/confluence/display/TS/Application+Retirement) process.

Ensure you allocate time and budget in your backlog to manage the overall lifecycle of the business processes, data and associated products.

Helpful links on Application Retirement:

Private Cloud
=============

The BC Government has invested heavily in the Red Hat OpenShift platform to provide self service private cloud capabilities. Training is available through the exchange lab to get teams acquainted with the platform; a good primer is [here](https://developer.gov.bc.ca/What-Is-OpenShift).

[https://developer.gov.bc.ca/ExchangeLab-Course:-OpenShift-101](https://developer.gov.bc.ca/ExchangeLab-Course:-Openshift-101)

The landing page for the private cloud service is here: [https://cloud.gov.bc.ca/private-cloud/](https://cloud.gov.bc.ca/private-cloud/)

Namespace provisioning can be found here: [https://registry.developer.gov.bc.ca/public-landing](https://registry.developer.gov.bc.ca/public-landing)

Information on resource tuning for OpenShift Namespaces can be found here: [https://beta-docs.developer.gov.bc.ca/application-resource-tuning/](https://beta-docs.developer.gov.bc.ca/application-resource-tuning/)

The [RedHat learning portal](https://developers.redhat.com/developer-sandbox/activities) is a great resource to learn more about the platform, and they also provide a sandbox to 'learn by doing'.

Some of the more important concepts to understand up front are:

*   Image streams, builds & tagging
*   Network policy settings to allow pods to communicate internally and to the web via routes,
*   How to get deployments to listen to tags and/or configuration changes (eventually on repo events like pull requests)
*   Tuning, health checks, resource allocation and tuning, and pod scaling

OpenShift QuickStart Application
================================

Our friends and collaborators in Forestry Digital Services and the Architecture team have created an application template that includes pluggable API backends (Node/Nest, Python/FastAPI, Go/Fiber, Java/Quarkus) and frontend (React, Vite), with a deployment pipeline to the OpenShift platform with an option to include a PostgreSQL/PostGIS database and leveraging the backup container provided by the BC DevExchange. This is a great resource to get product teams up and running.

[QuickStart OpenShift](https://github.com/bcgov/quickstart-openshift)

[QuickStart OpenShift Emerald](https://github.com/bcgov/quickstart-openshift-emerald)

Public Cloud
============

BC Government has endorsed several public cloud services and provides quickstart guides and sample applications!

[https://www2.gov.bc.ca/gov/content/governments/services-for-government/cloud-computing-in-the-bc-government#explore](https://www2.gov.bc.ca/gov/content/governments/services-for-government/cloud-computing-in-the-bc-government#explore)

Approved AWS services can be found here: [https://developer.gov.bc.ca/AWS-Services](https://developer.gov.bc.ca/AWS-Services)

GitHub
======

Source code should be stored in a GitHub repository in the "bcgov" tenancy.

Access management for the bcgov GitHub tenancy can be found here: [https://just-ask.developer.gov.bc.ca/](https://just-ask.developer.gov.bc.ca/)

NRM specific guidance on Github is here: [Source Code Repositories](https://apps.nrs.gov.bc.ca/int/confluence/display/AR/Source+Code+Repositories)

Authentication and Identity
===========================

Most NRM digital products leverage the OCIO SSO service that is backed by Keycloak.

[https://bcgov.github.io/sso-requests](https://bcgov.github.io/sso-requests)

[https://oidc.gov.bc.ca/auth/](https://oidc.gov.bc.ca/auth/)

Secrets Management
==================

The platform services team operates a Vault service.

It is described here: [https://beta-docs.developer.gov.bc.ca/vault-secrets-management-service/](https://beta-docs.developer.gov.bc.ca/vault-secrets-management-service/)

Access to the service is here: [https://vault.developer.gov.bc.ca/ui/vault/auth?with=token](https://vault.developer.gov.bc.ca/ui/vault/auth?with=token)

Security and Privacy
====================

It's important that teams engage with the NRM Security and Privacy teams early and often. They can support you with general advice as well as Security Threat Risk Assessments (STRA's) and Privacy Impact Assessments (PIA's).

NRM Security Knowledge Base: [NRM Information Security Home](https://apps.nrs.gov.bc.ca/int/confluence/display/SITH/NRM+Information+Security+Home)

NRM Privacy Knowledge Base: [NRM Privacy Knowledge Base](https://apps.nrs.gov.bc.ca/int/confluence/display/NRMP/NRM+Privacy+Knowledge+Base)

OWASP (Open Web Application Security Project) is another great reference for security best practices for development teams: [https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/migrated\_content](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/migrated_content)

CI/CD
=====

The deployment pipeline is a key component for your application. For visibility, collaboration and maintainability modern teams are moving away from Jenkins towards GitHub actions.

It is strongly recommended that code be submitted using a Pull Request. Automated testing can and should replace manual UAT wherever practical.

NRM has a modern CI/CD template using GitHub Actions and HELM: [OpenShift QuickStart](https://github.com/bcgov/quickstart-openshift) targeted for OpenShift Silver or Gold Cluster.

NRM has a modern CI/CD template using GitHub Actions, HELM and Argo: [OpenShift QuickStart Emerald](https://github.com/bcgov/quickstart-openshift-emerald) targeted for OpenShift Emerald Cluster.

Application Programming Interfaces (API's)
==========================================

We recommend adopting an "API First" philosophy for application development, where teams both build and consume their API's. **Providing API specification with proper metadata is mandatory** irrespective of the underlying implementation(REST, graphql, grpc etc..)

Along with API first approach the Architecture team highly recommends looking at Domain Driven Design(DDD) where each micro-service API is bounded by its business domain([https://martinfowler.com/bliki/DomainDrivenDesign.html](https://martinfowler.com/bliki/DomainDrivenDesign.html))

Also look at Event-Driven Architecture (Event Sourcing and CQRS) when building micro-services as it promotes highly decoupled APIS, communicating over an event streaming platform ([https://microservices.io/patterns/data/event-sourcing.html](https://microservices.io/patterns/data/event-sourcing.html), [https://microservices.io/patterns/data/cqrs.html](https://microservices.io/patterns/data/cqrs.html))

We recommend a Test Driven Development (TDD) approach to API development, as it makes the application code more reliable and efficient along with easier maintenance in the future.

There are several ways to name test methods/functions but we recommend using the pattern _`test<method_name>_<given_condition>_<expected_behavior>,`_ `it makes the tests more readable, predictable and becomes living documentation of the codebase.`

BC Government has published a set of API Guidelines here: [https://developer.gov.bc.ca/Data-and-APIs/BC-Government-API-Guidelines](https://developer.gov.bc.ca/Data-and-APIs/BC-Government-API-Guidelines)

Information on the corporate API gateway can be found here: [https://bcgov.github.io/aps-infra-platform/](https://bcgov.github.io/aps-infra-platform/)

Database and Data Design
========================

Most of the teams working on OpenShift are choosing a flavor of PostgreSQL to persist data for their application.

Some points of consideration are:

*   What type of data are you persisting as part of your application? Are you storing geospatial data? Audio and/or video?
*   What are your preferred integration patterns?
*   Do you have any requirements, for example, to replicate data to the BC Geographic Warehouse (BCGW)?
*   What are the requirements for consistency, availability and partitioning?

For NRM guidance specific to data and database design, please visit this space: [NRM Data and Database Development Guidelines](https://apps.nrs.gov.bc.ca/int/confluence/display/NRMDDDG/NRM+Data+and+Database+Development+Guidelines)

Database backups can be setup using the backup container image; information can be found here: [https://developer.gov.bc.ca/Backup-Container](https://developer.gov.bc.ca/Backup-Container)

Document Storage
================

BC Government has an on premise [object storage solution](https://www.dell.com/en-ca/dt/storage/ecs/index.htm#tab0=0&tab1=0) that delivers low cost storage for unstructured and semi-structured data. The service is billed monthly to the highwatermark of the storage your team consumes in their S3 bucket at $0.07/GB/Month. To get an S3 object storage bucket, contact the [Optimize team](https://apps.nrs.gov.bc.ca/int/confluence/display/OPTIMIZE/NRS+Object+Storage).

[COMS (Common Object Management Service)](https://github.com/bcgov/common-object-management-service) is an emerging common component that leverages the object storage solution. The advantage of this component is that it includes the ability to tag and add metadata, and integrates with BC Government's standard identity providers (IDIR, BCeID). To learn more, attend the [Common Services Showcase](https://bcgov.github.io/common-service-showcase/) team sprint reviews or contact the team via email.

An emerging companion to the Common Object Management Service being built by the Common Services team is [BCBox](https://bcbox.nrs.gov.bc.ca), which is a hosted solution that uses the COMS API to allow users to upload, tag and share files using any [OIDC](https://openid.net/connect/) compliant authentication mechanism. The code repository for BCBox can be found [here](https://github.com/bcgov/bcbox).

Design Guidance
===============

General resources for Agile designers at Digital Government (BC Visual Identity, Official BC Design System, Web Style Guide, Content Design Guidance, UX Research Guidance, Service Design Playbook) can be found here:

[https://digital.gov.bc.ca/resources#:~:text=Read%20the%20playbook-,For%20Designers,-B.C.%20Visual](https://digital.gov.bc.ca/resources#:~:text=Read%20the%20playbook-,For%20Designers,-B.C.%20Visual)

Additional design system guidance: [https://developer.gov.bc.ca/Design-System/About-the-Design-System](https://developer.gov.bc.ca/Design-System/About-the-Design-System)

BC Parks has extended their Design Guide to include the use of the BC Sans font and other additions specific to their program:

[https://bcgov.github.io/bcparks/design-guides](https://bcgov.github.io/bcparks/design-guides)

Front End Frameworks
====================

Many agile teams are using a flavor of Javascript framework for their front end development (Angular, Vue, React etc). We recommend you pick the framework that works best for the team, and **_if you are developing a suite of applications for your program area, harmonize across the suite_** where that makes sense. This will minimize risk associated with changes to the team and enable other developers to work with your code.

Web Mapping Frameworks
======================

A comparison of web mapping frameworks in use in BC Government can found here: [https://bcgov.github.io/bcwebmaps-options/](https://bcgov.github.io/bcwebmaps-options/)

Back End Languages
==================

Similar to front end frameworks, we recommend you choose a development language that best suits the team and the business challenge you are working on. _**If you are developing a suite of applications for your program area, harmonize across the suite**_ where that makes sense. This will minimize risk associated with changes to the team and enable other developers to work with your code.

There are many languages in use by agile teams across government, the most popular being Go, Python, Java, Javascript and Typescript. The [Technology Radar](https://apps.nrs.gov.bc.ca/int/confluence/display/AR/Technology+Radar) is a great reference to see where the momentum is around languages and frameworks.

Web Domains and Certificates
============================

Information on NRM Web Domains can be found here: [Web-Application domains](https://apps.nrs.gov.bc.ca/int/confluence/display/AR/Web-Application+domains)

An example of a public facing URL is [https://fom.nrs.gov.bc.ca/public/projects](https://fom.nrs.gov.bc.ca/public/projects)

Information on how to obtain an SSL certificate can be found here: [Automation of TLS Certificates for Websites](https://apps.nrs.gov.bc.ca/int/confluence/display/AR/Automation+of+TLS+Certificates+for+Websites)

Further information on security certificates can be found here: [Security Certificates](https://apps.nrs.gov.bc.ca/int/confluence/display/IMBMIDTIER/Security+Certificates)

Information on certbot can be found here: [https://github.com/BCDevOps/certbot](https://github.com/BCDevOps/certbot)

Common Components
=================

BC Government has a selection of mature common components and common services.

Digital Government reference: [https://digital.gov.bc.ca/common-components](https://digital.gov.bc.ca/common-components)

NRM Specific Guidance: [Common Components and Common Services](https://apps.nrs.gov.bc.ca/int/confluence/display/AR/Common+Components+and+Common+Services)

##### _Community Tip! If you are looking for a common component you think should exist, but doesn't, consider adding some extra design thinking such that other teams can reuse your great work!_

Reporting and Analytics
=======================

Many teams require reporting and analytics capabilities for their application data. Metabase is an easy-to-use open-source dashboarding and business intelligence tool that has broad usage in the NRM. Architecture has created a packaged install of Metabase tailored to teams wanting secure access to Zone B Oracle databases.

[Metabase](https://github.com/bcgov/nr-metabase)

I need help from the Community!
===============================

There are many teams working across the NRM and beyond. To connect with your NRM colleagues, see the team directory here [NRIDS Development and Digital Services](https://apps.nrs.gov.bc.ca/int/confluence/display/DEVGUILD/NRIDS+Development+and+Digital+Services)

The community uses Rocket.Chat to solicit help from other teams on all sorts of subjects. Users can authenticate with IDIR or their GitHub ID.

[https://chat.developer.gov.bc.ca/](https://chat.developer.gov.bc.ca/)

Channels of interest might include #general #devops-alerts #devops-operations #nr-iitd-agile-teams and any channel prefixed with "#nr-"

The NRM teams have a DevOps Guild to facilitate connections and collaboration between teams: [https://apps.nrs.gov.bc.ca/int/confluence/display/DEVGUILD](https://apps.nrs.gov.bc.ca/int/confluence/display/DEVGUILD)

You can also reach out to the NRM Architecture team, who can help connect your team with the right resources.

Key References:
===============

BC DevHub: [https://developer.gov.bc.ca](https://developer.gov.bc.ca), [https://docs.developer.gov.bc.ca/](https://docs.developer.gov.bc.ca/)

Common Components: [https://digital.gov.bc.ca/common-components](https://digital.gov.bc.ca/common-components)

Communities of Practice: [https://digital.gov.bc.ca/communities](https://digital.gov.bc.ca/communities)

BC Gov StackOverflow: [https://stackoverflow.developer.gov.bc.ca/](https://stackoverflow.developer.gov.bc.ca/)

FAQ
===

**Q.** Do I need my application and data architecture to be formally approved?

**A.** No, there is no formal approval process for your architecture. We recommend collaborating with the architecture team during any architectural spikes or any significant architectural decisions. Our collective experience and connectedness across the community can typically provide value for the team.

**Q.** Do I have to use OpenShift to host my application?

**A.** No. We would generally like new applications to be running in a containerized or serverless hosting architecture. OpenShift is a strong option for teams starting out given the maturity of the platform and the surrounding community, as is the AWS Public Cloud Service, both operated by BC Government teams. Following cloud native design principles will help ensure that your application workload is portable between hosting platforms.

**Q.** Can I pass my application off to an ops team so the team can work on new apps?

**A.** We generally follow the "you build it, you run it" philosophy, and therefore recommend you build a sustainment plan into your application roadmap. Adhering as closely as possible to the [12 Factor](https://12factor.net/) principles is a great way to promote a sustainable, cloud native build.