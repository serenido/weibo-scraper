import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run = client.actor("serenido/weibo-scraper").call(run_input={
    "mode": "trending",
    "trendingList": "hot_searches",
    "maxResults": 50
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
