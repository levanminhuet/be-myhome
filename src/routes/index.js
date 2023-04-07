import autRouter from "./auth";
import insertRouter from "./insert";
import categoryRouter from "./category";
import postRouter from "./post";
import priceRouter from "./price";
import areaRouter from "./area";
import provinceRouter from "./province";
import userRouter from "./user";
import { notFound, errorHandler } from "../middleware/errHandler";

const initRoutes = (app) => {
  app.use("/api/v1/auth", autRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/post", postRouter);
  app.use("/api/v1/price", priceRouter);
  app.use("/api/v1/area", areaRouter);
  app.use("/api/v1/province", provinceRouter);
  app.use("/api/v1/user", userRouter);

  app.use(notFound);
  app.use(errorHandler);
};

export default initRoutes;
