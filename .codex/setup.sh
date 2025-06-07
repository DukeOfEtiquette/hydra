#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"

# ensure Node version from .nvmrc
source "$HOME/.nvm/nvm.sh"
nvm install

# install backend dependencies and generate Prisma client
pushd backend
npm ci
popd

# install frontend dependencies
pushd frontend
npm ci
popd
