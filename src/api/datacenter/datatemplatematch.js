import request from '@/utils/request'

export function save(data) {
return request({
    url: '/datacenter/dataTemplateMatch/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/datacenter/dataTemplateMatch/delete',
        method: 'post',
        data:ids
    })
}

export function update(data) {
    return request({
        url: '/datacenter/dataTemplateMatch/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/datacenter/dataTemplateMatch/get',
        method: 'post',
        data:id
    })
}


export function pager(param) {
    return request({
        url: '/datacenter/dataTemplateMatch/pager',
        method: 'post',
        data: param
    })
}


export default { save, update, del, get,pager }
