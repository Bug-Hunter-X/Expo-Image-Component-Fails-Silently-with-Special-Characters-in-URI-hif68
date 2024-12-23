# Expo Image Component URI Issue

This repository demonstrates a subtle bug in the Expo `Image` component where images fail to load when their URIs contain certain special characters.  The problem is that no error is thrown, making it hard to track down.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides a workaround.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe that the image with special characters in the URI fails to load.