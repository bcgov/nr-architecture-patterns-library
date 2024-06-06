---
sidebar_position: 5
---
<table class="wrapped relative-table"><colgroup></colgroup><tbody><tr><th>Status</th><td><div class="content-wrapper"><p>GreenPublished</p></div></td></tr><tr><th>Overview</th><td><div class="content-wrapper"><p>This page is intended to provide a high level overview of running an application in various environments and provide a basic understanding of the differences between application hosting environments. Please ask a member of our team to review this with you if you are discussing hosting options.</p></div></td></tr></tbody></table>

Hosting Options
===============

The below options outline the 4 primary ways to host applications.

Note: Azure and Google are not mentioned below as the Province has not completed agreements with these providers, hence they are currently not recommended for use.

On-Premise
----------

**Overview**: Running an application on-premise referred to a typical server (VM) hosted through OCIO and managed by the NRIDS Infrastructure Team for general server management.

Please not the below is not a representation about a specific application but a representation of what an on-premise application could be.

trueOnPremfalse400autotoptrue16563

<table class="relative-table wrapped"><colgroup></colgroup><tbody><tr><th>Pros</th><th>Cons</th></tr><tr><td><p>Network access to government services and applications within SPAN</p><ul><li>In general, firewall rules will be the only blocker but can be mitigated in general via a firewall change request;</li></ul></td><td><p>Difficult to deploy</p><ul><li>Must use Jenkins or manual deployments</li><li>No native connectivity to connect with github actions</li><li>locked into relying on the RFD / RFC team and their deployment structure</li></ul></td></tr><tr><td colspan="1"><p>Network access from government services and applications within SPAN</p><ul><li>In general, firewall rules will be the only blocker but can be changes via a firewall change request; <strong>Note this can be useful when another systems require access to your applications data</strong></li></ul></td><td colspan="1"><p>Limited control over servers</p><ul><li>By default a team does not have full control of their servers</li><li>Security patches are managed external to a team</li></ul></td></tr><tr><td><p>Access to system databases</p><ul><li>Applications that do not have internal or external accessible APIs are still accessible via direct database connections; <strong>Note this can be useful for integrations with systems that are not under active development or do not have capabilities to develop APIs</strong></li></ul></td><td><p>Limited Tech Stack</p><ul><li>Currently, it is limited to Java/Oracle mainly within ISSS stack with BitBucket as the source code repository.</li></ul></td></tr><tr><td><p>Access to internal APIs</p><ul><li>Applications that do not have external accessible APIs are still accessible via internal APIs</li></ul></td><td><p>Limited Scalability</p><ul><li>Currently, all applications run as a single process without any resiliency or failover.</li></ul></td></tr></tbody></table>

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

<table class="relative-table wrapped"><colgroup></colgroup><tbody><tr><th>Pros</th><th>Cons</th></tr><tr><td><p>Control over deployment, patches, updates,</p><ul><li>Can work with GitHub and GitHub actions; <strong>Note this is not platform/cluster updates. Platform updates are still done by OCIO but if your application is configured as Highly-available with appropriate state management this should not affect your application</strong></li></ul></td><td><p>Database stability</p><ul><li>Running a single pod can cause your database to go down without notice in a production environment</li><li>Limited or no DBA support; the development team is ultimately responsible for database management and backup/recovery</li></ul></td></tr><tr><td><p>Supporting GitHub</p><ul><li>Open Source Codebase leading to Easier Collaboration and following defacto standard.</li></ul></td><td><p>Database cluster complexity</p><ul><li>Since production databases must operate in a cluster, additional expertise is needed to operate a cluster</li></ul></td></tr><tr><td></td><td></td></tr></tbody></table>

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

<table class="relative-table wrapped"><colgroup></colgroup><tbody><tr><th>Pros</th><th>Cons</th></tr><tr><td><p>Scalability of resources</p><ul><li>Provides the ability to increase resources (for a cost)</li></ul></td><td><p>Steep learning curve</p><ul><li>Operating in AWS requires extensive knowledge of the platform and infrastructure as well as supporting technologies (eg. Terraform)</li></ul></td></tr><tr><td><p>Reduced IT management overhead</p><ul><li>Platform, infrastructure, security overhead are handled by AWS</li></ul></td><td><p>Limited use for Data Types</p><ul><li>Not fit for Protected C data</li></ul></td></tr><tr><td><p>Access to a breadth of services not available on premise</p><ul><li><a href="https://digital.gov.bc.ca/cloud/public/providers/service-catalogue/">https://digital.gov.bc.ca/cloud/public/providers/service-catalogue/</a></li></ul></td><td><p>Little or no cost certainty</p><ul><li>Most components in AWS are billed based on usage; network egress (leaving AWS) is also charged based on data volumes</li></ul></td></tr></tbody></table>

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

<table class="relative-table wrapped"><colgroup></colgroup><tbody><tr><th>Pros</th><th>Cons</th></tr><tr><td><p>Less responsibility to maintain</p><ul><li>A vendor is responsible to maintain infrastructure and application; <strong>Note SLAs. contracts, and licenses are required</strong></li></ul></td><td><p>Vendor Managed</p><ul><li>Infrastructure or application issues will generally be up to the vendor to resolve</li><li>Changes, bugs, enhancements are likely to be done only by a vendor unless additional training is provided</li></ul></td></tr><tr><td></td><td><p>Vendor and Product lock in</p><ul><li>Full implement SaaS products generally requires substantial effort to migrate to other platforms</li><li><u><strong>Data</strong></u> is locked in with the vendor.</li></ul></td></tr><tr><td></td><td><p>Limited use for Data Types</p><ul><li>Not fit for Protected C data</li></ul></td></tr><tr><td colspan="1"></td><td colspan="1"><p>Difficult to meet requirements of the Cloud Security Schedule and Cloud Privacy Schedule</p><ul><li>Each SaaS vendor AND the underlying service provider must be evaluated</li></ul></td></tr></tbody></table>

**When this might fit?**

1.  Little to no resources to run and manage your application
2.  Little to no integration points with government systems that are not externally accessible.

**When this might not fit?**

1.  Many integration points with government systems that are not externally accessible.