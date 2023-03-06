import db from "../models";

export const getPostsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        ],
        attributes: ["id", "title", "star", "address", "description"],
      });

      resolve({
        err: reponse ? 0 : 1,
        msg: reponse ? "OK" : "Get posts fall",
        reponse,
      });
    } catch (error) {
      reject(error);
    }
  });
