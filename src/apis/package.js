import request from '@/utils/request'

export const addPackage = (data) => {
  return request({
    url: `/packages`,
    method: 'post',
    data: data
  })
}
