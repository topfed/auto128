/**
 * List Functions Utils
 */

export const splitParagraph = (text) => {
  const midpoint = Math.floor(text.length / 2);
  const before = text.lastIndexOf(".", midpoint);
  const after = text.indexOf(".", midpoint + 1);
  const splitIndex =
    before === -1
      ? after !== -1
        ? after + 1
        : midpoint
      : after === -1 || midpoint - before <= after - midpoint
      ? before + 1
      : after + 1;

  return [text.slice(0, splitIndex).trim(), text.slice(splitIndex).trim()];
};

export const productDescription = (description) => {
  if (!description) return [""];

  const periods = [...description.matchAll(/\./g)].map((match) => match.index);

  if (periods.length === 0) {
    return [description];
  }
  if (description.length > 850) {
    const firstMiddleIndex = Math.floor(description.length / 3);
    const secondMiddleIndex = Math.floor((2 * description.length) / 3);

    const bestFirstSplitIndex = periods.reduce((prev, curr) =>
      Math.abs(curr - firstMiddleIndex) < Math.abs(prev - firstMiddleIndex)
        ? curr
        : prev
    );

    const bestSecondSplitIndex = periods.reduce((prev, curr) =>
      Math.abs(curr - secondMiddleIndex) < Math.abs(prev - secondMiddleIndex)
        ? curr
        : prev
    );

    return [
      description.substring(0, bestFirstSplitIndex + 1).trim(),
      description
        .substring(bestFirstSplitIndex + 1, bestSecondSplitIndex + 1)
        .trim(),
      description.substring(bestSecondSplitIndex + 1).trim(),
    ];
  }

  const middleIndex = Math.floor(description.length / 2);
  const bestSplitIndex = periods.reduce((prev, curr) =>
    Math.abs(curr - middleIndex) < Math.abs(prev - middleIndex) ? curr : prev
  );

  return [
    description.substring(0, bestSplitIndex + 1).trim(),
    description.substring(bestSplitIndex + 1).trim(),
  ];
};
