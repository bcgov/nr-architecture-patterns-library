---
sidebar_position: 1
---
<table class="wrapped"><colgroup></colgroup><tbody><tr><th>Status</th><td><div class="content-wrapper"><p><ac:structured-macro ac:name="status" ac:schema-version="1" ac:macro-id="a2e29e0a-14d5-42cd-922b-bfb7364904e6"><ac:parameter ac:name="colour">Green</ac:parameter><ac:parameter ac:name="title">Published</ac:parameter></ac:structured-macro></p></div></td></tr><tr><th>Overview</th><td>The page is intended to provide an initial checklist to guide teams in the process of migrating SVN repos to Github</td></tr></tbody></table>

Advantages to having code in the open:
======================================

*   Lower cost
*   Community visibility and collaboration
*   Encourages good development practices
*   Github has a suite of extra tools (such as GitHub actions)
*   Aligns with the [Digital Code of Practice](https://digital.gov.bc.ca/policies-standards/dcop/)
*   Aligns with the [BCGov Digital Principles](https://github.com/bcgov/digital-principles) - Working in the Open, Take an Ecosystem Approach
*   An extensive number of tests and tools are only free for open source projects

General Principles:
===================

*   Code (like data) should take an "Open by Default" position and closed by exception
*   The de-facto standard public code repository platform is Github
*   On exception, the private code repository platform is Github Enterprise

Under what circumstances should a code repository be Private?
=============================================================

*   There are algorithms in the code that would bring harm to individuals, industry or the Province
*   Information is hidden with intent, like state data from ArgoCD deployments
*   The presense of secrets, passwords, personal information or other sensitive data
    *   Please be aware that we provide resources and assistance in preventing this situation

<table class="relative-table wrapped"><colgroup></colgroup><tbody><tr><th>What do I need to do?</th><th>How do I do that?</th><th>What tools can help?</th></tr><tr><td>Obtain consent from the application/product owner to bring the code in the open; share this content to help inform the conversation</td><td>Identify the business owner of the codebase, obtain and document consent</td><td><a class="" href="https://a100.gov.bc.ca/int/irs/viewAllApps.do">https://a100.gov.bc.ca/int/irs/viewAllApps.do</a></td></tr><tr><td>Ensure there is no application data in the code repository (aside from test data)</td><td></td><td></td></tr><tr><td>Scan the code for secrets, passwords or sensitive data</td><td></td><td><p><a href="https://github.com/aquasecurity/trivy-action">Trivy</a> can perform secret scanning before and after a repo is provided publicly&nbsp;</p><p>GitHub has built-in tools to detect accidentally adding this information</p></td></tr><tr><td>Enable built in features of Github such as Dependabot to scan code and recommend remediation</td><td>Explore the "Security" tab in Github</td><td><p>Dependabot&nbsp;<a class="" href="https://docs.github.com/en/code-security/dependabot">https://docs.github.com/en/code-security/dependabot</a></p><p>Renovate <a class="" href="https://docs.renovatebot.com/">https://docs.renovatebot.com/</a> ie - <a class="" href="https://github.com/bcgov/nr-forests-access-management/blob/main/renovate.json">https://github.com/bcgov/nr-forests-access-management/blob/main/renovate.json</a></p><p>Sonarcloud - ie <a class="" href="https://sonarcloud.io/project/overview?id=forest-client-frontend">https://sonarcloud.io/project/overview?id=forest-client-frontend</a></p></td></tr><tr><td>Ensure the underlying codebase, dependent libraries and software versions contain no significant and exploitable vulnerabilities</td><td>Contact the security team about using FETT to scan the existing code repository</td><td><ac:link></ac:link></td></tr><tr><td>Ensure that the Province of BC owns the code</td><td></td><td><a href="https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/COI-Priv-IP.md">https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/COI-Priv-IP.md</a></td></tr><tr><td>Apply an open source license</td><td></td><td><a href="https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/Licenses.md">https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/Licenses.md</a></td></tr><tr><td>Choose an appropriate name for your repository</td><td>prefix each repository with "nr-"<ul><li>e.g. nr-&lt;app-name&gt;</li><li>e.g. nr-fom-api</li></ul></td><td></td></tr><tr><td>Identify at least two owners for the repository</td><td>Identify a product owner and a technical specialist</td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table>

References:
===========

[https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/Content-Approval-Checklist.md](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/Content-Approval-Checklist.md)