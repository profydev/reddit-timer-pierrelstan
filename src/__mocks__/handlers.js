import { rest } from 'msw';
import response1 from './response/response-1.json';
import response2 from './response/response-2.json';
import response3 from './response/response-3.json';
import response4 from './response/response-4.json';
import response5 from './response/response-5.json';

const cursorResponseMap = {
  initial: response1,
  t3_k69yg0: response2,
  t3_k07g82: response3,
  t3_ox7ri7: response4,
  t3_pyyorg: response5,
};

function getJSONResponseForRequest(req) {
  const after = req.url.searchParams.get('after');
  return cursorResponseMap[after || 'initial'];
}

const handlers = [
  rest.get('https://www.reddit.com/r/less-than-500-posts/top.json', (req, res, ctx) => {
    const after = req.url.searchParams.get('after');

    const json = getJSONResponseForRequest(req);
    if (after === 't3_k07g82') {
      json.data.dist = 70;
      json.data.after = null;
      json.data.children = json.data.children.slice(0, 70);
    }
    return res(
      ctx.status(200),
      ctx.json(json),
    );
  }),

  rest.get('https://www.reddit.com/r/failing-request/top.json', (req, res, ctx) => {
    const after = req.url.searchParams.get('after');

    if (after === 't3_k07g82') {
      return res(
        ctx.status(500),
        ctx.delay(500),
        ctx.json({ errorMessage: 'Internal server error' }),
      );
    }
    return res(
      ctx.status(500),
      ctx.json(getJSONResponseForRequest(req)),
    );
  }),

  rest.get('https://www.reddit.com/*', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(getJSONResponseForRequest(req)),
  )),
];

export default handlers;
