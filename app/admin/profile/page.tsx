import { getSupabaseServerClient } from "@/lib/supabase/server"
import { ProfileForm } from "@/components/profile-form"

export default async function AdminProfilePage() {
  const supabase = await getSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data: profile } = await supabase.from("profiles").select("*").eq("user_id", user.id).single()

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">プロフィール管理</h1>
        <p className="text-muted-foreground">プロフィール情報を編集します</p>
      </div>

      <ProfileForm profile={profile} userId={user.id} />
    </div>
  )
}
