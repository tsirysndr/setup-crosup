# setup-crosup

Download, install, and setup [Crosup](https://github.com/tsirysndr/crosup) in GitHub Actions.

## 🚀 Usage

```yaml
name: Setup Crosup
on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master
  workflow_dispatch:

jobs:
  setup-superviseur:
    runs-on: ubuntu-latest
    continue-on-error: true
    steps:
      - name: Setup Crosup
        uses: tsirysndr/setup-crosup@v1
        with:
          version: 'v0.4.1'
          packages: |
            deno
            zig
      - name: Verify Crosup
        run: crosup --version
```

See [action.yml](action.yml) for the full documentation for this action's inputs and outputs.

## 📝 License
[MIT](LICENSE)