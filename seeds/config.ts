import { config } from 'dotenv'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { existsSync } from 'node:fs'
import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const mode = process.env.NODE_ENV ?? 'development'

// Load env files in Vite's priority order (later files override earlier)
for (const file of ['.env', `.env.${mode}`, '.env.local', `.env.${mode}.local`]) {
  config({ path: resolve(root, file), override: true })
}

// Resolve service account: env var path takes priority, then default file
const serviceAccountPath =
  process.env.FIREBASE_SERVICE_ACCOUNT_PATH ?? resolve(root, 'service-account.json')

if (!existsSync(serviceAccountPath)) {
  throw new Error(
    `Service account not found at: ${serviceAccountPath}\n` +
      `Go to Firebase Console → Project Settings → Service Accounts → Generate new private key\n` +
      `Save the file as service-account.json in the project root, or set FIREBASE_SERVICE_ACCOUNT_PATH.`,
  )
}

if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccountPath) })
}

export const db = getFirestore()
