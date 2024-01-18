---
sidebar_position: 5
---
Status

YellowEvolving 

Description

Overview of application hosting options

Owner

NRIDS Architecture

Overview
========

This page is intended to provide a high level overview of running an application in various environments and provide a basic understanding of the differences between application hosting environments. Please ask a member of our team to review this with you if you are discussing hosting options.

  

Hosting Options
===============

The below options outline the 4 primary ways to host applications.

Note: Azure and Google are not mentioned below as the Province has not completed agreements with these providers, hence they are currently not recommended for use.

On-Premise
----------

**Overview**: Running an application on-premise referred to a typical server (VM) hosted through OCIO and managed by the NRIDS Infrastructure Team for general server management.

Please not the below is not a representation about a specific application but a representation of what an on-premise application could be.

trueOnPremfalse400autotoptrue16563

Pros

Cons

Network access to government services and applications within SPAN

*   In general, firewall rules will be the only blocker but can be mitigated in general via a firewall change request; 

Difficult to deploy

*   Must use Jenkins or manual deployments
*   No native connectivity to connect with github actions
*   locked into relying on the RFD / RFC team and their deployment structure

Network access from government services and applications within SPAN

*   In general, firewall rules will be the only blocker but can be changes via a firewall change request; **Note this can be useful when another systems require access to your applications data**

Limited control over servers

*   By default a team does not have full control of their servers
*   Security patches are managed external to a team

Access to system databases

*   Applications that do not have internal or external accessible APIs are still accessible via direct database connections; **Note this can be useful for integrations with systems that are not under active development or do not have capabilities to develop APIs**

Limited Tech Stack

*   Currently, it is limited to Java/Oracle mainly within ISSS stack with BitBucket as the source code repository.

Access to internal APIs

*   Applications that do not have external accessible APIs are still accessible via internal APIs

Limited Scalability

*   Currently, all applications run as a single process without any resiliency or failover.

**When this might fit?**

1.  Many integration points with government systems that are not externally accessible.
2.  COTS applications that either won't run on Openshift and do not have a cloud based SaaS subscription service.

**When this might not fit?**

1.  Team requires full control over the deployment, patches, and maintenance of applications and associated servers.
2.  Team requiring separate tech stack(frontend, backend, database, messaging ...)

  

Openshift
---------

**Overview**: Running an application in Openshift (Silver/Gold/Emerald) with the platform managed by OCIO

Please note the below is not a representation about a specific application but a representation of what could be.

  

Pros

Cons

Control over deployment, patches, updates,

*   Can work with GitHub and GitHub actions; **Note this is not platform/cluster updates. Platform updates are still done by OCIO but if your application is configured as Highly-available with appropriate state management this should not affect your application**

Database stability

*   Running a single pod can cause your database to go down without notice in a production environment
*   Limited or no DBA support; the development team is ultimately responsible for database management and backup/recovery

Supporting GitHub

*   Open Source Codebase leading to Easier Collaboration and following defacto standard.

Database cluster complexity

*   Since production databases must operate in a cluster, additional expertise is needed to operate a cluster

  

  

**When this might fit?**

1.  Deployment of containerized web applications with limited Database requirements
2.  Your product is comprised of open source technologies

**When this might not fit?**

1.  Low developer expertise
2.  Your product has an embedded PCI/payment solution

**Note: For direct DB access to ZoneB databases Or Storing Protected C data, emerald cluster may be required**

AWS
---

**Overview**: Running an application in BCGOV AWS tenancy owned by OCIO

Please not the below is not a representation about a specific application but a representation of what could be.

trueAWSfalse600autotoptrue34981

Pros

Cons

Scalability of resources

*   Provides the ability to increase resources (for a cost)

Steep learning curve

*   Operating in AWS requires extensive knowledge of the platform and infrastructure as well as supporting technologies (eg. Terraform)

Reduced IT management overhead

*   Platform, infrastructure, security overhead are handled by AWS

Limited use for Data Types

*   Not fit for Protected C data

Access to a breadth of services not available on premise

*   [https://digital.gov.bc.ca/cloud/public/providers/service-catalogue/](https://digital.gov.bc.ca/cloud/public/providers/service-catalogue/)

Little or no cost certainty

*   Most components in AWS are billed based on usage; network egress (leaving AWS) is also charged based on data volumes

**When this might fit?**

1.  Your applications require a volume of resources not available on-premise with large fluctuations in demand
2.  You require tools and services not available on premise or in Openshift

**When this might not fit?**

1.  Many integration points with government systems are not externally accessible; **Note: this may not be a blocker in the future due to a cloud networking interface being implemented by OCIO that is intended to allow network access between SPANBC and our AWS tenancy, however, it is not known the impacts or efforts for teams to implement**

SaaS
----

**Overview**: A vendor run and managed application hosted outside government networks provided as a "service"

Please not the below is not a representation about a specific application but a representation of what could be.

Red Line: Firewall

Blue Line: SPAN network boarder

trueSaaSfalse400autotoptrue26291

Pros

Cons

Less responsibility to maintain

*   A vendor is responsible to maintain infrastructure and application; **Note SLAs. contracts, and licenses are required**

Vendor Managed

*   Infrastructure or application issues will generally be up to the vendor to resolve
*   Changes, bugs, enhancements are likely to be done only by a vendor unless additional training is provided

  

Vendor and Product lock in

*   Full implement SaaS products generally requires substantial effort to migrate to other platforms
*   **Data** is locked in with the vendor.

  

Limited use for Data Types

*   Not fit for Protected C data

  

Difficult to meet requirements of the Cloud Security Schedule and Cloud Privacy Schedule

*   Each SaaS vendor AND the underlying service provider must be evaluated

**When this might fit?**

1.  Little to no resources to run and manage your application
2.  Little to no integration points with government systems that are not externally accessible.

**When this might not fit?**

1.  Many integration points with government systems that are not externally accessible.