---
title: "Cyclistic Customer Analysis — Google Capstone"
description: "Exploratory analysis of about 3.6 million bike-share trips for the Google Data Analytics Certificate. SQL cleaning in PostgreSQL, Python EDA with pandas, and a Tableau story."
tags: ["Python", "SQL", "Pandas", "Tableau", "Data Analysis"]
order: 5
date: 2023-10-31
url: https://medium.com/@musayohanes00/customer-data-analysis-using-python-googles-capstone-project-8264b36d8bc1
repo: https://github.com/Muyoouu/google-capstone-cyclistic
featured: false
---

This was my capstone project for the Google Data Analytics Certificate, and my first serious end-to-end data analysis. The case study asks how a bike-share company called Cyclistic could convert casual riders into annual members, using a full year of real trip data, around 3.6 million rides.

Cleaning came first, and I did it in SQL using PostgreSQL through DBeaver. The raw data had duplicate rows, NULL values in key columns, and ride duration values that made no sense, like trips ending before they started. I deduplicated the trips, handled the missing values, fixed foreign key mismatches between tables, and validated ride durations so the analysis would stand on trustworthy numbers.

With clean data, I moved to Python for exploratory analysis using pandas. I removed outliers with the IQR method so a handful of strange rides would not skew the statistics, then dug into patterns over time. The clear signal was the difference between member and casual riders. Members rode in tight peaks around commute hours on weekdays, while casual riders spread their trips across weekends and leisure hours.

Station data told the same story from a different angle. The top stations for members clustered around areas people travel to for work, while casual riders favored stations near attractions and parks. I built visualizations with plotly to make these contrasts easy to see, and finished with a Tableau story that walks through the findings and ends with recommendations for the marketing team.

This project is where I learned that most analysis work happens before the fun charts, in the slow careful job of making data trustworthy. It also sits at the root of my path into software, since writing those first SQL queries and Python scripts is what pulled me toward engineering. For deeper detail on both halves of the work, I wrote two articles, [Data Cleaning with SQL](/blog/data-cleaning-with-sql/) and [Diving Into Customer Data Analysis Using Python](/blog/diving-into-customer-data-analysis-using-python/).
