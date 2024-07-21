#!/usr/bin/env node

import { fileURLToPath } from 'node:url'
import { runCitty } from '../dist/index.mjs'

globalThis.__nc__ = {
  startTime: Date.now(),
  entry: fileURLToPath(import.meta.url),
}

runCitty()
