---
title: "How to Scrape and Analyze Instagram Engagements Data"
description: "Scraping public Instagram engagement data with Instagrapi in Python, then comparing influencer performance with confidence intervals."
pubDate: 2023-11-15
url: "https://medium.com/@musayohanes00/how-to-scrape-and-analyze-instagram-engagements-data-ae01197c652b"
tags: [python, instagram, social-media-analytics, web-scraping, inferential-statistics]
---

![](https://cdn-images-1.medium.com/max/1024/1*FqFr0D3-FBMwI0mlDj5VgQ.png)

*Image by [rawpixel.com](https://www.freepik.com/free-psd/website-template-laptop-screen_3383792.htm#query=screen%20mockup&position=7&from_view=search&track=ais) on [Freepik](https://www.freepik.com/free-psd/website-template-laptop-screen_3383792.htm#query=screen%20mockup&position=7&from_view=search&track=ais)*

### Demonstrated with Python and Excel

In this era of social media, Instagram influencers have a significant impact on marketing businesses and products. From a business perspective, how should we choose good influencers to work with?

When we say “*good”*, we’re referring to how well they perform in influencing. Focusing on quantitative measures, a common metric used is the engagement of their content. Knowing what we need, let’s jump in to scrape the data.

## Python for Web-Scraping Instagram

Instagram has strict access controls over its data and API. Fortunately, someone reverse-engineered Instagram and shared an unofficial API that we can use (with limitations). Thanks to [Instagrapi](https://github.com/subzeroid/instagrapi), the Python module that guides us to accessible Instagram API endpoints.

### Analysis Target and Ethical Scraping

A rule of thumb for ethical scraping is to only extract publicly accessible data. We will only scrape a public-influencer account, and considering privacy, we will anonymize the profile for this tutorial.

![](https://cdn-images-1.medium.com/max/1024/1*zlBiNcwnzjhR-0-jl3FZMw.png)

*Picture 1 — Screenshot of the target Instagram influencer profile*

An influencer with 4.8 million followers and 1,281 posts seems to be a suitable example for this analysis.

### Building Script: Add Proxy and Features

The Instagrapi Python module only handles the API requests, so we still have to parse and store the response. To make sure it works, we will use a proxy service and initiate logging in the process. I won’t go deep into the code details, but in summary, the features included are:

- Parsing and storing the scraped data in JSON format
- Setting a proxy (I used [ScrapeOps](https://scrapeops.io/) service, but you can use any proxy that works)
- Logging to track the process and bugs
- Capability to resume unfinished scraping processes

I have shared the script on [my GitHub](https://github.com/Muyoouu/instagram-scraper).

### Scraping Result

Long story short, we did it — successfully scraped 1,269 out of 1,281 posts.

![](https://cdn-images-1.medium.com/max/1024/1*b-qcB8E0pxsJWnAXDjZTuA.png)

*Picture 2 — Log records of the scraping process*

It seems the remaining posts are currently hidden or archived, and as a result, can’t be accessed. Don’t worry; it’s only a small portion. We have collected enough data to proceed with the analysis.

## Influencer Engagements Analysis in Excel

In the Instagram context, we measure engagements as the sum of likes and comments in a post. These measures will be the main subject of our analysis.

### Trend Analysis

First, let’s evaluate its growth; a trend analysis would be a well-fit tool for this job.

![](https://cdn-images-1.medium.com/max/1024/1*PSLJY29CGZq5mUZ1iNBe9g.png)

*Picture 3— Chart reflecting the growth of the influencer in terms of engagements*

In summary, the influencer has experienced a decline in engagements over the past year, indicating poor performance.

While the trend analysis has done well to illustrate the growth, it might not be the most suitable tool for comparison. Comparing trends requires significant effort for judgments and comprehensions. Therefore, let’s utilize inferential statistics to get a comparable measure.

### Inferential Statistic: Confidence Interval of Engagements Average

It’s quite simple; using the t-statistic, we can predict the true average of an unknown population from sample numbers. Our beloved Excel provides functions to do this quickly, such as CONFIDENCE.T, complemented with STDEV.S and COUNT.

![](https://cdn-images-1.medium.com/max/557/1*jh5yj4VdyaKNr6fZxy5FaA.png)

*Picture 4— Calculated Confidence Interval using t-statistic in Excel*

By utilizing historical average engagements per post as our sample data, we have derived a prediction with a 95% confidence level. This prediction suggests that the true average of the unknown population, potentially encompassing near-future engagement averages, is likely to fall within the range of 52,532 to 64,502.

It’s crucial to note that this prediction relies on the assumption that engagement patterns and variability observed in historical data will persist into the future. Our confidence in this prediction rests on the belief that the trends and fluctuations experienced in the past will continue to influence forthcoming engagements, allowing us to extend our insights with reasonable assurance.

These numbers are comparable, allowing the business to objectively evaluate based on quantitative measures. However, it’s essential to recognize that this is just one factor to consider, and comparing solely based on this measure is not advised.

That’s it for now. Thanks for reading; I hope it was useful.

As I continue to learn, feedback helps me grow, and I highly appreciate your claps and comments.
