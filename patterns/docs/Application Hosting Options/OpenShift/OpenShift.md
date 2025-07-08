---
sidebar_position: 1
---
<table class="wrapped relative-table"><colgroup></colgroup><tbody><tr><th>Status</th><td><div class="content-wrapper"><p><ac:structured-macro ac:name="status" ac:schema-version="1" ac:macro-id="a2e29e0a-14d5-42cd-922b-bfb7364904e6"><ac:parameter ac:name="colour">Green</ac:parameter><ac:parameter ac:name="title">Published</ac:parameter></ac:structured-macro>&nbsp;</p></div></td></tr><tr><th>Overview</th><td><div class="content-wrapper"><p>This page is intended to provide a recommendation when developing custom applications on OpenShift</p></div></td></tr></tbody></table>

Hosting Options
===============

When developing a custom application on the OpenShift Platform, we always recommend using the quick start OpenShift application (QSOS) . OCIO is currently creating a wizard from the QSOS to provide an easier onboarding experience. [https://test.developer.gov.bc.ca/create](https://test.developer.gov.bc.ca/create)

Private Cloud
=============

The BC Government has invested heavily in the Red Hat OpenShift platform to provide self service private cloud capabilities.  Training is available through the exchange lab to get teams acquainted with the platform; a good primer is[here](https://developer.gov.bc.ca/What-Is-OpenShift).

[https://digital.gov.bc.ca/technology/cloud/private/support/openshift-101/](https://digital.gov.bc.ca/technology/cloud/private/support/openshift-101/)

The landing page for the private cloud service is here:[https://cloud.gov.bc.ca/private-cloud/](https://cloud.gov.bc.ca/private-cloud/)

Namespace provisioning can be found here:[https://registry.developer.gov.bc.ca/public-landing](https://registry.developer.gov.bc.ca/public-landing)

Information on resource tuning for OpenShift Namespaces can be found here:[https://beta-docs.developer.gov.bc.ca/application-resource-tuning/](https://beta-docs.developer.gov.bc.ca/application-resource-tuning/)

The[RedHat learning portal](https://developers.redhat.com/developer-sandbox/activities)is a great resource to learn more about the platform, and they also provide a sandbox to 'learn by doing'.

Some of the more important concepts to understand up front are:

*   Image streams, builds & tagging
*   Network policy settings to allow pods to communicate internally and to the web via routes,
*   How to get deployments to listen to tags and/or configuration changes (eventually on repo events like pull requests)
*   Tuning, health checks, resource allocation and tuning, and pod scaling

OpenShift QuickStart Application
================================

Our friends and collaborators in Forestry Digital Services and the Architecture team have created an application template that includes pluggable API backends (Node/Nest, Python/FastAPI, Go/Fiber, Java/Quarkus) and frontend (React, Vite), with a deployment pipeline to the OpenShift platform with an option to include a PostgreSQL/PostGIS database and leveraging the backup container provided by the BC DevExchange.  This is a great resource to get product teams up and running.

[QuickStart OpenShift](https://github.com/bcgov/quickstart-openshift)

[QuickStart OpenShift Emerald](https://github.com/bcgov/quickstart-openshift-emerald)

[OpenShift - Recommended Architecture](https://apps.nrs.gov.bc.ca/int/confluence/display/AR/OpenShift+-+Recommended+Architecture)

technologies
============

This repository has the recommend technologies within the repo. In general though we suggest using the below technologies. It is not recommended to deviate from the baseline technologies not in QSOS.

frontend - Vue.JS / React.JS

backend - Node.JS / Java

database - Postgres

References
==========

[https://github.com/bcgov/quickstart-openshift](https://github.com/bcgov/quickstart-openshift)