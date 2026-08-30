---
title: "Accounts Receivable Dashboard"
description: "Excel dashboard for tracking accounts receivable, built on a real data model with VBA-generated reports."
tags: ["Excel", "VBA", "Data Modeling"]
order: 4
date: 2023-08-01
repo: https://github.com/Muyoouu/excel-ar-dashboard
---

An Excel dashboard for tracking accounts receivable, built to help businesses monitor the health of what customers owe them. Instead of scattered formulas across sheets, it sits on a real data model where invoices, customers, and payments are structured properly, so aging and outstanding balances stay correct as the data changes.

The dashboard has two pages, an overview and an individual customer analysis, connected through navigation buttons. A dynamic as-of-date acts as the base for every metric calculation, and users can change it through a date picker built with VBA. A focused view hides Excel's built-in interface, giving users a clean dashboard instead of rows and columns.

VBA handles the automation side, from report generation to the interactive UI elements. The whole thing is driven by Excel formulas on top of the calculation layer, so the metrics stay live when new data comes in.

Skills from my PwC audit days went straight into this project. Reviewing accounts receivable was literally part of my old job, so I knew which numbers matter, how aging buckets should behave, and where the usual data mistakes hide. That context shaped both the data model and the metrics shown on screen.

The project is open source, and the full source is available on [GitHub](https://github.com/Muyoouu/excel-ar-dashboard).
