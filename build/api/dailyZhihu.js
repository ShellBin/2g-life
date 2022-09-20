"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShortComments = exports.getLongComments = exports.getExtra = exports.getNews = exports.getNewsList = void 0;
const https_1 = __importDefault(require("https"));
const axios_1 = __importDefault(require("axios"));
const agent = new https_1.default.Agent({
    rejectUnauthorized: false
});
// 知乎日报 v4 API
// 获取某日条目列表 20220920
function getNewsList(date) {
    const api = `https://news-at.zhihu.com/api/4/news/before/${date + 1}`;
    return axios_1.default.get(api, { httpsAgent: agent });
}
exports.getNewsList = getNewsList;
// 获取条目内容 9753154
function getNews(id) {
    const api = `http://news-at.zhihu.com/api/4/news/${id}`;
    return axios_1.default.get(api, { httpsAgent: agent });
}
exports.getNews = getNews;
// 获取条目获赞评论数量 9753154
function getExtra(id) {
    const api = `https://news-at.zhihu.com/api/4/story-extra/${id}`;
    return axios_1.default.get(api, { httpsAgent: agent });
}
exports.getExtra = getExtra;
// 获取条目长评论 9753154
function getLongComments(id) {
    const api = `http://news-at.zhihu.com/api/4/story/${id}/long-comments`;
    return axios_1.default.get(api, { httpsAgent: agent });
}
exports.getLongComments = getLongComments;
// 获取条目短评论 9753154
function getShortComments(id) {
    const api = `http://news-at.zhihu.com/api/4/story/${id}/short-comments`;
    return axios_1.default.get(api, { httpsAgent: agent });
}
exports.getShortComments = getShortComments;
