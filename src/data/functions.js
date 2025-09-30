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
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
  );
};

export const cleanModelNames = (model) => {
  return model.split(/[\(\[\{_\/]/)[0].trim();
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
  if (brand == null) return "";
  const str = String(brand).trim();
  if (!str) return "";

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
    "Iveco",
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
    "Saab",
    "SAIC",
    "Seat",
    "SGMW",
    "Skoda",
    "SSANGYONG",
    "TAGAZ",
    "Tata",
    "UAZ",
    "Vauxhall",
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

  const isRoman = (s) => {
    const t = s.toUpperCase();
    return (
      /^[IVXLCDM]+$/.test(t) &&
      /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(t)
    );
  };

  const shouldKeepToken = (token) => {
    // keep if roman numeral or 1–3 alpha chars
    if (isRoman(token) || /^[A-Za-z]{1,3}$/.test(token)) return true;
    // keep whole hyphenated if every part is roman or ≤3 alpha
    const parts = token.split("-");
    if (
      parts.length > 1 &&
      parts.every((p) => isRoman(p) || /^[A-Za-z]{1,3}$/.test(p))
    ) {
      return true;
    }
    return false;
  };

  const capPart = (w) =>
    w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : "";

  const formatWord = (w) => {
    if (w.toLowerCase() === "e") return "E"; // <-- NEW rule
    if (exceptions.includes(w.toUpperCase())) return w.toUpperCase();
    if (shouldKeepToken(w)) return w;

    if (w.includes("-")) {
      return w
        .split("-")
        .map((sub) =>
          sub.toLowerCase() === "e"
            ? "E"
            : shouldKeepToken(sub)
            ? sub
            : capPart(sub)
        )
        .join("-");
    }

    return capPart(w);
  };

  return str
    .split(/(\(.*?\))/g)
    .map((chunk) => {
      if (chunk.startsWith("(") && chunk.endsWith(")")) {
        const inside = chunk.slice(1, -1).trim();
        return `(${inside.split(/\s+/).map(formatWord).join(" ")})`;
      }
      return chunk.split(/\s+/).map(formatWord).join(" ");
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

export const prettifyEntry = (s) => {
  // replace delimiter with space
  let out = s.replace("###", " ");
  // remove any (...) that does NOT start with a 4-digit year (e.g., (K0), (T5), etc.)
  out = out.replace(/\s*\((?!\d{4})[^()]*\)/g, "");
  // tidy spaces
  return out.replace(/\s{2,}/g, " ").trim();
};

export const toBrandModelSlug = (s) => {
  const [brandRaw, modelRaw = ""] = s.split("###");
  const brand = (brandRaw || "").trim();
  // remove ALL (...) parts (code + years) from model
  const model = modelRaw.replace(/\s*\([^()]*\)/g, "").trim();

  const slugify = (t) =>
    t
      .normalize("NFKD") // handle accents
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "");

  return `/${slugify(brand)}/${slugify(model)}/`;
};
