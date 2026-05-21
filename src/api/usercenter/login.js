import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/usercenter/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function get(id) {
  return request({
    url: '/usercenter/user/get',
    method: 'post',
    data:id
  })
}
export function logout() {
  return request({
    url: '/usercenter/user/logout',
    method: 'post'
  })
}

