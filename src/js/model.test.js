import { it, expect } from "vitest";
import {
  clearData,
  randomIndexGenerator,
  index,
  correctAnswerIndex,
} from "./model";

it("should clear given array", () => {
  const data = [1, 2, 3];

  clearData(data);

  const result = data.length;

  expect(result).toBe(0);
});

it("should generate  number", () => {
  const max = 5;
  randomIndexGenerator(max, true);
  const result = index;

  expect(result).toBeTypeOf("number");
});
it("should generate  number", () => {
  const max = 5;
  randomIndexGenerator(max, false);
  const result = correctAnswerIndex;

  expect(result).toBeTypeOf("number");
});

it("should generate random number, less than max", () => {
  const max = 5;
  // let index;

  randomIndexGenerator(max, true);
  const result = index;

  expect(result).toBeLessThan(max + 1);
});

it("should generate random number, greater than 0", () => {
  const max = 5;

  randomIndexGenerator(max, true);
  const result = index;

  expect(result).toBeGreaterThanOrEqual(0);
});
