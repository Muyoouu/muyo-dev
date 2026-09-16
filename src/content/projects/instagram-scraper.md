---
title: "Instagram Engagement Scraper"
description: "Python scripts that scrape public Instagram profiles, store everything as JSON, and pick up where they left off after a rate limit knocks them down."
tags: ["Python", "Web Scraping", "Instagrapi", "ScrapeOps", "Data Analysis"]
role: "Developer"
order: 7
date: 2023-11-16
featured: false
url: https://medium.com/@musayohanes00/how-to-scrape-and-analyze-instagram-engagements-data-ae01197c652b
repo: https://github.com/Muyoouu/instagram-scraper
---

Built because I wanted to see how engagement behaves across a lot of posts rather than eyeball one profile page.

## The problem

I wanted to analyze the engagement of a public influencer account, which had 1,281 posts, of which 1,269 were scraped. Collecting that many posts by hand was impossible, and the usual scraping approaches run straight into rate limits and IP blocks.

## What I built

The scripts are built on the Instagrapi module, which handles the API requests, and they scrape public profiles only. Instagrapi moves the data and nothing else, so the rest of the pipeline is mine. I added proxy support through ScrapeOps to get around IP blocks, JSON storage for every post, and logging to track progress and catch bugs. A checkpoint resumes a run instead of starting it over.

A companion script parses the JSON output into a CSV file in an Excel-friendly format, so the data flows straight into spreadsheet analysis.

## How it works

With the data in Excel, I ran an engagement analysis on the scraped posts using t-statistic confidence intervals. A 95% CI on the average engagement gives an honest range instead of the single number that one viral post could distort. At that confidence level, the true average for the account sits somewhere between 52,532 and 64,502 engagements per post.

The whole workflow is written up in [How to Scrape and Analyze Instagram Engagements Data](/blog/how-to-scrape-and-analyze-instagram-engagements-data/).
