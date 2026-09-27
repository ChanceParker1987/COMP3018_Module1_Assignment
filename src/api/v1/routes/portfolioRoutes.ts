import Router from "express";
import { calculatePortfolioPerformance } from "../../../portfolio/portfolioPerformance";

const router = Router();

router.get("/portfolio/performance", (req, res) => {
    const initialInvestment = Number(req.query.initialInvestment);
    const currentValue = Number(req.query.currentValue);

    const result = calculatePortfolioPerformance(
        initialInvestment,
        currentValue
    );

    res.json(result);
});

export default router;