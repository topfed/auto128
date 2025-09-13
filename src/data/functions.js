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

export const groupBrandsAlphabetically = (brands) => {
  if (!Array.isArray(brands)) return [];

  // Normalize: lowercase + trim, sort alphabetically
  const sorted = [...brands]
    .map((b) => b.trim())
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

  const total = sorted.length;
  const groupCount = 10;
  const groupSize = Math.ceil(total / groupCount);

  const groups = [];

  for (let i = 0; i < groupCount; i++) {
    const start = i * groupSize;
    const end = start + groupSize;
    const chunk = sorted.slice(start, end);

    if (chunk.length) {
      // Determine group label from first+last brand's first letter
      const firstLetter = chunk[0][0].toLowerCase();
      const lastLetter = chunk[chunk.length - 1][0].toLowerCase();
      const label =
        firstLetter === lastLetter
          ? `${firstLetter}`
          : `${firstLetter}-${lastLetter}`;

      groups.push({ label, items: chunk });
    }
  }

  return groups;
};

export const slugify = (segment) => {
  return encodeURI(
    String(segment)
      .toLowerCase()
      .replace(/[()]/g, "") // drop parentheses
      .replace(/[^\w\- ]+/g, "") // keep word chars, dash, space
      .replace(/\s+/g, "-") // spaces -> dashes
      .replace(/-+/g, "-") // collapse dashes
      .replace(/^-|-$/g, "") // trim ends
  );
};
