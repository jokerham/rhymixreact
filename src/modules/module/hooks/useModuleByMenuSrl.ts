import { where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { queryListWhere } from '../../../lib/firestore/executor'
import { getModulesByMenuSrlQuery } from '../queries/get-modules-by-menu-srl'
import type { ModuleDocument } from '../schema/module'

export function useModuleByMenuSrl(menuSrl: number | undefined) {
  const [modules, setModules] = useState<ModuleDocument[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (menuSrl === undefined) {
      setModules([])
      setIsLoaded(true)
      return
    }

    setIsLoaded(false)
    queryListWhere<ModuleDocument>(getModulesByMenuSrlQuery, [
      where('menuSrl', '==', menuSrl),
    ])
      .then((docs) => {
        setModules(docs)
        setIsLoaded(true)
      })
      .catch((err) => {
        console.error('[useModuleByMenuSrl] failed to load modules', err)
        setIsLoaded(true)
      })
  }, [menuSrl])

  return { modules, isLoaded }
}
