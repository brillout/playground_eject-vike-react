export { config as default }

import type { Config } from 'vike/types'
import { ssrEffect } from './integration/ssrEffect.js'
import { isNotFalse } from './utils/isNotFalse.js'

const config = {
  passToClient: [
    '_configFromHook',
    // https://github.com/vikejs/vike-react/issues/25
    process.env.NODE_ENV !== 'production' && '$$typeof',
  ].filter(isNotFalse),

  // https://vike.dev/clientRouting
  clientRouting: true,
  hydrationCanBeAborted: true,

  // https://vike.dev/meta
  meta: {
    Head: {
      env: { server: true },
      cumulative: true,
    },
    Layout: {
      env: { server: true, client: true },
      cumulative: true,
    },
    title: {
      env: { server: true, client: true },
    },
    description: {
      env: { server: true },
    },
    image: {
      env: { server: true },
    },
    viewport: {
      env: { server: true },
    },
    favicon: {
      env: { server: true },
      global: true,
    },
    lang: {
      env: { server: true, client: true },
    },
    bodyHtmlBegin: {
      env: { server: true },
      cumulative: true,
      global: true,
    },
    bodyHtmlEnd: {
      env: { server: true },
      cumulative: true,
      global: true,
    },
    htmlAttributes: {
      env: { server: true },
      global: true,
      cumulative: true, // for Vike extensions
    },
    bodyAttributes: {
      env: { server: true },
      global: true,
      cumulative: true, // for Vike extensions
    },
    ssr: {
      env: { config: true },
      effect: ssrEffect,
    },
    stream: {
      env: { server: true },
    },
    streamIsRequired: {
      env: { server: true },
    },
    onBeforeRenderHtml: {
      env: { server: true },
      cumulative: true,
    },
    onAfterRenderHtml: {
      env: { server: true },
      cumulative: true,
    },
    onBeforeRenderClient: {
      env: { client: true },
      cumulative: true,
    },
    onAfterRenderClient: {
      env: { client: true },
      cumulative: true,
    },
    Wrapper: {
      cumulative: true,
      env: { client: true, server: true },
    },
    reactStrictMode: {
      env: { client: true, server: true },
    },
    Loading: {
      env: { server: true, client: true },
    },
  },
} satisfies Config
