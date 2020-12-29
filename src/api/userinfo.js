import request from '@/utils/request'

export function getUser(query) {
  return request({
    url: '/portal/employee/getEmployeeInfo',
    // url: 'static/data/account.json',
    method: 'get',
    params: query
  })
}

export function getSidebarMenus(query) {
  return request({
    // url: '/navigation/listNavigation',
    url: 'static/data/menu.json',
    method: 'get',
    params: query
  })
}
// 修改密码
export function changePwd(data) {
  return request({
    url: '/employee/changePwd',
    method: 'post',
    data
  })
}
// 获取销售
export function queryOrganSaleList(data) {
  return request({
    url: '/api/organ/query/queryOrganSaleList',
    method: 'post',
    data
  })
}

