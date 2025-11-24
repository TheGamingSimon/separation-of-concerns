import { expect } from "@std/expect";
import { buildMatrix, formatMatrix } from "./multiplication_table.ts";

Deno.test("buildMatrix berechnet korrekte Produkte", () => {
  const result = buildMatrix([2, 3]);
  expect(result).toEqual([
    [4, 6],
    [6, 9],
  ]);
});

Deno.test("formatMatrix formatiert korrekt", () => {
  const numbers = [2, 3];
  const matrix = buildMatrix(numbers);

  const formatted = formatMatrix(numbers, matrix);

  const expected = [
    " * || 2 | 3 |",
    "=============",
    " 2 || 4 | 6 |",
    " 3 || 6 | 9 |"
  ].join("\n");

  expect(formatted).toBe(expected);
});
