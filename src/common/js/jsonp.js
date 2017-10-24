import fnJsonp from 'jsonp'

/*
 *  第一步 url 有可能本身也带有 query 所以判断一下
 */

export default function jsonp (url, query, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + parma(query);
  return new Promise((resolve, reject) => {
    fnJsonp(url, option, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

/*
 *  拼接参数
 *  如果传入的参数为空则返回空
 *  如果不为空则将参数展开并拼接最后返回
 *  最后的三目运算符目的是去掉第一个多余的 &
 *  encodeURLComponent 的作用是将参数里的汉字等文字转换为16进制
 */
function parma (data) {
    let url = '';
    for (let i in data) {
      let val = data[i] != undefined ? data[i] : '';
      url += `&${i}=${encodeURIComponent(val)}`
    }
    return url ? url.substring(1) : '';
}
