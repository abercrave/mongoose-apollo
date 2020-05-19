# Query Benchmarks

I have bumped up the number of generated records to see what out-of-the-box MongoDB performance is like.

1. Presents: 15000
2. Providers: 4745
3. Requests: 1000

Below are the average response times of the 3 queries. The time to seed MongoDB with data was ~34s.

Caveat: the app is running on my laptop rather than a lambda, and I’m not dealing with EDM data.

## 1. providersWithPresents

Uses Mongoose’s aggregate method to execute a MQL query that aggregates present and request data, groups by provider, and sorts by provider name.

Times to retrieve 15,000 records:

1.  2.6s
2.  2.76s
3.  2.77s
4.  2.84s
5.  3.45s
6.  3.53s
7.  3.41s
8.  3.56s
9.  3.52s
10. 3.66s

Average: 3.12s

## 2. presents

Uses the standard Mongoose populate method to aggregate provider and request data, unsorted.

Times to retrieve 15,000 records:

1.  1.56s
2.  1.59s
3.  1.54s
4.  1.53s
5.  1.3s
6.  1.41s
7.  1.61s
8.  1.32s
9.  1.53s
10. 1.51s

Average: 1.49s

## 3. requestsWithPresents

Uses Mongoose’s aggregate method to execute a MQL query that aggregates present and provider data, groups by request ID, and sorts by request creation date.

Times to retrieve 1,000 records:

1.  1.67s
2.  1.51s
3.  1.23s
4.  1.23s
5.  1.41s
6.  1.28s
7.  1.22s
8.  1.24s
9.  1.34s
10. 1.23s

Average: 1.34s

## 4. requests

Uses the standard Mongoose populate method to aggregate present and provider data, unsorted.

Times to retrieve 1,000 records:

1.  2.51s
2.  2.20s
3.  2.13s
4.  1.99s
5.  2.05s
6.  2.05s
7.  1.99s
8.  2.13s
9.  2.01s
10. 2.04s

Average: 2.11s
