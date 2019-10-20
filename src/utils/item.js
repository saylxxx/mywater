import request from '@/utils/request'

// 取得所有的資料
export function getItemList(query) {
  return request({
    url: '/category/itembycategory',
    method: 'get',
    params: query })
}

// 國家代碼的資料
export function getCountryList(query) {
  return request({
    url: '/country',
    method: 'get',
    params: query })
}

// 取得產品別資料
export function getProductList(query) {
  return request({
    url: '/product/query/product',
    method: 'get',
    params: query })
}

// 取得產品細項料
export function getProductCodeList(query) {
  return request({
    url: '/product/query/productcode',
    method: 'get',
    params: query })
}
