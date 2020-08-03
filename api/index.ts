import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  let who = "anonymous";

  if (req.body && req.body.who) {
    who = req.body.who;
  } else if (req.query.who) {
    who = req.query.who;
  } else if (req.cookies.who) {
    who = req.cookies.who;
  }

  res.status(200).send(`Hello ${who}!`);
};
