import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  console.log(req);
  setTimeout(() => {
    res.send({ status: "File Upload" });
  }, 5000);
};
