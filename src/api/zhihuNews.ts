import axios from "axios"
import https from 'https'

const agent = new https.Agent({  
    rejectUnauthorized: false
});

// 获取知乎日报某日内容列表 20220920
export function getNewsList(date: number) {
    const api = `https://news-at.zhihu.com/api/4/news/before/${date + 1}`
    return axios.get(api, { httpsAgent: agent })
}