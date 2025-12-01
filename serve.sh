#!/bin/bash
# Simple local development server for the portfolio
# This allows absolute paths to work locally

PORT=${1:-8000}

echo "🚀 Starting local development server..."
echo "📍 Server running at: http://localhost:$PORT"
echo "📂 Serving from: $(pwd)"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Try Python 3 first, then Python 2, then fall back to other options
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
elif command -v php &> /dev/null; then
    php -S localhost:$PORT
else
    echo "❌ Error: No suitable server found."
    echo "Please install Python 3, Python 2, or PHP to run a local server."
    echo ""
    echo "Or use one of these alternatives:"
    echo "  - npx serve (Node.js)"
    echo "  - npx http-server (Node.js)"
    exit 1
fi

