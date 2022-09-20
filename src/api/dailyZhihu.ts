import https from 'https'
import axios from "axios"

const agent = new https.Agent({  
    rejectUnauthorized: false
});

// 知乎日报 v4 API

// 获取某日条目列表 20220920
export function getNewsList(date: number) {
    const api = `https://news-at.zhihu.com/api/4/news/before/${date + 1}`
    return axios.get(api, { httpsAgent: agent })
}

// 获取条目内容 9753154
export function getNews(id: number) {
    const api = `http://news-at.zhihu.com/api/4/news/${id}`
    return axios.get(api, { httpsAgent: agent })
}

// 获取条目获赞评论数量 9753154
export function getExtra(id: number) {
    const api = `https://news-at.zhihu.com/api/4/story-extra/${id}`
    return axios.get(api, { httpsAgent: agent })
}

// 获取条目长评论 9753154
export function getLongComments(id: number) {
    const api = `http://news-at.zhihu.com/api/4/story/${id}/long-comments`
    return axios.get(api, { httpsAgent: agent })
}

// 获取条目短评论 9753154
export function getShortComments(id: number) {
    const api = `http://news-at.zhihu.com/api/4/story/${id}/short-comments`
    return axios.get(api, { httpsAgent: agent })
}