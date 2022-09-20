import { getNewsList } from './api/zhihuNews'

getNewsList(20220920).then((res) => {
    console.log(res.data)
})