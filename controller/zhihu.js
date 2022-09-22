import * as getZhihu from '../api/zhihu'

getZhihu.daily()
.then(r => {
    console.log(r)
})