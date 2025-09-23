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
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
  );
};

export const shuffleArray = (arr) => {
  const copy = [...arr]; // avoid mutating the original
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]; // swap
  }
  return copy;
};

export const formatBrandName = (brand) => {
  // exceptions to keep uppercase
  if (!brand) return "";
  const exceptions = [
    "AC",
    "ARO",
    "BAIC",
    "BAW",
    "BMW",
    "BYD",
    "CHANA",
    "DFSK",
    "FAW",
    "FSO",
    "GAZ",
    "GMC",
    "GME",
    "GAC",
    "HAVAL",
    "IVECO",
    "IZH",
    "JAC",
    "KTM",
    "LDV",
    "MAN",
    "MG",
    "MPM MOTORS",
    "NAC IVECO (NAVECO)",
    "NSU",
    "ORA",
    "QOROS",
    "RAM",
    "SAAB",
    "SAIC",
    "SEAT",
    "SGMW",
    "SKODA",
    "SSANGYONG",
    "TAGAZ",
    "TATA",
    "UAZ",
    "VAUXHALL",
    "VW",
    "WEY",
    "XPENG",
    "ZAZ",
    "ZX AUTO",
    "SVW",
    "BBDC",
    "FJDA",
    "DFAC",
  ];

  const capitalizeWord = (word) =>
    word
      .split("-")
      .map((w) =>
        w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : ""
      )
      .join("-");

  return brand
    .split(/(\(.*?\))/g) // keep parentheses groups
    .map((part) => {
      if (part.startsWith("(") && part.endsWith(")")) {
        // inside parentheses
        const inside = part.slice(1, -1).trim();
        const words = inside.split(" ").map((w) => {
          if (exceptions.includes(w.toUpperCase())) {
            return w.toUpperCase();
          }
          return capitalizeWord(w);
        });
        return `(${words.join(" ")})`;
      } else {
        // outside parentheses
        const words = part.split(" ").map((w) => {
          if (exceptions.includes(w.toUpperCase())) {
            return w.toUpperCase();
          }
          return capitalizeWord(w);
        });
        return words.join(" ");
      }
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
};

export const formatManufacturersList = (manufacturers = []) => {
  if (!Array.isArray(manufacturers) || manufacturers.length === 0) {
    return "";
  }

  // apply brand formatting rules
  const formatted = manufacturers.map(formatBrandName);

  // slice based on length
  if (formatted.length === 1) {
    return formatted[0];
  }
  if (formatted.length === 2) {
    return `${formatted[0]}, ${formatted[1]}`;
  }
  return formatted.slice(0, 4).join(", ");
};
