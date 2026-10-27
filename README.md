# Weibo Scraper API

Get Weibo posts, hot searches (微博热搜), comments and creator profiles as clean JSON. No login, no cookies.

Runs in the cloud on Apify. No servers, no proxy setup, no code to maintain. **[Open it on Apify](https://apify.com/serenido/weibo-scraper)**

**Price:** $1 per 1,000 rows. No monthly fee. Apify's free plan gives $5 of usage every month, no credit card needed. [Current price](https://apify.com/serenido/weibo-scraper/pricing).

## What you get

- Search posts by keyword, many keywords per run (about 90 posts per keyword): text, likes, reposts, comments, topics, author followers and paid-post flag
- Hot searches (微博热搜) with rank and heat, and the popular feed by category
- Top comments of any post, with some replies
- Creator profiles, with their latest posts if you want them

## Quick start: Python

```bash
pip install -U apify-client
```

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("serenido/weibo-scraper").call(run_input={
    "mode": "trending",
    "trendingList": "hot_searches",
    "maxResults": 50
})

for item in client.dataset(run.default_dataset_id).iterate_items():
    print(item)
```

## Quick start: JavaScript (Node.js)

```bash
npm install apify-client
```

```javascript
import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("serenido/weibo-scraper").call({
    "mode": "trending",
    "trendingList": "hot_searches",
    "maxResults": 50
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

## Quick start: one HTTP call

Runs the tool and returns the rows in one request. Good for runs under 5 minutes; for bigger runs use the Python or JavaScript example.

```bash
curl -X POST "https://api.apify.com/v2/acts/serenido~weibo-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"mode": "trending", "trendingList": "hot_searches", "maxResults": 50}'
```

Get your token in [Apify Console > Settings > API & Integrations](https://console.apify.com/settings/integrations).

## Use it from AI apps (MCP)

Any app that supports remote MCP servers (Claude, ChatGPT, Cursor, VS Code and others) can run this tool for you. Add this server URL: `https://mcp.apify.com?tools=serenido/weibo-scraper`. Your Apify account connects on first use. Example config for Cursor:

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=serenido/weibo-scraper"
    }
  }
}
```

## Input example

```json
{
  "mode": "trending",
  "trendingList": "hot_searches",
  "maxResults": 50
}
```

Other modes: `search` (posts by keyword), `posts`, `comments`, `creators`. All options are listed on the [input page](https://apify.com/serenido/weibo-scraper/input-schema).

## Output example (one row)

```json
{
  "type": "hotSearch",
  "rank": 2,
  "keyword": "郑钦文距离李娜还有多远",
  "heat": 1602954,
  "label": "new",
  "searchUrl": "https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%B7%9D%E7%A6%BB%E6%9D%8E%E5%A8%9C%E8%BF%98%E6%9C%89%E5%A4%9A%E8%BF%9C%23",
  "scrapedAt": "2026-10-12T03:09:55Z"
}
```

Download as JSON, CSV or Excel, or connect to Make, Zapier or n8n.

## Use cases

- China social listening and brand monitoring
- Daily hot-search tracking for news and market research
- Collecting comments for sentiment analysis

## More tools by Serenido

- [Bilibili Scraper](https://github.com/serenido/bilibili-scraper): videos, comments, danmaku and creators. No login.
- [AliExpress Product Details Scraper](https://github.com/serenido/aliexpress-product-details-scraper): every variant with price and stock, shipping to 89 countries.
- [AliExpress Search Scraper](https://github.com/serenido/aliexpress-search-scraper): price, discount and exact order count for any search.
- [Australian Supermarket Prices: Coles, Woolworths and ALDI](https://github.com/serenido/coles-woolworths-aldi-scraper): Coles, Woolworths and ALDI in one run, with unit prices.
- [Google Trends Scraper](https://github.com/serenido/google-trends-scraper): interest over time, rising queries, regions and Trending Now.
- [Football xG Scraper](https://github.com/serenido/football-xg-scraper): Understat xG tables, matches, shots, players and lineups.
- [Weibo Hot Search Scraper](https://github.com/serenido/weibo-hot-search): the live 微博热搜 list, changes since your last run, top posts per topic.
- [AliExpress Dropshipping Scraper](https://github.com/serenido/aliexpress-dropshipping): winning products with shipping to your country, landed cost and profit.
- [WeChat Official Account Scraper](https://github.com/serenido/wechat-official-account-scraper): 公众号 articles by keyword or link, with full text, account, author and date.
- [RedNote Trending Scraper](https://github.com/serenido/rednote-trending-scraper): 小红书 trending notes with full text, images, video, likes, saves and comments.

## Support

Found a bug or need a field? Open an issue here or on the [Issues tab on Apify](https://apify.com/serenido/weibo-scraper/issues).

Use it only for public data and follow the website's terms and the laws that apply to you. This project is not affiliated with the websites it reads.
