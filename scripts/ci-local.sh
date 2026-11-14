#!/usr/bin/env bash
# The merge gate, step for step what Jenkins runs (Jenkinsfile). Run it from
# anywhere: bash scripts/ci-local.sh
# No lint step: `npm run lint` is `next lint`, which Next 16 removed, so it
# fails on main. Add ESLint here once the repo has a config for it.
set -euo pipefail
cd "$(dirname "$0")/.."

npm ci --no-audit --no-fund
npm run build    # next build = typecheck + static export to out/
echo "ci-local: all steps passed"
