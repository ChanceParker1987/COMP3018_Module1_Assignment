import express, { Express } from "express";
import healthRoutes from "./api/v1/routes/healthRoutes";

// Initialize Express application
const app: Express = express();
app.use("/api/v1", healthRoutes);

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;