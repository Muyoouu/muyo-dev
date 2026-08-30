---
title: "Data Cleaning with SQL — Google's Capstone Project"
description: "A step by step SQL walkthrough for cleaning a bike trip dataset, covering deduplication, standardization, and validation of real world data."
pubDate: 2023-10-27
url: "https://medium.com/@musayohanes00/data-cleaning-with-sql-googles-capstone-project-712420fbd1ad"
tags: [google-data-analytics, data-cleaning, sql, data-validation]
---

### Google Data Analytics Capstone Project

## Data Cleaning with SQL

### A Practical Guide in Data Analysis

![Pair of hand cleaning work desk with gloves, wipe cloth, and cleaning sprays](https://cdn-images-1.medium.com/max/1024/1*KRBDmXjinKBie8reeRIxwg.jpeg)

*Photo by [Towfiqu barbhuiya](https://unsplash.com/@towfiqu999999) on [Unsplash](https://unsplash.com/photos/person-in-blue-long-sleeve-shirt-sitting-beside-black-laptop-computer--9gPKrsbGmc)*

As part of the Google Data Analytics Course, I took on a real-world data challenge from a bike-sharing company in Chicago. Before diving into the nitty-gritty of data analysis, we need to start with something important: data cleaning. Since the dataset is quite large, we’re going to use SQL to clean it up. But before we roll up our sleeves, let’s get a grasp of what’s going on.

## Our Mission: Boosting Annual Memberships

Cyclistic, a bike-sharing company in Chicago, although it’s fictional, is based on real data we found in an open source. The simple truth is, Cyclistic’s strategy so far has been all about getting the word out and attracting customers with different pricing plans, including day passes and annual memberships. The catch? They discovered that annual members bring in more money than those who ride occasionally.

Our mission was clear: help the marketing team create strategies based on data to turn casual riders into annual members. To make it work, we needed to figure out how these two groups of customers use Cyclistic bikes in different ways.

Now that we have a grasp of our mission, let’s dive into the heart of the matter. In the upcoming section, we’ll roll up our sleeves and get down to business, learning how to clean this data using SQL.

## Data Prep: Getting Ready

For this project, I got my hands on Cyclistic’s old trip records. It’s essential to know these numbers are legit because we’re dealing with internal data. Even though Cyclistic is made up, the dataset is taken from real bike-sharing records. You can check it out [here](https://divvybikes-marketing-staging.lyft.net/system-data), thanks to Motivate International Inc. and their fancy [data license agreement](https://divvybikes.com/data-license-agreement).

Now, let’s be clear — we’re super serious about data privacy and ethics. We didn’t peek at any rider’s personal info. I focused on the year 2016, which makes sense because that’s when Cyclistic kicked off its bike-sharing service.

### Handling Big Data

Okay, so this dataset is quite the heavyweight, around 500MB big with 3.5 million records. To make sense of it all, I used SQL, specifically PostgreSQL along with DBeaver. The data is split into CSV files, nicely organized by quarters and months. But here’s the tricky part — we need to put it all together to cover the whole 2016 story.

Inside this data bundle, you’ll find two types of tables: trips and stations, each with its own set of info. I’ve got the scoop for you right below:

**trips Table Details: Ride Records**

The trips table is all about people and their bike rides. Some are subscribers (annual members), while others are just folks buying single trips or day passes. Here's what's in there:

- trip_id: Unique ID for each ride
- starttime: When the ride began (in CST)
- stoptime: When the ride ended (also in CST)
- bikeid: Each bike's special ID
- tripduration: How long the ride lasted (in seconds)
- from_station_name: Where the ride kicked off
- to_station_name: Where the ride wrapped up
- from_station_id: ID of the starting station
- to_station_id: ID of the ending station
- usertype: "Customer" for day pass buyers, "Subscriber" for annual members
- gender: Rider's gender (if they're a Subscriber, otherwise it's empty)
- birthyear: Rider's birth year (again, only for Subscribers)

Before we dive into the data, we’ve got to set up the trips table in PostgreSQL like this:

```sql
CREATE TABLE trips (
 trip_id INT4 NOT NULL,
 starttime TIMESTAMP NOT NULL,
 stoptime TIMESTAMP NOT NULL,
 bikeid INT4 NOT NULL,
 tripduration INT4 NOT NULL,
 from_station_id INT4 NOT NULL,
 from_station_name VARCHAR(50) NOT NULL,
 to_station_id INT4 NOT NULL,
 to_station_name VARCHAR(50) NOT NULL,
 usertype VARCHAR(50) NOT NULL,
 gender VARCHAR(50) NULL,
 birthyear INT4 NULL
);
```

**stations Table Details: Station Info**

The stations table, on the other hand, is all about the bike stations. It's got these details:

- id: Special ID for each station
- station_name: The station's name
- latitude: Latitude of the station
- longitude: Longitude of the station
- dpcapacity: How many docks that station has (as of 12/31/2016)
- online_date: When that station went live in the system

Just like before, you set up the stations table in PostgreSQL like this:

```sql
CREATE TABLE stations (
	id INT4 NOT NULL,
	station_name VARCHAR(50) NOT NULL,
	latitude FLOAT4 NOT NULL,
	longitude FLOAT4 NOT NULL,
	dpcapacity INT4 NOT NULL,
	online_date DATE NOT NULL
);
```

## Clean It Up with SQL

Now, the fun part begins. Cleaning data starts with tackling common issues like missing info, duplicates, and other little quirks. After that, we’re going to make sure everything’s in order based on what makes this data unique.

### Step 1: Making a Data Backup

Okay, first things first, let’s back up our data. You know, just in case things get a bit messy during the data cleaning. It’s like a safety net!

```sql
-- Create a Backup for 'stations'
CREATE TABLE stations_backup AS
TABLE stations;

-- Create a Backup for 'trips'
CREATE TABLE trips_backup AS
TABLE trips;
```

### Dealing with Empty Values

Empty cells, null values, whatever you call them, we’ve got them sorted! When we made the tables, we said a strict “No” to any null values. That means no blanks allowed! If someone tries to sneak in a blank, the database will throw a fit.

Now, here’s the deal — the trips table has some fields that can have null values for "Customer" riders. We've got gender and birthyear fields for "Subscriber" riders, but for "Customer" riders, those fields are blank. So, to make sure our "Subscriber" records are complete, we double-checked with some SQL magic:

```sql
SELECT
 trip_id,
 usertype,
 gender,
 birthyear
FROM
 trips
WHERE
 usertype = 'Subscriber' AND
 (gender IS NULL OR birthyear IS NULL);
```

✅Everything’s good. No blank spaces here!

### Spotting Twins: Duplicate Records

Duplicate records, it’s like finding twins in your data! But don’t worry, we’ve got a plan. We’re checking for any records with the same ID, and they should be as unique as your fingerprint. So, let’s see if we’ve got any twins:

```sql
--Find twins in 'stations'
SELECT
 id,
 COUNT(*) AS duplicate_counts
FROM
 stations
GROUP BY
 id
HAVING
 COUNT(*) > 1;
```

✅All clear in the ‘stations’ section. No twins here!

```sql
--Find twins in 'trips'
SELECT
 trip_id,
 COUNT(*) AS duplicate_counts
FROM
 trips
GROUP BY
 trip_id
HAVING
 COUNT(*) > 1;
```

Yep, you guessed it — we’ve got 50 twins in the ‘trips’ section.

No worries, though, they’re not important. So, let’s say goodbye to those extra records:

```sql
--Say goodbye to twins in 'trips'
DELETE FROM
 trips t1
USING
 trips t2
WHERE
 t1.ctid < t2.ctid AND
 t1.trip_id = t2.trip_id;
```

✅Twins deleted! 50 extra records gone from the ‘trips’ section.

What this does is simple — it deletes records that are exactly the same, keeping just one of them. We’re relying on the ctid system column in PostgreSQL to identify duplicates.

### Data Validation: Making Sure Everything’s Right

We’re on a mission to make sure our data is spot-on. No fancy stuff here, just plain old checking and fixing.

### **Double-Checking the Year**

First up, we want to make sure all our data is from the right year — 2016. Let’s peek at the dates in the stations table:

```sql
--Check the 'online_date' range
SELECT
 min(online_date) AS earliest_online_date,
 max(online_date) AS latest_online_date
FROM
 stations;
```

Now, let’s shift our attention to the starttime and stoptime in the trips table:

```sql
--Check the 'online_date' range
SELECT
 min(starttime) AS earliest_start_time,
 min(stoptime) AS earliest_stop_time,
 max(starttime) AS latest_start_time,
 max(stoptime) AS latest_stop_time
FROM
 trips;
```

So, we’re good to go, the 2016 trips are all here! 🤝

### **Categorical Data: Ensuring Consistency and Constraints**

Let’s keep it real — we’re making sure our data is on point. No complex stuff, just a bit of checking and fixing for our categorical data. Here are the fields we’re looking at to make sure everything’s consistent:

- **usertype**

Check the usertype field:

```sql
-- Check distinct categories in 'user_type'
SELECT
 DISTINCT usertype
FROM
 trips;
```

Since the “Dependent” category is like a tiny drop in an ocean of data, we’ll do away with it for now:

```sql
-- Delete 'Dependent' usertype trips data
DELETE FROM
 trips
WHERE
 usertype = 'Dependent';
```

✅We’ve kicked out 40 records of “Dependent” user-type trips data.

- **gender**

Check the gender field:

```sql
-- Check distinct categories in 'gender'
SELECT
 DISTINCT gender
FROM
 trips;
```

Let’s clear out those blank strings and make them NULL:

```sql
-- Update blank string values in 'gender' to NULL
UPDATE
 trips
SET
 gender = NULL
WHERE
 gender != 'Male' AND gender != 'Female'
```

✅We’ve turned 858,393 blank string values in the `gender` field into NULLs.

But here’s the deal — now we might have NULL values in the gender field for "Subscriber" user-types. So, we'll have to deal with that later if it pops up during our data exploration.

```sql
SELECT
 trip_id,
 usertype,
 gender,
 birthyear
FROM
 trips
WHERE
 usertype = 'Subscriber' AND
 (gender IS NULL OR birthyear IS NULL);
```

We found 308 records with NULL values in the gender field. 😅

For now, we’re good to go, but we’ll keep an eye on this during our data exploration phase.

- **Ensure****stations_idand ****station_nameconsistency**

It’s time to ensure that where our trips begin and end make sense, consistent with the whole dataset.

Let’s start by checking if the trip origins, marked by from_station_id and from_station_name in the trips table, match up with the info in the stations table.

Is from_station_id good to go? Let's find out:

```sql
-- Check whether 'trips.from_station_id' matches 'stations.id'
SELECT
 t.from_station_id,
 t.from_station_name,
 s.id,
 s.station_name
FROM
 trips AS t
LEFT JOIN
 stations AS s
 ON t.from_station_id = s.id
WHERE
 s.id IS NULL;
```

✅No results returned, which means no NULL values found. In simple terms, all values in trips.from_station_id match with stations.id.

What about from_station_name? Do they line up with stations.name?

```sql
-- Check whether 'trips.from_station_name' matches 'stations.name'
SELECT
 t.from_station_id,
 t.from_station_name,
 s.id,
 s.station_name
FROM
 trips AS t
LEFT JOIN
 stations AS s
 ON t.from_station_id = s.id
WHERE
 t.from_station_name != s.station_name;
```

We’ve got 17,122 records where trips.from_station_name doesn’t match stations.name.😬

Now, let’s keep it simple — we’ll update trips.from_station_name to match stations.name:

```sql
-- Make 'trips.from_station_name' match 'stations.name'
UPDATE
 trips
SET
 from_station_name = stations.station_name
FROM
 stations
WHERE
 trips.from_station_id = stations.id AND
 trips.from_station_name != stations.station_name;
```

✅We’ve sorted out 17,122 records where trips.from_station_name is now good to go, matching with stations.name.

Moving on, we’re going to make sure that our trips are ending where they’re supposed to. Let’s check to_station_id and to_station_name in the trips table:

```sql
-- Check whether 'trips.to_station_id' matches 'stations.id'
SELECT
 t.to_station_id,
 t.to_station_name,
 s.id,
 s.station_name
FROM
 trips AS t
LEFT JOIN
 stations AS s
 ON t.to_station_id = s.id
WHERE
 s.id IS NULL;
```

✅ No problems here — no NULL values found. In simple words, all values in trips.to_station_id match stations.id.

Now, what about to_station_name? Are they good to go with stations.name?

```sql
-- Check whether 'trips.to_station_name' matches 'stations.name'
SELECT
 t.to_station_id,
 t.to_station_name,
 s.id,
 s.station_name
FROM
 trips AS t
LEFT JOIN
 stations AS s
 ON t.to_station_id = s.id
WHERE
 t.to_station_name != s.station_name;
```

Again, we’ve got 17,106 records where trips.to_station_name doesn’t match stations.name. 🙄

So, let’s do the same thing we did earlier — update trips.to_station_name to match stations.name:

```sql
-- Make 'trips.to_station_name' match 'stations.name'
UPDATE
 trips
SET
 from_station_name = stations.station_name
FROM
 stations
WHERE
 trips.from_station_id = stations.id AND
 trips.from_station_name != stations.station_name;
```

✅We’ve got 17,106 records where trips.to_station_name is now good to go, matching up with stations.name.

### Double-Checking Trip Durations

Alright, let’s get into it. In the trips table, we've got this thing called tripduration, which tells us how long a trip lasted in seconds. We're going to double-check it to make sure everything adds up with the starttime and stoptime fields.

But here's the deal, for the 1st and 2nd quarter data, the times in starttime and stoptime are rounded off to the nearest minute. So, when we recalculate, we might not get the exact seconds for trip durations.

```sql
-- Create a thing to recalculate trip duration
WITH calculate_trip_duration AS (
 SELECT
  trip_id,
  starttime,
  stoptime,
  tripduration * '1 seconds'::INTERVAL AS trip_duration_interval,
  AGE(stoptime, starttime) AS calculated_duration,
  AGE(stoptime, starttime) - tripduration * '1 seconds'::INTERVAL AS calc_difference
 FROM
  trips
)

-- Let's look for differences
SELECT
 MAX(calc_difference) AS max_calc_difference,
 MIN(calc_difference) AS min_calc_difference,
 AVG(calc_difference) AS avg_calc_difference,
 COUNT(trip_id) AS variance_count,
 max(stoptime) AS max_stoptime,
 min(stoptime) AS min_stoptime,
 max(starttime) AS max_starttime,
 min(starttime) AS min_starttime
FROM
 calculate_trip_duration
WHERE
 calc_difference > '1 minutes'::INTERVAL;
```

Just so you know, we’re only looking at differences bigger than 1 minute. We’re giving a pass for those tiny seconds that got rounded off in the times.

Now, let’s flip it and check if there are trips showing longer times than they should.

```sql
-- Create a thing to recalculate trip duration
WITH calculate_trip_duration AS (
 SELECT
  trip_id,
  starttime,
  stoptime,
  tripduration * '1 seconds'::INTERVAL AS trip_duration_interval,
  AGE(stoptime, starttime) AS calculated_duration,
  AGE(stoptime, starttime) - tripduration * '1 seconds'::INTERVAL AS calc_difference
 FROM
  trips
)

-- Let's look for differences
SELECT
 MAX(calc_difference) AS max_calc_difference,
 MIN(calc_difference) AS min_calc_difference,
 AVG(calc_difference) AS avg_calc_difference,
 COUNT(trip_id) AS variance_count,
 max(stoptime) AS max_stoptime,
 min(stoptime) AS min_stoptime,
 max(starttime) AS max_starttime,
 min(starttime) AS min_starttime
FROM
 calculate_trip_duration
WHERE
 calc_difference < '-1 minutes'::INTERVAL;
```

Again, we’re ignoring little variations and only checking if trips are overstated by more than 1 minute.

Now, these 34 trips show longer times than they should. They recorded more minutes on the clock than what starttime and stoptime suggest.

Taking a closer look:

- The time differences are around 1 hour on average, with the max and min times not far off.
- These variations happen during just two short time periods, possibly indicating a hiccup in the data.
- It’s hard to make precise corrections because of the minute rounding thing we mentioned earlier.
- But hey, this is a tiny part of the data, just 54 out of 3 million records.

So, we decided to let go of these 54 records and deleted them.

```sql
-- Create a CTE or temporary table to recalculate trip duration
WITH calculate_trip_duration AS (
 SELECT
  trip_id,
  starttime,
  stoptime,
  tripduration * '1 seconds'::INTERVAL AS trip_duration_interval,
  AGE(stoptime, starttime) AS calculated_duration,
  AGE(stoptime, starttime) - tripduration * '1 seconds'::INTERVAL AS calc_difference
 FROM
  trips
)

-- Delete the records with trip duration differences
DELETE FROM
 trips AS t
USING
 calculate_trip_duration AS calc_td
WHERE
 t.trip_id = calc_td.trip_id
 AND (calc_td.calc_difference < '-1 minutes'::INTERVAL
     OR calc_td.calc_difference > '1 minutes'::INTERVAL);
```

✅We successfully waved goodbye to 54 records with trip duration quirks.

## Wrapping Up Data Cleaning, Ready for Data Analysis with Python 🥳

Well done, folks! We’ve wrapped up the data cleaning phase. Big thanks for sticking around during this process. If you have any thoughts or feedback, please don’t hesitate to share them in the comments — your input means a lot.

With our dataset now squeaky clean and verified, it’s time to dive into the next chapter. We’re shifting gears from cleaning to analyzing. What’s our weapon of choice, you ask? It’s called Exploratory Data Analysis (EDA), but let’s not get too technical here. In the next post, we’ll dig into all the exciting details of how we’ll uncover hidden gems in this data.

So, stay tuned! You can find the next part of this journey on my profile or just below. I’ll be waiting to explore the data with you and uncover its secrets. See you there! 🙌

[Customer Data Analysis Using Python — Google’s Capstone Project](https://medium.com/@musayohanes00/customer-data-analysis-using-python-googles-capstone-project-8264b36d8bc1)
