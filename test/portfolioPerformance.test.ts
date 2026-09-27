import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

// Function test
describe("calculatePortfolioPerformance", () => {
    it("should return the correct portfolio performance", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 16000;

        // Act
        const result = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result).toEqual({
            initialInvestment: 10000,
            currentValue: 16000,
            profitOrLoss: 6000,
            percentageChange: 60,
            performanceSummary: "Excellent performance! Your investments are doing great.",
        });
    });
}); 

describe("calculatePortfolioPerformance", () => {
    it("should return the correct portfolio performance", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 11000;

        // Act
        const result = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result).toEqual({
            initialInvestment: 10000,
            currentValue: 11000,
            profitOrLoss: 1000,
            percentageChange: 10,
            performanceSummary: "Solid gain. Keep monitoring your investments.",
        });
    });
}); 

describe("calculatePortfolioPerformance", () => {
    it("should return the correct portfolio performance", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 10100;

        // Act
        const result = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result).toEqual({
            initialInvestment: 10000,
            currentValue: 10100,
            profitOrLoss: 100,
            percentageChange: 1,
            performanceSummary: "Modest gain. Your portfolio is growing slowly.",
        });
    });
}); 

describe("calculatePortfolioPerformance", () => {
    it("should return the correct portfolio performance", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 10000;

        // Act
        const result = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result).toEqual({
            initialInvestment: 10000,
            currentValue: 10000,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: "No change. Your portfolio is holding steady.",
        });
    });
}); 

describe("calculatePortfolioPerformance", () => {
    it("should return the correct portfolio performance", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 9000;

        // Act
        const result = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result).toEqual({
            initialInvestment: 10000,
            currentValue: 9000,
            profitOrLoss: -1000,
            percentageChange: -10,
            performanceSummary: "Minor loss. Stay calm and review your options.",
        });
    });
}); 

describe("calculatePortfolioPerformance", () => {
    it("should return the correct portfolio performance", () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 8000;

        // Act
        const result = calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

        // Assert
        expect(result).toEqual({
            initialInvestment: 10000,
            currentValue: 8000,
            profitOrLoss: -2000,
            percentageChange: -20,
            performanceSummary: "Significant loss. Review your portfolio strategy.",
        });
    });
}); 