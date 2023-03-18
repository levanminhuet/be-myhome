import * as insertService from "../services/insert";

export const insert = async (req, res) => {
  try {
    const response = insertService.insertService(req.body);
    // const response = insertService.createPricesAndAreas();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail controller:" + error,
    });
  }
};
