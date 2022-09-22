module.exports = {
    getTime: () => {
        const date = new Date()
        let m = date.getMonth() + 1
        let d = date.getDate()
        let h = date.getHours()
        let mm = date.getMinutes()
        m = m < 10 ? "0" + m : m
        d = d < 10 ? "0" + d : d
        h = h < 10 ? "0" + h : h
        mm = mm < 10 ? "0" + mm : mm
        return `${m}-${d} ${h}:${mm}`
    }
}