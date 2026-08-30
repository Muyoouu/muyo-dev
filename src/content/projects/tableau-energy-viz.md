---
title: "Global Energy Consumption Dashboard"
description: "Interactive Tableau dashboard on global energy use, covering country comparisons, growth rates, and energy mix over time."
tags: ["Tableau", "Data Viz", "LOD Expressions"]
featured: true
order: 3
date: 2023-11-01
role: "Data Analyst"
demo: https://public.tableau.com/views/EnergyUseOvertheYears-MakeoverMonday2023w33/EnergyUsage?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link
---

## The problem

Energy use per capita varies a lot between countries, and the original visualization for this [Makeover Monday](https://www.makeovermonday.co.uk/) challenge (2023 week 33) showed only a static snapshot by country. It had no time dimension, so there was no way to answer a simple question, does a person in a given country use more or less energy than in previous years.

## What I built

An interactive Tableau dashboard comparing energy use per capita of a chosen country between a selected year and 2021. Users pick a country and a year, and the dashboard gives an immediate answer with dynamic green and red indicators, green for savings and red for increased use. The time-series angle was the piece the original viz lacked.

## How it works

Two charts sit side by side, and the area between the selected year and 2021 is highlighted to emphasize the difference in energy use over time. Custom calculated fields and LOD expressions power the interactivity behind the scenes, keeping the comparisons accurate and responsive to every selection.

The design stays minimal, cutting everything that does not serve the comparison between the two years. You can explore the live dashboard on [Tableau Public](https://public.tableau.com/views/EnergyUseOvertheYears-MakeoverMonday2023w33/EnergyUsage?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link).
