/* global it, expect */

import axios from 'axios';
import HttpRequestMock from 'http-request-mock';
const mocker = HttpRequestMock.setupForUnitTest('xhr');

mocker.use('../mock/samples/req1.js');
mocker.use('../mock/samples/req2.js');
mocker.use('../mock/samples/req3.js');

it('use', async () => {
  const res1 = await axios.get('https://www.api.com/req1');
  const res2 = await axios.get('https://www.api.com/req2');
  const res3 = await axios.post('https://www.api.com/req3', {
    err: res2.data.result,
  });

  expect(res1.data.result).toBe('some normal data of req1');
  expect(res2.data.result).toBe('some error data of req2');
  expect(res3.data.result).toBe('[req3] -> some error data of req2');
});
