import { useParams } from 'react-router-dom'

export default function MemberProfilePage() {
  const { memberSrl } = useParams<{ memberSrl: string }>()
  return (
    <div className="page">
      <h1>Member Profile {memberSrl}</h1>
      {/* dispMemberInfo */}
    </div>
  )
}
