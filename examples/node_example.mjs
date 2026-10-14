import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("serenido/weibo-scraper").call({
    "mode": "trending",
    "trendingList": "hot_searches",
    "maxResults": 50
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
