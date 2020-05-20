# Query Benchmarks

I have bumped up the number of generated records to see how out-of-the-box MongoDB performs. Only each collection's `_id` is indexed.

1. Presents: 15000 (~8.3x more than the 1811 in Prod)
2. Providers: 4745 (~5.6x more than the 852 in Prod)
3. Requests: 1000 (~6.7x more than the 149 in Prod)

**Note:** _The number of records in Prod is accurate as of 5/19/20._

Below are the average response times for 10 executions of each query for the:

- Same number of records as Prod.
- Arbitrarily increased number of records.

The time to seed MongoDB with data was ~34s.

**Caveats:**

1. The app is running on a powerful, mordern laptop rather than a lambda.
2. We're not aggregating EDM data.

## 1. groupPresentsByProvider

Uses Mongoose’s `aggregate` method to execute a MQL query that aggregates present and request data, groups by provider, and sorts by provider name.

- 852 records: 366ms
- 4745 records: 3.12s

## 2. presents

Uses the standard Mongoose `populate` method to aggregate provider and request data, unsorted.

- 1,811 records: 265ms
- 15,000 records: 1.49s

## 3. groupPresentsByRequest

Uses Mongoose’s `aggregate` method to execute a MQL query that aggregates present and provider data, groups by request ID, and sorts by request creation date.

- 149 records: 392ms
- 1,000 records: 3.4s

## 4. requests

Uses the standard Mongoose `populate` method to aggregate present and provider data, unsorted.

- 149 records: 234ms
- 1,000 records: 2.11s
