---
title: "Customer Data Analysis Using Python — Google's Capstone Project"
description: "An exploratory analysis of a bike-sharing company dataset in Python, using visualizations to uncover rider behavior and recommend marketing strategies."
pubDate: 2023-10-31
url: "https://medium.com/@musayohanes00/customer-data-analysis-using-python-googles-capstone-project-8264b36d8bc1"
tags: [google-data-analytics, data-visualization, exploratory-data-analysis, python, data-analysis]
---

### GOOGLE DATA ANALYTICS CAPSTONE PROJECT

## Diving into Customer Data Analysis Using Python

### Hands-On Steps in Data Exploration and Visualization

![Laptop displaying a dashboard of data visualizations](https://cdn-images-1.medium.com/max/1024/1*QtFWl8lkz6vzstUdX03b2A.jpeg)

*Photo by [Carlos Muza](https://unsplash.com/@kmuza) on [Unsplash](https://unsplash.com/photos/laptop-computer-on-glass-top-table-hpjSkU2UYSU)*

Hey there, dear readers! First off, a big high-five 🙌 to each one of you for sticking around through the data cleaning process in the previous chapter. If you missed it, don’t worry — you can catch up on all the details through my profile page or by clicking the link below.

[Data Cleaning with SQL — Google’s Capstone Project](https://medium.com/@musayohanes00/data-cleaning-with-sql-googles-capstone-project-712420fbd1ad)

Our dataset is all tidied up and ready to roll. We’re shifting gears from data cleaning to something equally thrilling — data analysis. But no worries, we won’t dive too deep into the jargon jungle. We’ll keep it simple and approachable.

Now, as part of the Google Data Analytics Capstone Project, we embark on this journey. Before we dive headfirst into the world of numbers, let’s take a quick refresher on what’s brought us here.

## Our Mission: Boosting Annual Memberships

Our mission, folks, is to boost annual memberships for Cyclistic, our beloved bike-sharing company based in the vibrant city of Chicago (yes, the company is fictional, but the data is as real as it gets!). The real scoop is that annual members are the real gems, bringing in more pedal-powered revenue compared to the occasional riders.

Our job? Craft data-driven strategies to convert those casual riders into loyal, year-round pedal pushers. We’re here to understand how these two groups of customers put Cyclistic’s bikes to use in their unique ways.

So, stay with us as we delve into the data, uncover insights, and pedal forward to success.🚴‍♂️✨

## Exploring with Python and Helpful Tools

Once we’ve wrapped up the nitty-gritty data work, including the cleaning and validation steps using SQL, it’s time to dive into Exploratory Data Analysis (EDA) with Python. For this journey, we’ll be using Python and some cool libraries like pandas, matplotlib, and seaborn, all right in a user-friendly Jupyter Notebook environment.

```python
# Let's get started by importing the tools we need
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# And a neat trick: we'll make sure our numbers look friendly with commas and two decimal places.
pd.set_option('display.float_format', lambda x: '{:,.2f}'.format(x))
```

## Getting Data Onboard

Now that the heavy lifting with cleaning and validating the data using SQL is done, it’s time to bring it into the world of Python for some exciting exploration. We start by importing the squeaky clean data stored in CSV files into user-friendly Python pandas data-frames for deeper analysis.

```python
# First things first, setting up the data types for the 'trips' dataframe
trips_dtypes = {
    'trip_id': 'int',
    'starttime': 'string',
    'stoptime': 'string',
    'bikeid': 'int',
    'tripduration': 'int',
    'from_station_id': 'int',
    'from_station_name': 'string',
    'to_station_id': 'int',
    'to_station_name': 'string',
    'usertype': 'category',
    'gender': 'category',
    'birthyear': 'Int64'
}

# Loading up the 'trips' data
trips_df = pd.read_csv(r"clean_data_source/202310051326_cyclistic_trips.csv", dtype=trips_dtypes)

# Let's have a look at the table
trips_df
```

```python
# But we're not stopping here. Let's tweak some data types for specific columns.
trips_df["starttime"] = pd.to_datetime(trips_df["starttime"])
trips_df["stoptime"] = pd.to_datetime(trips_df["stoptime"])
trips_df["tripduration"] = pd.to_timedelta(trips_df["tripduration"], unit='second')

# Quick check with data frame info
trips_df.info()
```

```
<class ‘pandas.core.frame.DataFrame’>
RangeIndex: 3595239 entries, 0 to 3595238 Data columns (total 12 columns):
# Column Dtype
— —— ————– —–
0 trip_id int64
1 starttime datetime64[ns] 2 stoptime datetime64[ns] 3 bikeid int64
4 tripduration timedelta64[ns] 5 from_station_id int64
6 from_station_name string
7 to_station_id int64
8 to_station_name string
9 usertype category
10 gender category
11 birthyear Int64
dtypes: Int64(1), category(2), datetime64[ns](2), int64(4), string(2), timedelta64(ns)
memory usage: 284.6 MB
```

Now, for the stations data, we'll do the same data type magic.

```python
# Defining data types for the 'stations' dataframe
stations_dtypes = {
    'station_name': 'string',
    'online_date': 'string',
    'longitude': 'float',
    'latitude': 'float',
    'id': 'int',
    'dpcapacity': 'int'
}

# Loading data from the 'stations' data table
stations_df = pd.read_csv(r"clean_data_source/202310051326_cyclistic_stations.csv", dtype=stations_dtypes)

# Let's check it out
stations_df
```

```python
# Finishing up by adjusting data types for specific columns
stations_df["online_date"] = pd.to_datetime(stations_df["online_date"])

# A quick glance at the data frame info
stations_df.info()
```

```
<class ‘pandas.core.frame.DataFrame’>
RangeIndex: 581 entries, 0 to 580 Data columns (total 6 columns):
# Column Non-Null Count Dtype
— —— ————– —–
0 id 581 non-null int64
1 station_name 581 non-null string
2 latitude 581 non-null float64
3 longitude 581 non-null float64
4 dpcapacity 581 non-null int64
5 online_date 581 non-null datetime64[ns]
dtypes: datetime64[ns](1), float64(2), int64(2), string(1)
memory usage: 27.4 KB
```

Voila, we’ve got our data right where we want it! 🤝

## Checking for NULLs and Data Integrity

As we make the shift from SQL within DBeaver to Python Pandas, let’s quickly ensure our data is in good shape.

```python
# Count the NULL values of stations df, in each column
stations_df.isnull().sum()

# Count the unique values of stations df, in each column
stations_df.nunique()

# Count the NULL values of trips df, in each column
trips_df.isnull().sum()

# Count the unique values of trips df, in each column
trips_df.nunique()
```

```python
# NULL Counts of Stations Data-Frame
id 0
station_name 0
latitude 0
longitude 0
dpcapacity 0
online_date 0
dtype: int64

# Unique Counts of Stations Data-Frame
id 581
station_name 581
latitude 575
longitude 570
dpcapacity 13
online_date 140
dtype: int64

# NULL Counts of Trips Data-Frame
trip_id 0
starttime 0
stoptime 0
bikeid 0
tripduration 0
from_station_id 0
from_station_name 0
to_station_id 0
to_station_name 0
usertype 0
gender 858393
birthyear 858089
dtype: int64

# Unique Counts of Trips Data-Frame
trip_id 0
starttime 0
stoptime 0
bikeid 0
tripduration 0
from_station_id 0
from_station_name 0
to_station_id 0
to_station_name 0
usertype 0
gender 858393
birthyear 858089
dtype: int64
```

After this quick check, we found the expected NULL values in specific fields. Also, the unique values in categorical data fields like gender, usertype, from_station_id, and more align with our expectations. 👌

## Explore with Simple Stats and Quick Data Views

Now, let’s dive into the data, we’ll kick things off by checking out some basic numbers and easy-to-grasp visuals.

### Who’s Riding in 2016?

First, we want to know who’s pedaling the most in 2016, and it’s simpler than you think.

```python
# Count trips by user type
trip_count_by_user = trips_df.groupby('usertype')['trip_id'].count()

# Show us the counts
trip_count_by_user
```

```
usertype
Customer 858438
Subscriber 2736801
Name: trip_id, dtype: int64
```

```python
# Set global theme for seaborn visualizations
sns.set_theme(style='darkgrid', palette='colorblind', font_scale=0.8)

# Create visualization
# Create plt figures and grids
gs = plt.GridSpec(1, 2, width_ratios=[5, 4])
fig = plt.figure(figsize=(10, 3))
ax1 = fig.add_subplot(gs[0])
ax2 = fig.add_subplot(gs[1])
# Add figure title and subtitle
fig.suptitle('Trip Counts by User-Type', x=0.15, y=0.98, fontsize=14, fontweight='bold')
fig.text(0.018, 0.868, 'Total {:,.1f} Million of Trips were Made in 2016'.format(trip_count_by_user.values.sum()/1000000), fontsize=10, fontweight='light')

# Add Seaborn visualization (1), barplot
ax1.xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:,.1f}'.format(x/1000000) + ' mio'))
sns.barplot(ax=ax1, y=trip_count_by_user.index, x=trip_count_by_user.values, orient='y', hue=trip_count_by_user.index)
# Set axis label
ax1.set_xlabel('Trip Count')
ax1.set_ylabel('')
# Add data label in barplot
for container in ax1.containers:
  ax1.bar_label(container, label_type='center', fmt=ticker.FuncFormatter(lambda x, pos: '{:,.2f}'.format(x/1000000) + ' mio'), color='white', fontweight='bold')

# Add visualization (2), piechart
wedges, texts, autotexts = ax2.pie(trip_count_by_user.values, labels=trip_count_by_user.index, autopct='%.0f%%', explode=[0.1,0])
# Format percentages text label in piechart
for percentage in autotexts:
  percentage.set(color='white', fontweight='bold')
# Set subplot title
ax2.set_title('Total {:,.1f} Million of Trips'.format(trip_count_by_user.values.sum()/1000000), y=-0.2)

# Adjust the figure layout and display
fig.tight_layout()
plt.show()
```

![](https://cdn-images-1.medium.com/max/919/1*RkwFBs_QqmU3HhqwvJRyKQ.png)

In 2016, Subscribers (annual-members) used the bikes way more than occasional Customers, with over three times the number of trips. The Customers contributed around 860,000 rides, about a quarter of the total trips in 2016. ✍

### Analyzing Trip Durations

Let’s dive into trip duration analysis. First, we’ll check out some basic stats:

```python
# Let's see the trip duration stats for each user type
trips_df.groupby('usertype')['tripduration'].describe()
```

The stats show some interesting things. The average and middle values (50th percentile) have quite a range from the highest numbers, suggesting there might be some unusual data points 🧐. To check this, we’ll make some plots:

```python
# Define a function to format timedelta data-type
def strfdelta(tdelta, fmt="{h:0>2}:{m:0>2}:{s:0>2}"):
  if tdelta < pd.to_timedelta(0, unit="S"):
    return '-' + strfdelta(-tdelta, fmt)
  else:
    d = {"d": tdelta.days}
    d["h"], rem = divmod(tdelta.seconds, 3600)
    d["m"], d["s"] = divmod(rem, 60)
    return fmt.format(**d)
```

```python
# Create a copy to maintain the original dataframe
trip_duration_by_user = trips_df.copy()

# Convert timedelta dtype to float for compatibility with visualization functions
trip_duration_by_user['tripduration'] = trip_duration_by_user['tripduration'].dt.total_seconds()

# Create visualization
# Create plt figures and grids
fig, ax= plt.subplots(1, 2, figsize=(13, 3))

# Add figure title and subtitle
fig.suptitle('Trip Durations Data Distributions by User-Type', x=0.21, y=0.98, fontsize=14, fontweight='bold')fig.text(0.018, 0.868, 'Distribution skewed due to outliers within range to max values', fontsize=10, fontweight='light')

# Create a histogram visualization
sns.histplot(data=trip_duration_by_user, ax=ax[0], x="tripduration", hue="usertype", bins=100)
# Set axis ticks number formatter
ax[0].yaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:,.1f}'.format(x/1000000) + ' mio'))
ax[0].xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{}'.format(strfdelta(pd.to_timedelta(x, unit='S')))))
# Set axis labels
ax[0].set_ylabel('Trip Count')
ax[0].set_xlabel('Trip Duration')

# Create a boxplot visualization
sns.boxplot(data=trip_duration_by_user, ax=ax[1], y='usertype', x='tripduration', hue="usertype")
# Set axis labels
ax[1].set_ylabel('')
ax[1].set_xlabel('Trip Duration')
# Set axis ticks number formatter
ax[1].xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{}'.format(strfdelta(pd.to_timedelta(x, unit='S')))))

# Adjust the figure layout and display
fig.tight_layout()
plt.show()
```

![](https://cdn-images-1.medium.com/max/1024/1*jTwgxuPUeKIn7h_hajxUhQ.png)

As we can see, the visualizations highlight some unusual data points towards the highest trip durations. Now, let’s address those oddities in our data. These are the data points that stand out from the crowd, and they can skew our calculations. We want to understand if they’re unusual for a reason or if they’re just errors.

To identify these outliers, we’ll use something called the Interquartile Range (IQR) method, often known as John Tukey’s fence. It’s a way of setting boundaries for outliers using quartiles, particularly the lower bound (Q1–1.5 * IQR) and the upper bound (Q3 + 1.5 * IQR). We’ll do it separately for each user-type, as different user types might behave differently. So, no panic, we’re on the case! 😉🕵️‍♂️

```python
# A handy function to spot those outliers
def find_outliers_IQR(df, field_name):
    q1 = df[field_name].quantile(0.25)
    q3 = df[field_name].quantile(0.75)
    IQR = q3 - q1
    lower_bound = q1 - 1.5 * IQR
    upper_bound = q3 + 1.5 * IQR
    outliers = df[((df[field_name] < (lower_bound)) | (df[field_name] > (upper_bound))]
    not_outliers = df[~((df[field_name] < (lower_bound)) | (df[field_name] > (upper_bound))]
    return outliers, not_outliers, lower_bound, upper_bound
```

Now, let’s go find these outliers.

```python
# For 'Customer' data points
outliers_customer, not_outliers_customer, lower_bound_customer, upper_bound_customer = find_outliers_IQR(trip_duration_by_user[trip_duration_by_user['usertype'] == 'Customer'], 'tripduration')

# For 'Subscriber' data points
outliers_subscriber, not_outliers_subscriber, lower_bound_subscriber, upper_bound_subscriber = find_outliers_IQR(trip_duration_by_user[trip_duration_by_user['usertype'] == 'Subscriber'], 'tripduration')

# Combine the data points for both user types, outliers and non-outliers
trip_duration_outliers = pd.concat([outliers_customer, outliers_subscriber])
trip_duration_not_outliers = pd.concat([not_outliers_customer, not_outliers_subscriber])
```

Now, let’s describe the results we got using the IQR method.

```python
# Descriptive statistics of the IQR results
print(f'Lower Bound (Customer) used: {strfdelta(pd.to_timedelta(lower_bound_customer, unit="S"))}',
      f'Upper Bound (Customer) used: {strfdelta(pd.to_timedelta(upper_bound_customer, unit="S"))}',
      f'Lower Bound (Subscriber) used: {strfdelta(pd.to_timedelta(lower_bound_subscriber, unit="S"))}',
      f'Upper Bound (Subscriber) used: {strfdelta(pd.to_timedelta(upper_bound_subscriber, unit="S"))}', sep='\n', end='\n\n')

print('trip_duration Non-Outliers Descriptive Statistics:',
      pd.to_timedelta(trip_duration_not_outliers['tripduration'], unit='S').describe(), sep='\n', end='\n\n')

print('The outliers accounts for {:.2f}% of total trip_duration data'.format(trip_duration_outliers['tripduration'].count() / trip_duration_by_user['tripduration'].count() * 100))
```

```
Lower Bound (Customer) used: -00:09:57
Upper Bound (Customer) used: 00:56:54
Lower Bound (Subscriber) used: -00:08:05
Upper Bound (Subscriber) used: 00:29:18

trip_duration Non-Outliers Descriptive Statistics:
count                      3451663
mean     0 days 00:13:29.828825699
std      0 days 00:09:06.827939850
min                0 days 00:01:00
25%                0 days 00:06:37
50%                0 days 00:11:14
75%                0 days 00:18:21
max                0 days 00:56:54
Name: tripduration, dtype: object

The outliers accounts for 3.99% of total trip_duration data
```

The outliers make up only 3.99% of the total trip duration data. The remaining 96% consists of trips that are less than an hour long, with lower averages and less variability in this range. So, removing these outliers won’t affect the majority of our data.

Now, let’s look at some visuals to get a clearer picture of how removing outliers impacts the data. 🤓📊

```python
# Create visual representation
# Prepare the figures and grids
fig, ax = plt.subplots(1, 2, figsize=(13, 3))

# Add a title and a brief description to our figures
fig.suptitle('Trip Durations (Outliers-Excluded) Data Distributions by User-Type', x=0.29, y=0.98, fontsize=14, fontweight='bold')
fig.text(0.018, 0.868, 'Distribution without outliers, accounts for 96% of total data, concentrated within 1 hour duration',
         fontsize=10, fontweight='light')

# Make a histogram
sns.histplot(data=trip_duration_not_outliers, ax=ax[0], x="tripduration", hue="usertype", bins=100)
# Adjust the format for the axis labels
ax[0].yaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:,.2f}'.format(x/1000000) + ' million'))
ax[0].xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{}'.format(strfdelta(pd.to_timedelta(x, unit='S')))))
# Customize the x-axis tick points
ax[0].set_xlim(right=3600)
ax[0].set_xticks(range(0, 3600, 600))
# Set labels for the axes
ax[0].set_ylabel('Trip Count')
ax[0].set_xlabel('Trip Duration')

# Create a boxplot
sns.boxplot(data=trip_duration_not_outliers, ax=ax[1], y='usertype', x='tripduration', hue="usertype")
# Set the format for the x-axis labels
ax[1].xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{}'.format(strfdelta(pd.to_timedelta(x, unit='S')))))
# Customize the x-axis tick points
ax[1].set_xlim(right=3600)
ax[1].set_xticks(range(0, 3600, 600))
# Set labels for the axes
ax[1].set_ylabel('')
ax[1].set_xlabel('Trip Duration')

# Adjust the layout and display our figures
fig.tight_layout()
plt.show()
```

![](https://cdn-images-1.medium.com/max/1024/1*vEapSXf_z9tlRJu-Xg1I0g.png)

The visualizations reveal more consistent means and medians, and the data primarily falls within one hour of duration. This underscores that occasional Customers typically have longer trip durations compared to Subscribers. The reason may be that the Customers pay for a 24-hour pass for each trip, incentivizing them to take longer rides. In contrast, Subscribers have annual passes and often opt for shorter trips. ✍

```python
# Let's explore descriptive statistics of the outliers
print('Descriptive Statistics for Outliers in Trip Durations:',
      pd.to_timedelta(trip_duration_outliers['tripduration'], unit='S').describe(), sep='\n', end='\n\n')

# Count the unique values
print(trip_duration_outliers.nunique())
```

```
Descriptive Statistics for Outliers in Trip Durations:
count                       143576
mean     0 days 01:29:59.072769822
std      0 days 02:11:09.787485792
min                0 days 00:29:19
25%                0 days 00:35:11
50%                0 days 01:02:38
75%                0 days 01:30:37
max                0 days 23:59:25
Name: tripduration, dtype: object

trip_id              143576
starttime            122709
stoptime             114841
bikeid                 5721
tripduration          16356
from_station_id         574
from_station_name       574
to_station_id           577
to_station_name         577
usertype                  2
gender                    2
birthyear                72
dtype: int64
```

Considering that these outlier values are within a reasonable limit (24 hours), and given our prior data cleaning and validation efforts, it’s a good idea to retain these outliers as part of our dataset. We can explore these outliers further to find valuable insights or investigate the reasons behind their presence.🧐

In addition, we’ve grouped trip durations into categories to gain a better understanding of the data.

```python
# Function to categorize trip durations into buckets based on ranges
def tripduration_groups(tripduration: int) -> str:
    if tripduration < 3600 :
        return 'less than 1 hour'
    elif tripduration < 14400:
        return '1 to 4 hours'
    elif tripduration < 36000:
        return '4 to 10 hours'
    elif tripduration < 64800:
        return '10 to 18 hours'
    else:
        return '18 to 24 hours'
```

```python
# Create a new column 'tripduration_groups' by applying the categorization function
trip_duration_by_user['tripduration_groups'] = trip_duration_by_user['tripduration'].apply(tripduration_groups)

# Check the dataframe after applying the function
# Count records within each trip duration group
print(trip_duration_by_user.groupby('tripduration_groups', observed=False)['tripduration_groups'].count(), end='\n\n')
# Calculate the percentage of trips lasting less than 1 hour
print('Trips with less than 1-hour duration make up {:.2f}% of the total trip duration data'.format(trip_duration_by_user[(trip_duration_by_user['tripduration_groups'] == 'less than 1 hour')]['tripduration'].count() / trip_duration_by_user['tripduration'].count() * 100))
```

```
tripduration_groups
1 to 4 hour           71789
10 to 18 hour          1479
18 to 24 hour           770
4 to 10 hour           3581
less than 1 hour    3517620
Name: tripduration_groups, dtype: int64

Trips with less than 1-hour duration make up 97.84% of the total trip duration data
```

Now, let’s visualize the categorized data.

```python
# Create visualization
# Create plt figures and grids
fig, ax= plt.subplots(2, figsize=(12, 8))

# Add Figure title and subtitle
fig.suptitle('Trip Durations Data Distributions by User-Type', x=0.23, y=0.99, fontsize=14, fontweight='bold')
fig.text(0.023, 0.949, 'Trips with less than 1-hour duration make up 97.84% of the total data',
         fontsize=10, fontweight='light')

# Create a histogram for trips less than 1 hour
sns.histplot(data=trip_duration_by_user[(trip_duration_by_user['tripduration_groups'] == 'less than 1 hour')], ax=ax[0], x="tripduration", hue="usertype", bins=60)
# Set subplot title
ax[0].set_title('Trips with LESS Than 1-hour Durations', loc='right', fontweight='bold')
# Set axis format
ax[0].yaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:.0f}k'.format(x/1000)))
ax[0].xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{}'.format(strfdelta(pd.to_timedelta(x, unit='S'), '{m} min')))
# Set custom x-axis points
ax[0].set_xlim(right=3600)
ax[0].set_xticks(range(0, 3600, 600))
# Set labels
ax[0].set_ylabel('Trip Count')
ax[0].set_xlabel('')

# Create a barplot for trips more than 1 hour
sns.countplot(ax=ax[1], data=trip_duration_by_user[(trip_duration_by_user['tripduration_groups'] != 'less than 1 hour')],
              y='tripduration_groups', orient='y', hue='usertype')
# Set subplot title
ax[1].set_title('Trips with MORE Than 1-hour Durations', loc='right', fontweight='bold')
# Set axis format
ax[1].xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:.0f}k'.format(x/1000)))
# Set labels
ax[1].set_ylabel('')
ax[1].set_xlabel('Counts')
# Add data labels in barplot
for container in ax[1].containers:
    ax[1].bar_label(container, fmt=ticker.FuncFormatter(lambda x, pos: ' {:,.0f}'.format(x)),
                    color='black', fontweight='light')

# Adjust the figure layout and display
fig.tight_layout()
plt.show()
```

![](https://cdn-images-1.medium.com/max/1024/1*cEFaFeOxAq_xGrFWEkKBeQ.png)

These visualizations provide more insights. Almost 98% of the data consists of trips with less than 1-hour duration, which is the most concentrated range. As previously shown, the occasional Customers tend to take longer trips compared to Subscribers, in line with their pass types. ✍

### Time-Based Analysis

Let’s dig into how people’s behavior changes during different times of the day, days of the week, and months. Are there specific times where each type of user is more active?🤔

```python
# Make a copy to keep the original dataframe
trips_times_df = trips_df.copy()

# Create new columns to hold time-specific attributes
trips_times_df = trips_times_df.assign(trip_start_hour=lambda x: x['starttime'].dt.strftime('%I %p'),
                                       trip_start_day=lambda x: x['starttime'].dt.day_name().str.slice(stop=3),
                                       trip_start_month=lambda x: x['starttime'].dt.month_name().str.slice(stop=3))

# Check the updated dataframe
print(trips_times_df.nunique(), end='\n\n')
```

```
trip_id              3595239
starttime            2041405
stoptime             1973697
bikeid                  5748
tripduration           18056
from_station_id          581
from_station_name        581
to_station_id            581
to_station_name          581
usertype                   2
gender                     2
birthyear                 78
trip_start_hour           24
trip_start_day             7
trip_start_month          12
dtype: int64
```

```python
# Set the order of month categories
month_order = pd.date_range("2000-01-01", periods=12, freq="M").month_name().str.slice(stop=3)
trips_times_df['trip_start_month'] = pd.Categorical(trips_times_df['trip_start_month'], categories=month_order)

# Set the order of day categories
day_order = pd.date_range("2000-01-03", periods=7, freq="D").day_name().str.slice(stop=3)
trips_times_df['trip_start_day'] = pd.Categorical(trips_times_df['trip_start_day'], categories=day_order)

# Set the order of hour categories
hour_order = pd.date_range("2000-01-03 00:00:00", periods=24, freq="H").strftime('%I %p').tolist()
trips_times_df['trip_start_hour'] = pd.Categorical(trips_times_df['trip_start_hour'], categories=hour_order)
```

This code snippet helps create additional columns in the dataset to categorize the trip start times into hours, days of the week, and months, allowing us to analyze user behavior more effectively based on the time dimensions. Let’s visualize and uncover interesting time-patterns in user activity:

```python
# Create Visualization
# Set up the plot figures and grids
fig, ax = plt.subplots(3, figsize=(12, 12))

# Add Figure Title and Subtitle
fig.suptitle('Trip Counts Data Distributions for each User-Type', x=0.3, y=0.99, fontsize=18, fontweight='bold')
fig.supylabel('Counts', fontsize=14, fontweight='bold')
fig.text(0.014, 0.958, 'Time-based Visualizations, Grouped by Hours of the Day, Days of the Week, and Months of the Year',
         fontsize=10, fontweight='light')

# Create Bar Plot
sns.histplot(data=trips_times_df, ax=ax[0], x="trip_start_hour", hue="usertype", element="poly")
# Set Subplot Title
ax[0].set_title('by Hours of the Day', loc='right', fontweight='bold')
# Set Axis Ticker Format
ax[0].yaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:.0f}'.format(x/1000) + 'k'))
# Clear Axis Labels
ax[0].set_ylabel('')
ax[0].set_xlabel('')
# Rotate X-axis Labels
ax[0].tick_params(axis='x', labelrotation=45)

# Create Bar Plot
sns.histplot(data=trips_times_df, ax=ax[1], x="trip_start_day", hue="usertype", element="poly")
# Set Subplot Title
ax[1].set_title('by Days of the Week', loc='right', fontweight='bold')
# Set Axis Ticker Format
ax[1].yaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:.0f}'.format(x/1000) + 'k'))
# Clear Axis Labels
ax[1].set_ylabel('')
ax[1].set_xlabel('')

# Create Bar Plot
sns.histplot(data=trips_times_df, ax=ax[2], x="trip_start_month", hue="usertype", element="poly")
# Set Subplot Title
ax[2].set_title('by Months of the Year', loc='right', fontweight='bold')
# Set Axis Ticker Format
ax[2].yaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:.0f}'.format(x/1000) + 'k'))
# Clear Axis Labels
ax[2].set_ylabel('')
ax[2].set_xlabel('')

# Adjust the Figure Layout and Display
fig.tight_layout()
plt.show()
```

![](https://cdn-images-1.medium.com/max/1024/1*Ay_3lIJ9IaAb0Y6EU-ByHw.png)

*Here’s a visualization showing the distribution of trip counts, categorized by time-attributes, for each user types.*

We have divided the data into three time-based categories: hours of the day, days of the week, and months of the year. The insights from these visualizations are as follows:

- Peak usage hours for Subscribers are at 8 AM and 5 PM, while occasional Customers prefer using the service between 1 PM and 4 PM.
- Subscribers use the bike-sharing service more on weekdays, while the Customers prefer weekends.
- Both Subscribers and occasional Customers exhibit similar trends in usage by months of the year. Usage increases at the beginning of the year, peaks around mid-year, and gradually decreases toward the end of the year.

Observing the trends for Subscribers and Customers shed light on how they use the bike-sharing service differently ✍. To delve deeper, let’s visualize their usage patterns by combining days and hours of the week.

```python
# Pivoting trip start times by day and hour for 'Subscribers'
subscriber_trips_pivot_day_hour = trips_times_df[trips_times_df['usertype'] == 'Subscriber'].pivot_table('trip_id', index='trip_start_hour', columns='trip_start_day', aggfunc={'trip_id':'count'})

# Pivoting trip start times by day and hour for 'Customers'
customer_trips_pivot_day_hour = trips_times_df[trips_times_df['usertype'] == 'Customer'].pivot_table('trip_id', index='trip_start_hour', columns='trip_start_day', aggfunc={'trip_id':'count'})
```

```python
# Creating visualization
# Setting up plt figures and grids
fig, ax = plt.subplots(1, 3, figsize=(12, 8), gridspec_kw={'width_ratios': [1, 1, 0.08]})

# Adding Figure title and subtitle
fig.suptitle('Trip Count Distribution by Days of the Week & Hours of the Day', x=0.3, y=0.99, fontsize=14, fontweight='bold')
fig.text(0.01, 0.949, 'Subscribers tend to use it as weekday transportation, whereas Customers prefers weekend trips usage', fontsize=10, fontweight='light')

# Determining consistent color bar limits
vmin = min(subscriber_trips_pivot_day_hour.min(axis=None), customer_trips_pivot_day_hour.min(axis=None))
vmax = max(subscriber_trips_pivot_day_hour.max(axis=None), customer_trips_pivot_day_hour.max(axis=None))

# Creating heatmap visualizations for 'Subscribers'
sns.heatmap(data=subscriber_trips_pivot_day_hour, ax=ax[0], annot=True, fmt=',.0f', cbar=False, vmin=vmin, vmax=vmax)
# Setting subplot title
ax[0].set_title('Subscriber', loc='center', fontweight='bold')
# Adjusting axis label and ticks
ax[0].set_ylabel('')
ax[0].set_xlabel('')

# Creating heatmap visualizations for 'Customers'
sns.heatmap(data=customer_trips_pivot_day_hour, ax=ax[1], annot=True, fmt=',.0f', cbar_ax=ax[2], cbar_kws={'format':'{x:,.0f}'}, vmin=vmin, vmax=vmax)
# Setting subplot title
ax[1].set_title('Customer', loc='center', fontweight='bold')
# Adjusting axis label and ticks
ax[1].set_ylabel('')
ax[1].set_xlabel('')
ax[1].set_yticks([])

# Adjusting figure layout and display
fig.tight_layout()
plt.show()
```

![](https://cdn-images-1.medium.com/max/1024/1*SbNCzDztciz-skVNj8GyYw.png)

Key points to consider 💁‍♂️:

- For Subscribers, the service is notably used during typical work commute times, mainly at 8 AM and 5 PM on weekdays.
- Customers tend to use the service for leisure, with peak usage between 1 PM and 4 PM on weekends, signifying recreational purposes during these times.

Let’s revisit the third insight: the common trend of peak bike-sharing usage around mid-year. This trend could be related to the changing seasons. In the context of the bike-sharing service, we can assume that the seasons affect user behavior, making bike rides more convenient during certain times. We notice a decrease in bike rides at the beginning and end of the year, which might be due to winter. This drop in usage corresponds to lower temperatures 🥶.

To confirm this theory, let’s look at data on average temperatures for the specific location and time period. Fortunately, the [National Weather Service](https://en.wikipedia.org/wiki/National_Weather_Service) provides an [official data source for climate information](https://www.weather.gov/wrh/climate?wfo=lot), including data for the Chicago area. For this analysis, we’ll use the Monthly Average Temperatures data for Chicago in 2016.

```python
# Load the 'avg_temp' data table
avg_temp_df = pd.read_csv("clean_data_source/2016_chicago_monthly_avg_temperature_noaa.csv", dtype={'month': 'string', 'mean': 'float'}, sep=';')
# Set the order of month categories
avg_temp_df['month'] = pd.Categorical(avg_temp_df['month'], categories=month_order)
```

```python
# Group and count trips by month and user type
trip_count_by_months = trips_times_df.groupby(['trip_start_month', 'usertype'], observed=False)['trip_id'].count().reset_index()
# Join with average temperature data
trip_count_by_months = trip_count_by_months.join(avg_temp_df.set_index('month'), on='trip_start_month')
# Rename attributes for clarity
trip_count_by_months.rename(columns={'trip_id': 'trip_count', 'mean': 'mean_temp_f'}, inplace=True)
```

```python
# Create Visualization
# Set up plt figures
fig, ax = plt.subplots(1, figsize=(8, 6))

# Add Figure title and subtitle
fig.suptitle('Monthly Average Temperatures in Chicage IL and Trip Counts Relations Plot', x=0.458, y=0.99, fontsize=12, fontweight='bold')
fig.text(0.02, 0.938, 'Low Trip Counts tend to correlates with Low Average Temperatures and vice versa',
         fontsize=10, fontweight='light')

# Create a scatterplot to visualize the data
sns.scatterplot(ax=ax, data=trip_count_by_months, x='trip_count', y='mean_temp_f', hue='usertype')
# Format axis tick numbers
ax.xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:.0f}'.format(x/1000) + 'k'))
ax.yaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:.0f}'.format(x) + '°F'))
# Set axis labels
ax.set_xlabel('Trip Counts')
ax.set_ylabel('Monthly Average Temperature')

# Adjust figure layout and display
fig.tight_layout()
plt.show()
```

![](https://cdn-images-1.medium.com/max/793/1*4208tbOsd1uZt6xjEsYCDw.png)

It’s worth noting that lower temperatures are linked to fewer bike rides, reinforcing the idea that cold weather has an impact on user behavior. ✍

### Route Analysis

We have data for each trip’s starting and ending stations. Both customer and subscriber user types may have popular routes. Let’s start by identifying the most commonly used start and end stations for these user groups.

```python
# Create a copy of the data frame
trips_stations_df = trips_df.copy()
```

```python
# Create a data frame for start station counts
start_station_count = trips_stations_df.groupby(['from_station_id', 'usertype'], observed=False)['trip_id'].count().reset_index()
# Rename columns
start_station_count.rename(columns={'trip_id': 'trip_count'}, inplace=True)
# Add a column for trip count percentages relative to each user type's total trip count
start_station_count = start_station_count.assign(percent_to_usertype_total=lambda x: x['trip_count'] / x.groupby('usertype', observed=False)['trip_count'].transform('sum') * 100)

# Sort and filter the top 5 stations for each user type
top_5_start_station = pd.concat([start_station_count[(start_station_count['usertype'] == 'Customer')].sort values('trip_count', ascending=False).head(5),
                                 start_station_count[(start_station_count['usertype'] == 'Subscriber')].sort_values('trip_count', ascending=False).head(5)])

# Enhance the data by joining with the main station dataset
top_5_start_station = top_5_start_station.join(stations_df.set_index('id'), on='from_station_id')
```

```python
# Create a data frame for end station counts
end_station_count = trips_stations_df.groupby(['to_station_id', 'usertype'], observed=False)['trip_id'].count().reset_index()
# Rename columns
end_station_count rename columns={'trip_id': 'trip_count'}, inplace=True
# Add a column for trip count percentages relative to each user type's total trip count
end_station_count = end_station_count.assign(percent_to_usertype_total=lambda x: x['trip_count'] / x.groupby('usertype', observed=False)['trip_count'].transform('sum') * 100)

# Sort and filter the top 5 stations for each user type
top_5_end_station = pd.concat([end_station_count[(end_station_count['usertype'] == 'Customer')].sort_values('trip_count', ascending=False).head(5),
                               end_station_count[(end_station_count['usertype'] == 'Subscriber')].sort_values('trip_count', ascending=False).head(5)])

# Enhance the data by joining with the main station dataset
top_5_end_station = top_5_end_station.join(stations_df.set_index('id'), on='to_station_id')
```

```python
# Create Visualization
# Set up plt figures
fig, ax = plt.subplots(2, figsize=(10, 8), sharex=True)

# Add Figure title and subtitle
fig.suptitle('Top 5 Start and End Stations based on Trip Counts, Grouped by User-Type', x=0.34, y=0.99, fontsize=12, fontweight='bold')
fig.text(0, 0.95, 'Similarity between Top Start and End Stations, yet Distinction found in User-Type Comparison',
         fontsize=10, fontweight='light')
fig.supxlabel('Percentage to each User-Type Total Trip Count', fontsize=10)

# Create bar plots for start stations
sns.barplot(ax=ax[0], data=top_5_start_station, x='percent_to_usertype_total', y='station_name', orient='y', hue='usertype')
# Format axis tick numbers
ax[0].xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:.0f}'.format(x) + '%'))
# Set subplot title
ax[0].set_title('Top 5 Start Stations', loc='right', fontweight='bold')
# Set axis labels
ax[0].set_xlabel('')
ax[0].set_ylabel('')
# Add data labels to the bar plot
for container in ax[0].containers:
    ax[0].bar_label(container, label_type='center', fmt=ticker.FuncFormatter(lambda x, pos: '{:,.2f}%'.format(x)), color='white')

# Create bar plots for end stations
sns.barplot(ax=ax[1], data=top_5_end_station, x='percent_to_usertype_total', y='station_name', orient='y', hue='usertype')
# Format axis tick numbers
ax[1].xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, pos: '{:.0f}'.format(x) + '%'))
# Set subplot title
ax[1].set_title('Top 5 End Stations', loc='right', fontweight='bold')
# Set axis labels
ax[1].set_xlabel('')
ax[1].set_ylabel('')
# Remove the legend
ax[1].get_legend().remove()
# Add data labels to the bar plot
for container in ax[1].containers:
    ax[1].bar_label(container, label_type='center', fmt=ticker.FuncFormatter(lambda x, pos: '{:,.2f}%'.format(x)), color='white')

# Adjust the figure layout and display
fig.tight_layout()
plt.show()
```

![](https://cdn-images-1.medium.com/max/1009/1*YwWJIoJuxrI0JiS2eaBz-A.png)

*The chart above shows the most popular stations for each user type*

Notably, the top starting stations are quite similar to the top ending stations. However, there are differences in station preferences between user types. Looking at station names, it’s reasonable to assume that stations with names like *Park* 🌳or *Theater* 💃 are associated with recreational places, and these are among the favorite stations for occasional Customer-users.

To confirm this, let’s explore the locations of these top stations using their coordinates (latitude and longitude). For this geographical data visualization, we’ll use the Python library plotly. It provides interactive HTML visualizations that allow actions like zooming, hovering over data points for details, and filtering by categories in the legend.

[Plotly](http://chart-studio.plotly.com/~musa_yohanes/1/)

For each user type, top stations form distinct clusters✍:

- Customer favorite stations are typically situated near the shoreline and close to recreational places, supporting our prediction that occasional Customer-users primarily use the bike-sharing service for leisure.
- On the other hand, Subscribers top stations are located in the town center, where offices and businesses are concentrated. As expected, Subscribers use the bike-sharing service for their work🧑‍💻 commute.

Next, let’s delve into popular routes for each user type.

```python
# Create a data frame to count trip routes
trip_route_count = trips_stations_df.groupby(['from_station_id', 'to_station_id', 'usertype'], observed=False)['trip_id'].count().reset_index()
# Rename columns
trip_route_count.rename(columns={'trip_id': 'trip_count', 'from_station_id': 'start_station_id', 'to_station_id': 'end_station_id'}, inplace=True)
# Add a column for trip count percentages relative to each user type's total trip count
trip_route_count = trip_route_count.assign(percent_to_usertype_total=lambda x: x['trip_count'] / x.groupby('usertype', observed=False)['trip_count'].transform('sum'))

# Sort and filter top 5 routes for each usertype
top_5_route = pd.concat([trip_route_count[(trip_route_count['usertype'] == 'Customer')].sort_values('trip_count', ascending=False).head(5),
                         trip_route_count[(trip_route_count['usertype'] == 'Subscriber')].sort_values('trip_count', ascending=False).head(5)])

# Create a summary of top route station data
top_route_station = pd.concat([top_5_route['start_station_id'], top_5_route['end_station_id']])
top_route_station.name = 'id'
top_route_station = pd.merge(top_route_station, stations_df, on='id', how='left')
top_route_station.drop duplicates

# Enrich start stations data with a join from the main stations dataset
top_5_route = top_5_route.join(stations_df[['id', 'station_name', 'latitude', 'longitude']].set_index('id'), on='start_station_id')
# Rename columns
top_5_route.rename(columns={'station_name': 'start_station_name', 'latitude': 'start_latitude', 'longitude': 'start_longitude'}, inplace=True)
# Enrich end stations data with a join from the main stations dataset
top_5_route = top_5_route.join(stations_df[['id', 'station_name', 'latitude', 'longitude']].set_index('id'), on='end_station_id')
# Rename columns
top_5_route.rename(columns={'station_name': 'end_station_name', 'latitude': 'end_latitude', 'longitude': 'end_longitude'}, inplace=True)

# Display the dataframe
top_5_route
```

```python
import plotly.graph_objects as go
import numpy as np

# Set up figure properties
fig = px.scatter_mapbox(top_route_station, lat='latitude', lon='longitude', zoom=11, height=300, template='seaborn',
                        text='station_name', hover_name='station_name',
                        hover_data={'id': True,
                                    'latitude': ':.2f',
                                    'longitude': ':.2f',
                                    'station_name': False,
                                    'dpcapacity': False,
                                    'online_date': False
                                   },
                        labels={'id': 'Station ID',
                                'latitude': 'Lat',
                                'longitude': 'Lon'
                                }
                       )

# Update station traces
fig.update_traces(marker=dict(size=17,
                              color='rgb(255, 0, 0)',
                              opacity=0.7
                              ),
                  selector=dict(type='scattermapbox')
                 )

# Add route traces
for i in range(len(top_5_route)):
    # Show legend group for the first and fifth routes
    show_legend = (i == 0 or i == 5)
    # Set up custom data array
    custom_data = [top_5_route['usertype'].iloc[i], top_5_route['trip_count'].iloc[i], top_5_route['percent_to_usertype_total'].iloc[i]]
    # Parse custom data array to plotly format
    custom_data_container = np.empty(shape=(2, 3, 1), dtype='object')
    custom_data_container[0] = np.array(custom_data).reshape(-1, 1)
    custom_data_container[1] = np.array(custom_data).reshape(-1, 1)
    # Create route lines
    fig.add_scattermapbox(lat=[top_5_route['start_latitude'].iloc[i], top_5_route['end_latitude'].iloc[i]],
                          lon=[top_5_route['start_longitude'].iloc[i], top_5_route['end_longitude'].iloc[i]],
                          mode='lines',
                          legendgroup=str(top_5_route['usertype'].iloc[i]),
                          name=str(top_5_route['usertype'].iloc[i]),
                          showlegend=show_legend,
                          hovertext=['Route: {}-{} to {}-{}'.format(top_5_route['start_station_name'].iloc[i], top_5_route['start_station_id'].iloc[i], top_5_route['end_station_name'].iloc[i], top_5_route['end_station_id'].iloc[i]),
                                     'Route: {}-{} to {}-{}'.format(top_5_route['start_station_name'].iloc[i], top_5_route['start_station_id'].iloc[i], top_5_route['end_station_name'].iloc[i], top_5_route['end_station_id'].iloc[i])],
                          customdata=custom_data_container,
                          hovertemplate =
                              '<b>%{hovertext}</b><br><br>'+
                              'User-Type=%{customdata[0]}<br>'+
                              'Trips Count=%{customdata[1]:,.0f}<br>'+
                              'Percentage to User-Type Total Trips Count=%{customdata[2]:.2%}'+
                              '<extra></extra>'
                         )

# Update customer route traces
fig.update_traces(line=dict(width=3,
                            color='rgb(44, 81, 168)'
                            ),
                  selector=dict(mode='lines',
                                legendgroup='Customer')
                 )

# Update subscriber route traces
fig.update_traces(line=dict(width=3,
                            color='rgb(214, 129, 54)'
                            ),
                  selector=dict(mode='lines',
                                legendgroup='Subscriber')
                 )

# Set up additional properties
fig.update_layout(mapbox_style='carto-positron', margin={'r':0,'t':0,'l':0,'b':0},
                  legend=dict(x=0.01,
                              y=0.97,
                              bordercolor='Black',
                              borderwidth=1
                             )
                  )

# Show the figure
fig.show()
```

[Plotly](https://chart-studio.plotly.com/~musa_yohanes/3/)

The map above reveals that:

- The most frequently used routes for occasional Customers follow the lake shore, which aligns with the favorite stations we discovered earlier.
- In contrast, some of the top routes for Subscribers surprisingly include stations near the shore. This could suggest weekend trips or recreational purposes for Subscribers. However, it’s worth noting that each of the top routes represents, at most, 0.08% of Subscriber’s total trips, indicating that these routes do not significantly represent subscriber preferences.🤨🤌

## Conclusion

After diving into our analysis to answer the question, *“How do they use Cyclistic bikes differently?”,* we’ve uncovered several key insights🤯:

1. **Trip Duration:** We noticed that casual customers (the ones who grab a 24-hour pass) tend to take longer rides compared to annual members (subscribers). Subscribers have shorter trips on average, likely because they have more flexibility and aren’t in a hurry to maximize the value of their pass.
2. **User-Type Trip Patterns in 2016:** In 2016, subscribers dominated the number of trips, accounting for over three times as many rides as customers. Subscribers made up about 76% of all trips, while customers were responsible for the remaining 24%.
3. **Time of Use:** Subscribers love their bikes at around 8 AM and 5 PM on weekdays, suggesting they’re using them for their daily commutes. On the flip side, customers prefer a leisurely afternoon ride, typically between 1 PM and 4 PM, with a fondness for weekends. There’s a seasonal trend with peak usage around mid-year, likely tied to the weather and temperature🥶.
4. **Route Preferences:** Customers gravitate toward stations near the shoreline and recreational spots, pointing to their preference for leisurely rides. Subscribers, on the other hand, favor stations in the city center, likely due to their work-related commutes. The most popular routes for both groups reveal a mix of work and play. However, it’s important to note that these top routes make up less than 1% of total trips.

### Recommendations

To boost bike usage and tailor our services for different user groups, we suggest the following:

1. **Tailored Promotions:** Launch targeted promotions during specific time periods⏰. For customers, focus on weekends and fun activities. For subscribers, highlight the benefits of weekday commutes.
2. **Membership Offers:** Attract customers to become subscribers by offering enticing annual membership packages. These could emphasize cost savings🤑and convenience, like exclusive weekend-only memberships.
3. **Localized Marketing:** Concentrate marketing efforts in areas that match user preferences. For customers, focus on recreational and tourist spots. For subscribers, promote stations near business districts.
4. **Flexible Pricing:** Implement various pricing tiers for different user segments. For customers, consider multi-ride packages to encourage long-term usage. For subscribers, explore loyalty programs.

Keep in mind, these suggestions can be adjusted. Modify them as user preferences change. Try out various promotions and marketing ideas. Use A/B testing to see what works best. When we combine these strategies, we’re on the path to turning casual customers into yearly members.

### Data Limitations

It’s essential to acknowledge the limitations of our analysis:

- **Limited Demographics:** The dataset provides only partial demographic information for subscribers and lacks data for customers, hindering in-depth demographic analysis for all user types.
- **Outliers:** Despite addressing outliers, the dataset reflects diverse user behaviors, which can still result in outliers. Segmenting the data helps reveal trends within specific value ranges but might not represent the entire population’s behavior.
- **Sampling Bias:** While the dataset encompasses the entire user population, our analysis highlights common behaviors and might not encompass user segments with unique patterns.
- **Seasonal Variations:** The dataset is limited to 2016, capturing seasonal trends but potentially missing long-term changes outside that timeframe.

Even with these limitations, our analysis offers valuable insights into how users behave 🤝. It’s the starting point for data-driven marketing strategies that can turn occasional riders into annual members.

## Interactive Storytelling with Tableau

Finally, we’re excited to present our findings in a captivating data story. These insights will be a valuable resource for decision-makers. We’ve brought this data to life using Tableau, a popular tool known for its powerful features and interactive visuals. You can dive into the insights in our Tableau page titled “[Cyclistic — The Bike-Sharing Company](https://public.tableau.com/views/Cyclicstic-TheBike-SharingCompany/Howdiffers?:language=en-US&:display_count=n&:origin=viz_share_link)”. Enjoy exploring!🙌
