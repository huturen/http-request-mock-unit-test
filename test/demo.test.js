/* global it, expect */
import {render, screen, fireEvent, waitFor} from '@testing-library/vue';
import App from '../src/App';

import '../mock/.runtime.js';

it('req1 -> req2 -> req3', async () => {
  render(App);
  const button = screen.getByText('req1 -> req2 -> req3');
  await fireEvent.click(button);

  const assert = text => expect(screen.queryByText(text)).toBeTruthy();
  await waitFor(() => assert('result1: some normal data of req1'));
  await waitFor(() => assert('result2: some error data of req2'));
  await waitFor(() => assert('result3: [req3] -> some error data of req2'));
});
