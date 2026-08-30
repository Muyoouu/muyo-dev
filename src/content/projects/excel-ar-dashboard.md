---
title: "Accounts Receivable Dashboard"
description: "Excel dashboard for tracking accounts receivable, built on a real data model with VBA-generated reports."
tags: ["Excel", "VBA", "Data Modeling"]
order: 4
date: 2023-08-01
repo: https://github.com/Muyoouu/excel-ar-dashboard
role: "Developer"
demo: https://www.youtube.com/watch?v=KTbFauEHCGE
image: /images/projects/ar-dashboard.webp
---

## The problem

Businesses need to keep an eye on what their customers owe them, because accounts receivable health follows cash flow directly. Scattered formulas across sheets make that hard, since aging and outstanding balances drift out of sync as data changes. I had reviewed accounts receivable professionally during my PwC audit days, so I knew which numbers matter, how aging buckets should behave, and where the usual data mistakes hide.

## What I built

An Excel dashboard that sits on a real data model, where invoices, customers, and payments are structured properly, so metrics stay correct as the data changes. It has two pages, an overview and a per-customer detail view, connected through navigation buttons. The dashboard tracks aging buckets, overdue categories, and credit limit usage, and VBA hides Excel's built-in chrome, giving users a clean dashboard view without rows and columns in the way.

## How it works

A dynamic as-of-date acts as the base for every metric calculation, and users change it through a date picker built with VBA. All charts and key figures update against that date, so the whole dashboard stays consistent with a single choice.

VBA handles the automation side, from report generation to the interactive UI elements. Excel formulas drive the calculation layer on top of the data model, so the numbers stay live when new data comes in.

The project is open source. The full source is on [GitHub](https://github.com/Muyoouu/excel-ar-dashboard), and a [demo video](https://www.youtube.com/watch?v=KTbFauEHCGE) walks through the dashboard.
