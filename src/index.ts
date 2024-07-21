import { defineCommand, runMain } from 'citty'

const main = defineCommand({
  meta: {
    version: '0.0.1',
    description: 'This is a test command',
    name: 'nc',
  },
  args: {
    g: {
      type: 'positional',
      description: 'Name of the person',
      required: true,
    },
  },

  run(context) {
    console.log(`Hello, ${JSON.stringify(context.args)}!`)
  },
})

export const runCitty = () => runMain(main)

globalThis.__nc__ = globalThis.__nc__ || {
  startTime: Date.now(),
  entry: new URL(import.meta.url.endsWith('.ts') ? '../bin/nc.mjs' : '../bin/nc.js', import.meta.url).pathname,
}
