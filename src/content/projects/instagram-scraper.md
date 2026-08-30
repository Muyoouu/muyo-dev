---
title: "Instagram Engagement Scraper"
description: "Python scripts that scrape public Instagram profiles, store everything as JSON, and pick up where they left off after a rate limit knocks them down."
tags: ["Python", "Web Scraping", "Data Analysis"]
role: "Developer"
order: 7
date: 2023-11-16
featured: false
url: https://medium.com/@musayohanes00/how-to-scrape-and-analyze-instagram-engagements-data-ae01197c652b
repo: https://github.com/Muyoouu/instagram-scraper
---

A set of Python scripts for scraping engagement data from public Instagram profiles, built because I wanted to study how engagement behaves across a large pool of posts rather than eyeballing a profile page.

## The problem

I wanted to analyze the engagement of a public influencer account, which had 1,281 posts, of which 1,269 were scraped. Collecting that many posts by hand was impossible, and the usual scraping approaches run straight into rate limits and IP blocks.

## What I built

The scripts are built on the Instagrapi module, which handles the API requests, and they scrape public profiles only. Instagrapi alone only moves data, so I added the surrounding machinery myself, proxy support through the ScrapeOps service to avoid IP blocks, JSON storage for the scraped posts, logging to track progress and identify bugs, and resume from a checkpoint after interruptions so a failed run does not start over.

A companion script parses the JSON output into a CSV file in an Excel-friendly format, so the data flows straight into spreadsheet analysis.

## How it works

With the data in Excel, I ran an engagement analysis on the scraped posts using t-statistic confidence intervals, a 95% CI on the average engagement, which gives an honest range for typical engagement instead of a single number that one viral post could distort.

The whole workflow is documented step by step in my Medium article, [How to Scrape and Analyze Instagram Engagements Data](https://medium.com/@musayohanes00/how-to-scrape-and-analyze-instagram-engagements-data-ae01197c652b). The scripts are open source on [GitHub](https://github.com/Muyoouu/instagram-scraper).
