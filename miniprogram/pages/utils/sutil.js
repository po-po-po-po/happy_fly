function formatDate(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function today() {
  return addDate(Date.now(), 0)
}

function tomorrow() {
  return addDate(Date.now(), 1)
}

function addDate(d0, x) {
  var d1 = new Date(d0)

  d1 = d1.valueOf()
  d1 = d1 + x * 24 * 60 * 60 * 1000
  d1 = new Date(d1)

  const year = d1.getFullYear()
  const month = d1.getMonth() + 1
  const day = d1.getDate()

  const hour = d1.getHours()
  const minute = d1.getMinutes()
  const seconds = d1.getSeconds()

  return [hour, minute].map(formatNumber).join(':')
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  today,
  tomorrow
}
