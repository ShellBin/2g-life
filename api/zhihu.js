import config from '../config'
import Parser from "rss-parser"

const parser = new Parser();

// 知乎日报
export async function daily() {
    return await parser.parseURL(config.RSSHub + '/zhihu/daily')
}

// 知乎热榜
export async function hotlist() {
  return await parser.parseURL(config.RSSHub + '/zhihu/hotlist')
}
