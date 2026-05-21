import request from '@/utils/request'

export function dataImport(data) {
    return request({
        url: '/datacenter/datainfo/dataImport',
        method: 'post',
        data
    })
}

export function dataTemplateDownload(baseInfo) {
    return request({
        url: '/datacenter/datainfo/dataTemplateDownload',
        method: 'post',
        responseType: 'blob',
        data:baseInfo
    })
}


export function getCompareData(dataCompareDTO) {
    return request({
        url: '/datacenter/datainfo/getCompareData',
        method: 'post',
        data: dataCompareDTO
    })
}


export default { dataTemplateDownload,dataImport,getCompareData }
