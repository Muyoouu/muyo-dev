---
title: "Global Energy Consumption Dashboard"
description: "An interactive Tableau dashboard on global energy use per capita: pick a country and a year, and see how it compares with 2021."
tags: ["Tableau", "Data Viz", "LOD Expressions"]
featured: true
order: 3
date: 2023-11-01
role: "Data Analyst"
demo: https://public.tableau.com/views/EnergyUseOvertheYears-MakeoverMonday2023w33/EnergyUsage?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link
---

## The problem

Energy use per capita varies a lot between countries, and the original visualization for this [Makeover Monday](https://www.makeovermonday.co.uk/) challenge (2023 week 33) showed only a static snapshot by country. It had no time dimension, so it could not answer a simple question: does a person in a given country use more or less energy than in previous years?

## What I built

An interactive Tableau dashboard that takes a country and a year and answers that question against the country's 2021 figure. Users pick both, and the dashboard gives an immediate answer with dynamic green and red indicators, green for savings and red for increased use. The time-series angle was the piece the original viz lacked.

## How it works

Two charts sit side by side, and the area between the selected year and 2021 is highlighted to emphasize the difference in energy use over time. The comparisons are built on custom calculated fields and LOD expressions.

The design stays minimal, cutting everything that does not serve the comparison between the two years.
