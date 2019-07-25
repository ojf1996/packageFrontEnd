import request from '@/utils/request'

export const addPackage = (data) => {
  return request({
    url: `/packages`,
    method: 'post',
    data: data
  })
}

export const loadAllPackage = () => {
  return request({
    url: `/packages`,
    method: 'get'
  })
}
