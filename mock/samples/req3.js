/**
 * @url https://www.api.com/req3
 * @method post
 * @delay 700
 */
module.exports = (request) => {
  return { code: 0, msg: 'ok', result: '[req3] -> ' + request.body.err };
};
