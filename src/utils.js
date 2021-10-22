export function deepFind(arr, indexList) {
    let obj = arr
    if(indexList.length === 0) {
        return {
            children: arr
        }
    }
    indexList.forEach(index => {
        index = parseInt(index)
        if(obj.children) {
            obj = obj.children[index]
        } else {
            obj = obj[index]
        }
    })
    return obj
}

export function deepSplice(arr, indexList, howmany, item) {
    const i = parseInt(indexList.pop())
    const obj = deepFind(arr, indexList)
    if(obj.children) {
        if(item) {
            obj.children.splice(i, howmany, item)
        } else {
            obj.children.splice(i, howmany)
        }
    }
    return arr
}

export function wrapHref(href) {
    if(href.startsWith('http://') || href.startsWith('https://')) {
        return href
    } else {
        return `http://${href}`
    }
}