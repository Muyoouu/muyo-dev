---
title: "Cyclistic Rider Analysis with SQL and Python"
description: "My Google Data Analytics capstone: 3.5 million Chicago bike-share trips cleaned up in PostgreSQL and taken apart in pandas."
tags: ["SQL", "PostgreSQL", "Python", "Pandas", "Data Analysis"]
role: "Data Analyst"
order: 5
date: 2023-10-31
featured: false
url: https://medium.com/@musayohanes00/data-cleaning-with-sql-googles-capstone-project-712420fbd1ad
repo: https://github.com/Muyoouu/google-capstone-cyclistic
---

Cyclistic is the fictional bike-share company from the Google Data Analytics capstone. The data behind it is real: a full year of Chicago rides in a 500MB dataset.

## The problem

Cyclistic wants casual riders converted into annual members, and the marketing team needs evidence before spending money on that goal. The raw data was too messy to trust, so it needed serious cleaning first, and then someone had to find out how the two rider groups actually behave.

## What I built

The first half was a cleaning pipeline in SQL, written in PostgreSQL through DBeaver. The dataset had duplicate rows, NULL values in key columns, station names that disagreed between tables, and ride durations that made no sense. I deduplicated the trips, turned 858,393 blank gender values into NULLs, reconciled the station names against the station table (17,122 on the origin side, 17,106 on the destination side), and dropped durations that could not be real. Every later calculation stood on numbers that had been through that pass.

The second half was exploratory analysis in Python with pandas, matplotlib and seaborn, done in Jupyter Notebook. I used the IQR method to size up the longest rides, kept the ones that were still plausible, and grouped durations into buckets rather than dropping them. Then I looked at patterns across time of day, weekdays, and stations, with plotly carrying the maps.

## How it works

Annual members made up about 76 percent of all trips and rode three times more than casual riders. Members peak at 8AM and 5PM on weekdays, which matches commuting hours, while casual riders favor afternoons between 1PM and 4PM and weekends, which points at leisure. Station data showed the same split, casual riders favor recreational routes while members stick to commuting routes. That contrast is exactly what a marketing team can act on.

The data is public, so anyone can repeat this work. I wrote two articles that go deeper into each half, [Data Cleaning with SQL](/blog/data-cleaning-with-sql/) and [Diving Into Customer Data Analysis Using Python](/blog/diving-into-customer-data-analysis-using-python/), and the dashboard half of the project lives in [the Tableau dashboard](/projects/cyclistic-tableau-dashboard/).
