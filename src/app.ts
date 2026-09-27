import express, { Express } from "express";
import healthRoutes from "./api/v1/routes/healthRoutes";
import portfolioRoutes from "./api/v1/routes/portfolioRoutes";

// Initialize Express application
const app: Express = express();

app.use("/api/v1", healthRoutes);
app.use("/api/v1", portfolioRoutes);

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;