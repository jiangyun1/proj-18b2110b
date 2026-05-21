import request from '@/utils/request'

export function save(data) {
return request({
    url: '/usercenter/resource/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/usercenter/resource/delete',
        method: 'post',
        data:ids
    })
}

export function update(data) {
    return request({
        url: '/usercenter/resource/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/usercenter/resource/get',
        method: 'post',
        data:id
    })
}


export function pager(param) {
    return request({
        url: '/usercenter/resource/pager',
        method: 'post',
        data: param
    })
}
export function treeList(param) {
    return request({
        url: '/usercenter/resource/treeList',
        method: 'post',
        data: param
    })
}

export default { save, update, del, get,pager ,treeList}
