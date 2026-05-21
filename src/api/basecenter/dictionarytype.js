import request from '@/utils/request'

export function save(data) {
return request({
    url: '/basecenter/dictionaryType/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/basecenter/dictionaryType/delete',
        method: 'post',
        ids
    })
}

export function update(data) {
    return request({
        url: '/basecenter/dictionaryType/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/basecenter/dictionaryType/get',
        method: 'post',
        id
    })
}


export function pager(param) {
    return request({
        url: '/basecenter/dictionaryType/pager',
        method: 'post',
        data: param
    })
}





export default { save, update, del, get,pager }
