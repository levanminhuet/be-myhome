import autRouter from "./auth";

const initRoutes = (app) => {
  app.use("/api/v1/auth", autRouter);

  return app.use("/", (req, res) => {
    res.send("server on ...");
  });
};

export default initRoutes;
