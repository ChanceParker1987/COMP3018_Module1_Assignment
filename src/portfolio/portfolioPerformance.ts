interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}
/**
 * Calculates the performance of a portfolio.
 *
 * @param initialInvestment - The initial value of the investment.
 * @param currentValue - The current value of the investment.
 * @returns The calculated portfolio performance.
 */
export function calculatePortfolioPerformance(
    initialInvestment: number, 
    currentValue: number
): PortfolioPerformance {
    // Corrected to properly calculate profitOrLoss.
    const profitOrLoss = currentValue - initialInvestment;
    // PercentageChange now returns correct amount 
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
    // Avoided if statements by utilizing ternary expressions.
    const performanceSummary: string =
        percentageChange >= 30
        ? "Excellent performance! Your investments are doing great.":
        percentageChange >= 10
        ? "Solid gain. Keep monitoring your investments.":
        percentageChange > 0
        ? "Modest gain. Your portfolio is growing slowly.":
        percentageChange === 0
        ? "No change. Your portfolio is holding steady.":
        percentageChange >= -10
        ? "Minor loss. Stay calm and review your options.":
          "Significant loss. Review your portfolio strategy."

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}