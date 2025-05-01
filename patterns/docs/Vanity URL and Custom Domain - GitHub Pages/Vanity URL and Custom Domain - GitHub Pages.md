---
sidebar_position: 6
---
<table class="wrapped"><colgroup class=""></colgroup><tbody class=""><tr class=""><th>Status</th><td><div class="content-wrapper"><p>GreenPublished</p></div></td></tr><tr class=""><th>Overview</th><td><p>The purpose of this page is to outline some of the key information around how to setup custom domain and vanity url when deploying websites using GitHub Pages.</p></td></tr></tbody></table>

3truefalse

Background
==========

With more an more applications using GitHub Pages there was a need to explore the custom sub domain capability of GitHub rather than using the default GitHub Pages URL (`[yourusername.github.io](http://yourusername.github.io)`).

[Supported custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#supported-custom-domains)
==================================================================================================================================================================================

GitHub Pages works with two types of domains: subdomains and apex domains. For a list of unsupported custom domains, see [Troubleshooting custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages#custom-domain-names-that-are-unsupported).

| Supported custom domain type | Example |
| --- | --- |
| `www` subdomain | `[www.example.com](http://www.example.com)` |
| Custom subdomain | `[blog.example.com](http://blog.example.com)` |
| Apex domain | `[example.com](http://example.com)` |

You can set up either or both of apex and `www` subdomain configurations for your site.

Setup for custom domain for GitHub Pages
========================================

Step 1: Go to your domain registrar and configure DNS
-----------------------------------------------------

*   Open a ticket NRM IT Portal - Create Domain and add DNS entry for you custom subdomain ( Sample Jira Ticket CSNR - JIRA6f96f671-5bc2-34be-9d70-11dd457b54f7SD-144223)
*   For a **subdomain** (e.g., `[www.example.com](http://www.example.com)` or `[blog.example.com](http://blog.example.com)`):
    
    Add a **CNAME record**:
    
    makefile`Type: CNAME Name: www (or blog, etc.) Value: [your-username.github.io](http://your-username.github.io)`
    

Step 2 : Add the subdomain [for your](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages#verifying-a-domain-for-your-user-site) GitHub profile
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Note: If you don't see the options described below, make sure you're in your **Profile settings**, not your repository settings. Domain verification happens at the profile level and you need to be org owner.

*   In the upper-right corner of any page on GitHub, click your profile photo, then click **Settings**.
    
*   In the "Code, planning, and automation" section of the sidebar, click **Pages**.
    
*   On the right, click **Add a domain**.
    
*   Under "What domain would you like to add?," enter the domain you wish to verify and select **Add domain**.
    

Step 3 : Add DNS TXT record
---------------------------

*   Follow the instructions under "Add a DNS TXT record" to create the TXT record with your domain hosting service.
    
*   Wait for your DNS configuration to change, this may be immediate or take up to 24 hours. You can confirm the change to your DNS configuration by running the `dig` command on the command line. In the command below, replace `USERNAME` with your username and `[example.com](http://example.com)` with the domain you're verifying. If your DNS configuration has updated, you should see your new TXT record in the output.
    

Step 3 : Verify the DNS changes
-------------------------------

*   After confirming that your DNS configuration has updated, you can verify the domain. If the change wasn't immediate, and you have navigated away from the previous page, return to your Pages settings by following the first few steps and, to the right of the domain, click and then click **Continue verifying**.
    
*   To verify your domain, click **Verify**.
    
*   To make sure your custom domain remains verified, keep the TXT record in your domain's DNS configuration.
    

Step 4 : Update the GitHub Pages
--------------------------------

*   After verifying your DNS configuration and custom domain its time to update your GitHub Pages to point to the right address.
*   Go to general settings of your GithHub pages and in the Pages section update the Custom domain.
*   Click on Save and once DNS check is successful your website is live with new domain