import request from '@/utils/request'

export function save(data) {
return request({
    url: '/usercenter/role/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/usercenter/role/delete',
        method: 'post',
        data:ids
    })
}

export function update(data) {
    return request({
        url: '/usercenter/role/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/usercenter/role/get',
        method: 'post',
        data:id
    })
}


export function pager(param) {
    return request({
        url: '/usercenter/role/pager',
        method: 'post',
        data: param
    })
}

export function updateStatus(param) {
    return request({
        url: '/usercenter/role/updateStatus',
        method: 'post',
        data: param
    })
}

export function listMenu(roleId) {
    return request({
        url: '/usercenter/role/listMenu/'+roleId,
        method: 'get',
    })
}


export function listResource(roleId) {
    return request({
        url: '/usercenter/role/listResource/'+roleId,
        method: 'get',
    })
}



export function allocResource(param) {
    return request({
        url: '/usercenter/role/allocResource',
        method: 'post',
        data: param
    })
}


export function allocMenu(param) {
    return request({
        url: '/usercenter/role/allocMenu',
        method: 'post',
        data: param
    })
}

export default { save, update, del, get,pager,updateStatus,listMenu,listResource,allocResource,allocMenu }
