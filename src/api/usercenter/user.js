import request from '@/utils/request'

export function save(data) {
return request({
    url: '/usercenter/user/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/usercenter/user/delete',
        method: 'post',
        data:ids
    })
}

export function update(data) {
    return request({
        url: '/usercenter/user/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/usercenter/user/get',
        method: 'post',
        data:id
    })
}


export function pager(param) {
    return request({
        url: '/usercenter/user/pager',
        method: 'post',
        data: param
    })
}

export function updateStatus(param) {
    return request({
        url: '/usercenter/user/updateStatus',
        method: 'post',
        data: param
    })
}

export function updateRoles(param) {
    return request({
        url: '/usercenter/user/updateRoles',
        method: 'post',
        data: param
    })
}

export function updatePermission(param) {
    return request({
        url: '/usercenter/user/updatePermission',
        method: 'post',
        data: param
    })
}

export function getUserRoles(id) {
    return request({
        url: '/usercenter/user/getUserRoles/'+id,
        method: 'get',
    })
}

export function getUserMenus(id) {
    return request({
        url: '/usercenter/user/getUserMenus/'+id,
        method: 'get',
    })
}



export default { save, update, del, get,pager,updateStatus,updateRoles,getUserRoles,updatePermission,getUserMenus }
