import request from '@/utils/request'

export function save(data) {
    return request({
        url: '/usercenter/dept/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/usercenter/dept/delete',
        method: 'post',
        data:ids
    })
}

export function update(data) {
    return request({
        url: '/usercenter/dept/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/usercenter/dept/get',
        method: 'post',
        data:id
    })
}


export function pager(param) {
    return request({
        url: '/usercenter/dept/pager',
        method: 'post',
        data: param
    })
}


export function treeList(param) {
    return request({
        url: '/usercenter/dept/treeList',
        method: 'post',
        data:param
    })
}


export default { save, update, del, get,pager,treeList }
