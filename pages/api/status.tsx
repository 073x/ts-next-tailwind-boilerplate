import { NextApiRequest, NextApiResponse } from "next";
import { StatusEPResponse } from "./types";

/*
* Endpoint: /api/status
* Response: Return an active status (Whether or the system is operational at the moment).
*/
const handler = (req: NextApiRequest, res: NextApiResponse<StatusEPResponse>) => {
  res
    .status(200)
    .json(
      {
        status: {
          code: 200,
          success: true
        },
        message: "API is Operational."
      }
    );
}

export default handler;
