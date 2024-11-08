#!/bin/bash

# Array of semantic commit types
commit_types=(
    "feat: New feature"
    "fix: Bug fix"
    "docs: Documentation change"
    "style: Code style update"
    "refactor: Code refactor"
    "test: Test updates"
    "chore: Maintenance tasks"
    "perf: Performance improvement"
    "ci: CI/CD changes"
    "revert: Revert changes"
)

# Display commit types with numbers
echo "Select commit type:"
for i in "${!commit_types[@]}"; do
    echo "$((i+1))) ${commit_types[$i]}"
done

# Get user selection
read -p "Enter number (1-${#commit_types[@]}): " selection

# Validate selection
if ! [[ "$selection" =~ ^[0-9]+$ ]] || [ "$selection" -lt 1 ] || [ "$selection" -gt "${#commit_types[@]}" ]; then
    echo "Invalid selection"
    exit 1
fi

# Extract commit type prefix
commit_type=${commit_types[$((selection-1))]}
prefix=${commit_type%%:*}

# Get commit message
read -p "Enter commit message: " message

# Create the final commit command
git commit -m "$prefix: $message"