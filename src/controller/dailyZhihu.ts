import * as dailyZhihu from '../api/dailyZhihu'

dailyZhihu.getNewsList(20220920).then((res) => {
    console.log(res.data)
})