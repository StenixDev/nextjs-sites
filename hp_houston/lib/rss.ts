// lib/rss.js
import Parser from 'rss-parser';

const parser = new Parser();

export async function getFeed() {
  const feed = await parser.parseURL('https://hirepatriots.com/feed');

  return feed.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    content: item.contentSnippet,
  }));
}
