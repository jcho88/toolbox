# Compare Files

- [Requirements](#requirements)

- [Getting started](#getting-started)

- [Examples](#examples)

- [Contributing](#contributing)

This utility compares _two_ local files and returns an array of results based on

1. the type of comparison (Optional)

2. a matching string (Optional)

# Requirements

Node v12+

# Getting Started

The fileA and fileB txt files currently contain sample html to compare, feel free to run some example commands on it to see how the script works.

When you're ready to diff your own files, copy and paste the contents you want to compare to fileA.txt and fileB or if you want to use your own files, add them to the compare-files folder directory.

When you have your files, run the compare script with the comparison operators below.

### List of comparison operators

- **diff** _(Default if no operator provided)_

  Displays the elements in File A and not in File B

- **sdiff**

  Displays the elements not intersecting in File A and File B

- **intersect**

  Displays the intersection of elements in File A and File B

- **union**

  Displays the union of elements in File A and File B

# Examples

Display the elements in File A and not in File B

```

node compare.js fileA.txt fileB.txt

```

Display the elements in File B and not in File A

```

node compare.js fileB.txt fileA.txt

```

Display the elements in File A and not in File B that contain string ".css"

```

node compare.js fileA.txt fileB.txt diff .css

```

Display the intersection of elements in File A and File B that contain string "div"

```

node compare.js fileA.txt fileB.txt intersect div

```

Display the union of elements in File A and File B

```

node compare.js fileA.txt fileB.txt union

```

# Contributing

If you'd like to enhance this script or fix an issue, please reach out to Justin Cho (JTNC).
