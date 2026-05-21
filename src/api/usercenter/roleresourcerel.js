import request from '@/utils/request'

export function save(data) {
return request({
    url: '/usercenter/roleResourceRel/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/usercenter/roleResourceRel/delete',
        method: 'post',
        data:ids
    })
}

export function update(data) {
    return request({
        url: '/usercenter/roleResourceRel/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/usercenter/roleResourceRel/get',
        method: 'post',
        data:id
    })
}


export function pager(param) {
    return request({
        url: '/usercenter/roleResourceRel/pager',
        method: 'post',
        data: param
    })
}


export default { save, update, del, get,pager }
