import request from '@/utils/request'

export function save(data) {
return request({
    url: '/datacenter/dataCashflowPatch/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/datacenter/dataCashflowPatch/delete',
        method: 'post',
        data:ids
    })
}

export function update(data) {
    return request({
        url: '/datacenter/dataCashflowPatch/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/datacenter/dataCashflowPatch/get',
        method: 'post',
        data:id
    })
}


export function pager(param) {
    return request({
        url: '/datacenter/dataCashflowPatch/pager',
        method: 'post',
        data: param
    })
}


export default { save, update, del, get,pager }
