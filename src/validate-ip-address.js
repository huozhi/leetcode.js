/**
 * @param {string} IP
 * @return {string}
 */

var validIPAddress = function(ip) {
  var IPV4 = /^(([1-9]\d{0,2}|0)\.){3}([1-9]\d{0,2}|0)$/
  var IPV6 = /^(([A-Fa-f0-9]{1,4}):){7}([A-Fa-f0-9]{1,4})$/

  if (IPV4.test(ip)) {
    var nums = ip.split('.')
    if (nums.every(str => parseInt(str, 10) <= 255)) {
      return 'IPv4'
    }
  } else if (IPV6.test(ip)) {
    return 'IPv6'
  }
  return 'Neither'
}
