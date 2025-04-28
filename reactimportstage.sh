#!/bin/bash

# Find files with the specific change
echo "Searching for files with the specific change..."
git diff -G'import \* as React from' --name-only -- | while read -r file; do
  echo "Checking file: $file"
  # Ensure the file exists in the working tree
  if [ -f "$file" ]; then
    echo "File exists: $file"
    # Check if the file contains the specific change
    if git diff "$file" | grep -q '^-import \* as React from' && git diff "$file" | grep -q '^\+import type \* as React from'; then
      echo "Staging file: $file"
      # Stage the file
      git add "$file"
    else
      echo "File does not contain the specific change: $file"
      echo "Diff for $file:"
      git diff "$file"
    fi
  else
    echo "File does not exist in the working tree: $file"
  fi
done