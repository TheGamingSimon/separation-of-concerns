export function buildMatrix(numbers: number[]): number[][] {
  return numbers.map(row =>
    numbers.map(col => row * col)
  );
}

export function formatMatrix(numbers: number[], matrix: number[][]): string {
  const maxNumber = Math.max(...numbers);
  const maxProduct = maxNumber * maxNumber;

  const width = String(maxProduct).length + 1;

  const header =
    "*".padStart(width) +
    " ||" +
    numbers.map(n => String(n).padStart(width)).join(" |") +
    " |";

  const separator = "=".repeat(header.length);

  const rows = numbers.map((rowValue, rowIndex) => {
    const rowHeader = String(rowValue).padStart(width) + " ||";
    const cols = matrix[rowIndex]
      .map(v => String(v).padStart(width))
      .join(" |");
    return `${rowHeader}${cols} |`;
  });

  return [header, separator, ...rows].join("\n");
}

export function printMultiplicationTable(numbers: number[]): void {
  const matrix = buildMatrix(numbers);
  const formatted = formatMatrix(numbers, matrix);
  console.log(formatted);
}
