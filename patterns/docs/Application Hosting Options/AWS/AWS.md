---
sidebar_position: 1
---
<table class="wrapped relative-table"><colgroup></colgroup><tbody><tr><th>Status</th><td><div class="content-wrapper"><p><ac:structured-macro ac:name="status" ac:schema-version="1" ac:macro-id="a2e29e0a-14d5-42cd-922b-bfb7364904e6"><ac:parameter ac:name="colour">Green</ac:parameter><ac:parameter ac:name="title">Published</ac:parameter></ac:structured-macro>&nbsp;</p></div></td></tr><tr><th>Overview</th><td><div class="content-wrapper"><p>This page is intended to provide a recommendation when developing custom applications on AWS</p></div></td></tr></tbody></table>

Hosting Options
===============

When developing a custom application on the AWS Platform, we recommend 1 of 2 baseline architectures. Containers over RDS, or Serverless (lambda) over NoSQL (DynamoDB).

For containers over RDS, QSOS has been adapted be deployed on AWS. _Note: This is still a work in progress._

For serverless, there is currently no quickstart.

_Note: The same principals apply when using the quickstart, we do not recommend deviating away from the baseline technologies in the repo._

OpenShift QuickStart Application
================================

Our friends and collaborators in Forestry Digital Services and the Architecture team have created an application template that includes pluggable API backends (Node/Nest, Python/FastAPI, Go/Fiber, Java/Quarkus) and frontend (React, Vite), with a deployment pipeline to the OpenShift platform with an option to include a managed database.  This is a great resource to get product teams up and running.

[Quickstart AWS Serverless](https://github.com/bcgov/quickstart-aws-serverless)

[Quickstart AWS Containers](https://github.com/bcgov/quickstart-aws-containers)

Additional Information
======================

[https://developer.gov.bc.ca/docs/default/component/public-cloud-techdocs/](https://developer.gov.bc.ca/docs/default/component/public-cloud-techdocs/)

References
==========

[https://github.com/bcgov/quickstart-aws-containers](https://github.com/bcgov/quickstart-aws-containers)