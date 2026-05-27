import { useParams } from 'react-router-dom'

export default function AdminMemberInfoPage() {
  const { memberSrl } = useParams<{ memberSrl: string }>()
  return (
    <div className="page">
      <h1>Member Info {memberSrl}</h1>
      {/* dispMemberAdminInfo */}
    </div>
  )
}
