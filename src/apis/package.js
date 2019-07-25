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

export const updatePackage = (id, data) => {
  return request({
    url: `/packages/${id}`,
    method: 'put',
    data: data
  })
}

export const filterPackage = (data) => {
  return request({
    url: `/packages`,
    method: 'get',
    params: data
  })
}
