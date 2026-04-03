/**
 * awesome-opensin — Curated list of OpenSIN resources
 */
import { createLogger } from '@opensin/shared-helpers'
const log = createLogger('awesome-opensin')

class AwesomeOpenSIN {
  constructor() { this.resources = new Map() }

  async addResource(name, url, category) {
    this.resources.set(name, { url, category, addedAt: Date.now() })
    log.info(`Resource added: ${name} (${category})`)
  }

  async listByCategory(category) {
    return Array.from(this.resources.entries()).filter(([_, r]) => r.category === category).map(([name, r]) => ({ name, url: r.url }))
  }

  async getAll() { return Array.from(this.resources.entries()).map(([name, r]) => ({ name, ...r })) }
}

async function main() { const awesome = new AwesomeOpenSIN(); log.info('Awesome OpenSIN initialized') }
main().catch(console.error)
