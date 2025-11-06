#!/bin/bash

# Test script with emojis - run this with: bash test-api.sh
# Uses URL-encoded emojis to work in Git Bash on Windows

echo "Testing API with emojis..."

# Test 1: Search by tomato (🍅)
echo -e "\n1. Search pizzas with 🍅 (tomato):"
curl -X GET -H "Content-Type: application/json" "https://mypizzasapi.onrender.com/API/pizzas/search?ingredient=%F0%9F%8D%85"

# Test 2: Search by tomato and mushroom (🍅 + 🍄)
echo -e "\n\n2. Search pizzas with 🍅 (tomato) and 🍄 (mushroom):"
curl -X GET -H "Content-Type: application/json" "https://mypizzasapi.onrender.com/API/pizzas/search?ingredient=%F0%9F%8D%85&ingredient=%F0%9F%8D%84"

# Test 3: Compute custom price (🍅 + 🧀 + 🍄)
echo -e "\n\n3. Compute price for 🍅 (tomato), 🧀 (cheese), 🍄 (mushroom):"
curl -X POST -H "Content-Type: application/json" \
  -d '{"ingredients": ["\uD83C\uDF45", "\uD83E\uDDC0", "\uD83C\uDF44"]}' \
  https://mypizzasapi.onrender.com/API/pizzasWithPrices/compute

echo -e "\n\n✅ Done!"
