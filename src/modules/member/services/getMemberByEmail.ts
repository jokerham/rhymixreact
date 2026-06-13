import { doc, getDoc } from 'firebase/firestore'

import { db } from '../../../lib/firebase'
import { queryRead } from '../../../lib/firestore/executor'
import { getMemberInfoByEmailAddressQuery } from '../queries/get-member-info-by-email-address'
import type { MemberDocument } from '../schema/member'

/**
 * Fetches a member document by email address using the query infrastructure.
 * First looks up the memberId from uniqueEmails, then reads the member document.
 */
export async function getMemberByEmail(emailAddress: string): Promise<MemberDocument | null> {
  try {
    const normalizedEmail = emailAddress.toLowerCase()
    
    // Step 1: Look up memberId from uniqueEmails
    const uniqueEmailRef = doc(db, 'uniqueEmails', normalizedEmail)
    const uniqueEmailSnap = await getDoc(uniqueEmailRef)
    
    if (!uniqueEmailSnap.exists()) {
      return null
    }
    
    const memberId = uniqueEmailSnap.data().memberId
    
    // Step 2: Read member document using query infrastructure
    const member = await queryRead<MemberDocument>(
      getMemberInfoByEmailAddressQuery,
      { memberId },
    )
    
    return member ?? null
  } catch (error) {
    console.error('[getMemberByEmail] Error:', error)
    return null
  }
}
