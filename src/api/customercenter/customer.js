import request from '@/utils/request'

export function save(data) {
  return request({
    url: '/customercenter/customer/save',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: '/customercenter/customer/delete',
    method: 'post',
    data:ids
  })
}

export function update(data) {
  return request({
    url: '/customercenter/customer/update',
    method: 'post',
    data
  })
}

export function get(id) {
  return request({
    url: '/customercenter/customer/get',
    method: 'post',
    data: id
  })
}


export function pager(param) {
  return request({
    url: '/customercenter/customer/pager',
    method: 'post',
    data: param
  })
}

export function customerData(param) {
  return request({
    url: '/customercenter/customer/customerData',
    method: 'post',
    data: param
  })
}



export function exportTemplate(param) {
  return request({
    url: '/customercenter/customer/exportTemplate',
    method: 'post',
    data: param
  })
}

export function getReportData(param) {
  return request({
    url: '/datacenter/baseInfo/getReportData',
    method: 'post',
    data: param
  })
}

export default { save, update, del, get,pager,customerData }
