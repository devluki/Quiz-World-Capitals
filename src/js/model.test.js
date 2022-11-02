import { it, expect } from "vitest";
import { clearData, randomIndexGenerator } from "./model";

it("should clear given array", () => {
  const data = [1, 2, 3];

  clearData(data);

  const result = data.length;

  expect(result).toBe(0);
});
