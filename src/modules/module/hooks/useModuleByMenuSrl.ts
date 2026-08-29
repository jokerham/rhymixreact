import { where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { queryListWhere } from '../../../lib/firestore/executor'
import { getModulesByMenuSrlQuery } from '../queries/get-modules-by-menu-srl'
import type { ModuleDocument } from '../schema/module'

export function useModuleByMenuSrl(menuSrl: number | undefined) {
  // `key` records which menuSrl the stored modules belong to, so the loading
  // and result values below can be derived without a synchronous setState.
  const [result, setResult] = useState<{ key: number | undefined; modules: ModuleDocument[] }>({
    key: undefined,
    modules: [],
  })

  useEffect(() => {
    if (menuSrl === undefined) return
    let active = true

    queryListWhere<ModuleDocument>(getModulesByMenuSrlQuery, [
      where('menuSrl', '==', menuSrl),
    ])
      .then((docs) => {
        if (active) setResult({ key: menuSrl, modules: docs })
      })
      .catch((err) => {
        console.error('[useModuleByMenuSrl] failed to load modules', err)
        if (active) setResult({ key: menuSrl, modules: [] })
      })

    return () => {
      active = false
    }
  }, [menuSrl])

  const isLoaded = menuSrl === undefined || result.key === menuSrl
  const modules = result.key === menuSrl ? result.modules : []

  return { modules, isLoaded }
}
