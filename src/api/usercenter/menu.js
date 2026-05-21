import request from '@/utils/request'

export function save(data) {
return request({
    url: '/usercenter/menu/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/usercenter/menu/delete',
        method: 'post',
        data:ids
    })
}

export function update(data) {
    return request({
        url: '/usercenter/menu/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/usercenter/menu/get',
        method: 'post',
        data:id
    })
}


export function pager(param) {
    return request({
        url: '/usercenter/menu/pager',
        method: 'post',
        data: param
    })
}
export function updateHidden(param) {
    return request({
        url: '/usercenter/menu/updateHidden',
        method: 'post',
        data: param
    })
}
export function treeList(param) {
    return request({
        url: '/usercenter/menu/treeList',
        method: 'post',
        data: param
    })
}



export default { save, update, del, get,pager,updateHidden }
