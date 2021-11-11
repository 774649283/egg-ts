/**
 * 封装返回 normal and error 参数
 * @type {{foo(*)}}
 */
module.exports = {
  success(message, data, total) {
    this.body = {
      code: 0,
      success: true,
      message,
      result: data,
      total,
    };
  },
  failure(message, data, code) {
    this.body = {
      code: code || 500,
      success: false,
      message,
      result: data,
    };
  },
};
