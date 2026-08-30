---
title: "Cyclistic Rider Analysis with SQL and Python"
description: "Analysis of 3.5 million bike-share trips for the Google Data Analytics capstone, with SQL cleaning in PostgreSQL and exploratory analysis in Python and pandas."
tags: ["SQL", "PostgreSQL", "Python", "Pandas", "Data Analysis"]
role: "Data Analyst"
order: 5
date: 2023-10-31
featured: false
url: https://medium.com/@musayohanes00/data-cleaning-with-sql-googles-capstone-project-712420fbd1ad
repo: https://github.com/Muyoouu/google-capstone-cyclistic
---

Cyclistic is the fictional bike-share company from the Google Data Analytics capstone. I worked with a full year of real trip data from their Chicago operation, around 3.5 million rides in a 500MB dataset. The dataset itself is public bike-share trip data.

## The problem

Cyclistic wants casual riders converted into annual members, and the marketing team needs evidence before spending money on that goal. The raw data was too messy to trust, so it needed serious cleaning first, and then someone had to find out how the two rider groups actually behave.

## What I built

The first half was a cleaning pipeline in SQL, written in PostgreSQL through DBeaver. The dataset had duplicate rows, NULL values in key columns, foreign key mismatches between tables, and ride durations that made no sense. I deduplicated the trips, handled the missing values, fixed the foreign key mismatches, and removed invalid durations so every later calculation would stand on trustworthy numbers.

The second half was exploratory analysis in Python with pandas, done in Jupyter Notebook. I removed outliers with the IQR method so a handful of strange rides would not skew the statistics, then looked at patterns across time of day, weekdays, and stations, with plotly charts to make the contrasts visible.

## How it works

The findings told a clear story. Annual members made up about 76 percent of all trips and rode three times more than casual riders. Members peak at 8AM and 5PM on weekdays, which matches commuting hours, while casual riders favor afternoons between 1PM and 4PM and weekends, which points at leisure. Station data showed the same split, casual riders favor recreational routes while members stick to commuting routes. That contrast is exactly what a marketing team can act on.

The dataset is public bike-share trip data, so anyone can repeat this work. I wrote two articles that go deeper into each half, [Data Cleaning with SQL](/blog/data-cleaning-with-sql/) and [Diving Into Customer Data Analysis Using Python](/blog/diving-into-customer-data-analysis-using-python/). The full notebook and scripts are open source on [GitHub](https://github.com/Muyoouu/google-capstone-cyclistic), and the dashboard half of this project lives in [the Tableau dashboard page](/projects/cyclistic-tableau-dashboard/).
