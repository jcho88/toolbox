const fs = require("fs");

const args = process.argv;

try {
  const fileA = sanitize(
    fs

      .readFileSync(args[2], "utf8")

      .split(/[\n\r]+/g)

      .filter((row) => row.trim())
  );

  const fileB = sanitize(
    fs

      .readFileSync(args[3], "utf8")

      .split(/[\n\r]+/g)

      .filter((row) => row.trim())
  );

  const operation = args[4];

  const matcher = args[5];

  const matchedFileA = match(fileA, matcher);

  const matchedFileB = match(fileB, matcher);

  switch (operation) {
    case "diff":
      console.dir(diff(matchedFileA, matchedFileB), {
        maxArrayLength: null,
      });

      console.log("\n Elements in File A and not in File B");

      break;

    case "sdiff":
      console.dir(symmetricDiff(matchedFileA, matchedFileB), {
        maxArrayLength: null,
      });

      console.log("\n Elements not intersecting in File A and File B");

      break;

    case "intersect":
      console.dir(intersect(matchedFileB, matchedFileA), {
        maxArrayLength: null,
      });

      console.log("\n Intersection of elements in File A and File B");

      break;

    case "union":
      console.dir(union(matchedFileB, matchedFileA), {
        maxArrayLength: null,
      });

      console.log("\n Union of elements in File A and File B");

      break;

    default:
      console.dir(diff(matchedFileA, matchedFileB), {
        maxArrayLength: null,
      });

      console.log("\n Elements in File A and not in File B");

      break;
  }
} catch (err) {
  console.error(err);
}

function sanitize(file) {
  let sanitizedArr = [];

  file.forEach((line) => {
    line = line.replace(/\t/g, "");

    sanitizedArr.push(line);
  });

  return sanitizedArr;
}

function match(file, match) {
  if (!match) return file;

  matches = [];

  file.forEach((line) => {
    if (line.includes(match)) {
      matches.push(line);
    }
  });

  return matches;
}

function diff(fileA, fileB) {
  return fileA.filter((x) => !fileB.includes(x));
}

function symmetricDiff(fileA, fileB) {
  return fileA

    .filter((x) => !fileB.includes(x))

    .concat(fileB.filter((x) => !fileA.includes(x)));
}

function intersect(fileA, fileB) {
  return fileA.filter((x) => fileB.includes(x));
}

function union(fileA, fileB) {
  return [...new Set([...fileA, ...fileB])];
}
