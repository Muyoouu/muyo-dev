---
title: "Xero API × Excel Integration"
description: "VBA macros that connect Xero's accounting API to Excel, with OAuth2 implemented from scratch."
tags: ["VBA", "Xero API", "Excel", "OAuth2"]
featured: true
order: 2
date: 2024-06-12
url: https://medium.com/@musayohanes00/navigating-oauth2-authentication-in-vba-3ba524c85171
repo: https://github.com/Muyoouu/vba-xero-api
---

This project connects Xero's accounting API to Microsoft Excel through VBA, so finance teams can pull live data straight into the spreadsheets they already work in. Xero handles authentication with OAuth2, and VBA has no built-in support for it, so I implemented the full auth flow from scratch.

The hardest part was the login step. The OAuth2 flow needs a browser for the user to sign in, and VBA's only built-in browser, Internet Explorer, has been deprecated since 2022. I solved this with the Chrome DevTools Protocol, driving a real Chrome browser from VBA to complete the login. The project builds on the VBA-Web framework for the HTTP side, along with open-source modules for browser automation and UI helpers, and I released it publicly to give back to that community.

Once authorized, the script caches the access and refresh tokens, so users stay logged in for up to 60 days without repeating the login. It also handles token refresh automatically in the background. When a user belongs to multiple Xero organizations, the script retrieves the authorized tenant IDs, saves them inside the Excel file, and lets the user pick which organization to pull data from.

On top of the auth layer, the tool calls the Xero API and loads reports into a formatted Excel sheet. The first supported report is the Profit and Loss statement, with a simple user interface for logging in, choosing a report period, selecting the organization, and generating the output. A cache-clear option resets tokens and stored organization details when needed.

The end result was no more manual exports and copy-paste reconciliation for the finance team. I wrote a step-by-step guide explaining how I implemented the whole authentication flow, which you can read in [Navigating OAuth2 Authentication in VBA](/blog/navigating-oauth2-authentication-in-vba/). The full source is available on [GitHub](https://github.com/Muyoouu/vba-xero-api).
