import { mySum } from "../src/task.js";
import { TestLogger } from "./test_logger.js";
import assert from "assert";

const logger = new TestLogger();

describe("Task Test", () => {

    after(() => {
        logger.saveResults();
    });

    it("should_sum_two_positive_values", () => {
        const a = 47;
        const b = 53;
        const result = mySum(a, b);
        logger.logSingleTestResult("should_sum_two_positive_values", result == 100);
        assert.strictEqual(result, 100);
    });

    it("should_sum_two_negative_values", () => {
        const a = -47;
        const b = -53;
        const result = mySum(a, b);
        logger.logSingleTestResult("should_sum_two_negative_values", result == -100);
        assert.strictEqual(result, -100);
    });

    it("test_should_sum_two_decimal_values", () => {
        const a = 27.5487746;
        const b = 94.84745641;
        const result = mySum(a, b);
        logger.logSingleTestResult("test_should_sum_two_decimal_values", Math.round((result + Number.EPSILON) * 100) / 100 == 122.40);
        assert.strictEqual(Math.round((result + Number.EPSILON) * 100) / 100, 122.40);
    });

    it("test_should_sum_two_zero_values", () => {
        const a = 0;
        const b = 0;
        const result = mySum(a, b);
        logger.logSingleTestResult("test_should_sum_two_zero_values", result == 0);
        assert.strictEqual(result, 0);
    });

});
