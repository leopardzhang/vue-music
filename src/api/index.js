import axios from 'axios'
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

const debug = process.env.NODE_ENV !== 'production' // 判断是开发模式还是生产模式

export function getIndexData () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

  const query = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 312035716,
    needNewCode: 1
  });
  return jsonp(url, query, options);
}

export function getDiscList() {
  const url = debug ? '/api/getDiscList' : 'http://ustbhuangyi.com/music/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
