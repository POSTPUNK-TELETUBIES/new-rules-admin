import { isMSWOn } from './config/worker.ts'

export async function deferRender() {
  if (import.meta.env.DEV && isMSWOn) {
    const { worker } = await import('../mocks/browser.ts')

    await worker.start({
      waitUntilReady: true,
    })
  }
}
