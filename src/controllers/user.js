import * as services from "../services/user";
import asyncHandler from "express-async-handler";
import db from "../models";
export const getCurrent = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.getOne(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};

export const getRoles = asyncHandler(async (req, res) => {
  const response = await db.Role.findAll();
  return res.json({
    success: response ? true : false,
    roles: response ? response : "Cannot get roles",
  });
});
