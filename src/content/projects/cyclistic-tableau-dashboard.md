---
title: "Cyclistic Rider Dashboard in Tableau"
description: "The Tableau half of my Cyclistic capstone, so the marketing team can dig into rider behavior without touching my SQL."
tags: ["Tableau", "Data Viz", "Data Analysis"]
role: "Data Analyst"
order: 6
date: 2023-11-01
featured: false
url: https://medium.com/@musayohanes00/customer-data-analysis-using-python-googles-capstone-project-8264b36d8bc1
repo: https://github.com/Muyoouu/google-capstone-cyclistic
demo: https://public.tableau.com/views/Cyclicstic-TheBike-SharingCompany/Howdiffers
---

## The problem

The analysis findings sat in notebooks and articles, which is fine for a reader but useless for the marketing team in the capstone scenario. They needed self-serve exploration, a place where they could compare casual and annual member riders and answer their own questions.

## What I built

I built an interactive Tableau dashboard on top of the cleaned trip data, with bar charts, histograms, maps, and heat maps. Every view keeps the casual versus member comparison on screen, whichever question you are asking.

## How it works

Each view answers one question. Bar charts compare trip volume between the two rider groups. Histograms show how trip lengths differ, which matters when thinking about what members get out of a subscription. Maps highlight the top stations for each group, and heat maps show when rides happen across the week. The marketing team would use these views to pick where and when to run a conversion campaign, for example targeting weekend afternoons at the recreational stations where casual riders cluster.

The dashboard also joins the trips to monthly average temperatures for Chicago in 2016, so the seasonal dip in rides sits next to the weather that explains it.

The analysis behind the dashboard is in [Cyclistic Rider Analysis with SQL and Python](/projects/cyclistic-data-analysis/), and the Python side is written up in [Diving Into Customer Data Analysis Using Python](/blog/diving-into-customer-data-analysis-using-python/).
