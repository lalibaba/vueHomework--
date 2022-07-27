import request from '@/utils/request'

export const city = (params) =>
  request({
    url: '/area/city',
    params,
  })
