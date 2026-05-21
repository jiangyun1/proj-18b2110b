import request from '@/utils/request'

export function save(data) {
return request({
    url: '/datacenter/dataAssetsPatch/save',
        method: 'post',
        data
    })
}

export function del(ids) {
    return request({
        url: '/datacenter/dataAssetsPatch/delete',
        method: 'post',
        data:ids
    })
}

export function update(data) {
    return request({
        url: '/datacenter/dataAssetsPatch/update',
        method: 'post',
        data
    })
}

export function get(id) {
    return request({
        url: '/datacenter/dataAssetsPatch/get',
        method: 'post',
        data:id
    })
}


export function pager(param) {
    return request({
        url: '/datacenter/dataAssetsPatch/pager',
        method: 'post',
        data: param
    })
}


export default { save, update, del, get,pager }
