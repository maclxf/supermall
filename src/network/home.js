import {request} from './request'

export function getHomeMultiData() {
  return request({
    url:'/test/getBanners'
  });
}

export function getGoodsData(type, page) {
  return request({
    url:'/test/getGoods',
    params:{
      type,
      page
    }
  });
}
