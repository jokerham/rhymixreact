import { where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { queryListWhere } from '../../../lib/firestore/executor'
import { getDomainsQuery } from '../queries/get-domains'
import type { DomainDocument } from '../schema/domains'

export function useDomain() {
  const [domain, setDomain] = useState<DomainDocument | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    queryListWhere<DomainDocument>(getDomainsQuery, [where('isDefaultDomain', '==', 'Y')])
      .then((docs) => {
        setDomain(docs[0] ?? null)
        setIsLoaded(true)
      })
      .catch((err) => {
        console.error('[useDomain] failed to load default domain', err)
        setIsLoaded(true)
      })
  }, [])

  return { domain, isLoaded }
}
