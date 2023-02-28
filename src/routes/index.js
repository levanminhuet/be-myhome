import autRouter from "./auth";
import insertRouter from "./insert";

const initRoutes = (app) => {
  app.use("/api/v1/auth", autRouter);
  app.use("/api/v1/insert", insertRouter);

  return app.use("/", (req, res) => {
    res.send("server on ...");
  });
};

export default initRoutes;
