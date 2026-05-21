import request from '@/utils/request'

export function save(data) {
return request({
    url: '/basecenter/dictionaryTypeValue/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/basecenter/dictionaryTypeValue/delete',
        method: 'post',
        ids
    })
}

export function update(data) {
    return request({
        url: '/basecenter/dictionaryTypeValue/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/basecenter/dictionaryTypeValue/get',
        method: 'post',
        id
    })
}


export function pager(param) {
    return request({
        url: '/basecenter/dictionaryTypeValue/pager',
        method: 'post',
        data: param
    })
}

export function getDictTypeValue(param) {
    return request({
        url: '/basecenter/dictionaryTypeValue/getDictTypeValue',
        method: 'post',
        data:param
    })
}
export function getDictValueTreeList(param) {
    return request({
        url: '/basecenter/dictionaryTypeValue/getDictValueTreeList',
        method: 'post',
        data:param
    })
}


export default { save, update, del, get,pager,getDictTypeValue,getDictValueTreeList }
