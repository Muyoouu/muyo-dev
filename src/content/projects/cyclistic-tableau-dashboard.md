---
title: "Cyclistic Rider Dashboard in Tableau"
description: "Interactive Tableau dashboard built on the Cyclistic capstone analysis, so the marketing team can explore casual and member rider behavior on their own."
tags: ["Tableau", "Data Viz", "Data Analysis"]
role: "Data Analyst"
order: 6
date: 2023-11-01
featured: false
url: https://medium.com/@musayohanes00/customer-data-analysis-using-python-googles-capstone-project-8264b36d8bc1
repo: https://github.com/Muyoouu/google-capstone-cyclistic
---

This dashboard is the visualization half of my Cyclistic capstone analysis, the piece that turns the analysis findings into something a business team can actually use.

## The problem

The analysis findings sat in notebooks and articles, which is fine for a reader but useless for the marketing team in the capstone scenario. They needed self-serve exploration, a place where they could compare casual and annual member riders and answer their own questions without touching SQL or Python.

## What I built

I built an interactive Tableau dashboard on top of the cleaned trip data, with bar charts, histograms, maps, and heat maps. Every view keeps the casual versus member comparison in front of the viewer, so the two rider groups can be compared side by side from any angle.

## How it works

Each view answers one question. Bar charts compare trip volume between the two rider groups. Histograms show how trip lengths differ, which matters when thinking about what members get out of a subscription. Maps highlight the top stations for each group, and heat maps show when rides happen across the week. In the capstone scenario, the marketing team would use these views to pick where and when to run a conversion campaign, for example targeting weekend afternoons at recreational stations where casual riders cluster.

The analysis behind this dashboard is covered in the sibling project, [Cyclistic Rider Analysis with SQL and Python](/projects/cyclistic-data-analysis/), and in my article, [Diving Into Customer Data Analysis Using Python](/blog/diving-into-customer-data-analysis-using-python/). The repository is open source on [GitHub](https://github.com/Muyoouu/google-capstone-cyclistic).
