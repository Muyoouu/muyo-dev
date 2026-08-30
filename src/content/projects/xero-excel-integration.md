---
title: "Xero API × Excel Integration"
description: "VBA macros that connect Xero's accounting API to Excel, with OAuth2 implemented from scratch."
tags: ["VBA", "Xero API", "Excel", "OAuth2"]
featured: true
order: 2
date: 2024-06-12
url: https://medium.com/@musayohanes00/navigating-oauth2-authentication-in-vba-3ba524c85171
repo: https://github.com/Muyoouu/vba-xero-api
role: "Developer & Maintainer"
demo: https://www.youtube.com/watch?v=iIuOBq_MYrw
image: https://raw.githubusercontent.com/Muyoouu/vba-xero-api/main/img/user_interface.jpg
---

## The problem

Accounting professionals live in Excel. They plan, analyze, and reconcile inside spreadsheets, and pulling Xero data usually means manual exports and copy-paste work. Xero secures its API with OAuth2, and VBA has no built-in support for that flow. Part of the flow also needs a browser for the user to sign in, and the only browser VBA offers out of the box, Internet Explorer, has been deprecated since 2022.

## What I built

A set of VBA macros that connects Excel to the Xero API, released publicly on GitHub. I implemented the full OAuth2 flow from scratch, driving a real Chrome browser through the Chrome DevTools Protocol to complete the login where Internet Explorer used to be. The project builds on the VBA-Web framework for the HTTP side, along with open-source modules for browser automation and UI helpers, and making it public was my way of giving back to that community.

## How it works

On top of the auth layer sits a simple interface inside Excel with options for logging in, choosing a report period, selecting an organization, and generating the output. The first supported report is the Profit and Loss statement, loaded into a formatted sheet. A cache-clear option resets tokens and stored organization details when needed.

The script caches the access and refresh tokens, so users stay logged in for up to 60 days without repeating the login, and it refreshes tokens automatically in the background. When a user belongs to multiple Xero organizations, the script retrieves the authorized tenant IDs, saves them inside the Excel file, and lets the user pick which organization to pull data from.

I wrote a step-by-step guide on implementing the whole authentication flow in [Navigating OAuth2 Authentication in VBA](/blog/navigating-oauth2-authentication-in-vba/). The full source is available on [GitHub](https://github.com/Muyoouu/vba-xero-api), and there is a [demo video](https://www.youtube.com/watch?v=iIuOBq_MYrw) showing the tool in action.
