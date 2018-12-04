# @vgm/nodeasync


Node promisified functions

## How to install:

```
yarn add @vgm/nodeasync
```

## How to use:

Walk through directory:

```typescript
import {walk} from '@vgm/nodeasync';

const main = async () => {
  const files = await walk('/root');
  console.log(files); // List of files path

  const dir = join(tmpdir(), '/one/two/three')
  await mkdirpAsync(dir)
}
```
