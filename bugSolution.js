The solution involves URL encoding the URI before passing it to the `Image` component.  This ensures that special characters are handled correctly.

```javascript
import * as React from 'react';
import { Image } from 'expo-image';

const encodedUri = encodeURI('http://example.com/image with spaces.jpg');

export default function App() {
  return (
    <Image
      source={{ uri: encodedUri }}
      style={{ width: 200, height: 200 }}
    />
  );
}
```
By using `encodeURI`, you properly escape any special characters present in the image URI, preventing the loading failure.