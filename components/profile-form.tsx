"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Loader2 } from "lucide-react"
import type { Database } from "@/lib/supabase/types"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]

const profileSchema = z.object({
  name: z.string().min(1, "名前を入力してください").max(100, "名前は100文字以内で入力してください"),
  bio: z.string().max(500, "自己紹介は500文字以内で入力してください").optional(),
  avatar_url: z.string().url("有効なURLを入力してください").optional().or(z.literal("")),
  github_url: z.string().url("有効なURLを入力してください").optional().or(z.literal("")),
  twitter_url: z.string().url("有効なURLを入力してください").optional().or(z.literal("")),
  linkedin_url: z.string().url("有効なURLを入力してください").optional().or(z.literal("")),
})

type ProfileFormData = z.infer<typeof profileSchema>

export function ProfileForm({ profile, userId }: { profile: Profile | null; userId: string }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: profile
      ? {
          name: profile.name,
          bio: profile.bio || "",
          avatar_url: profile.avatar_url || "",
          github_url: profile.github_url || "",
          twitter_url: profile.twitter_url || "",
          linkedin_url: profile.linkedin_url || "",
        }
      : undefined,
  })

  const onSubmit = async (data: ProfileFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const supabase = getSupabaseBrowserClient()

      const profileData = {
        user_id: userId,
        name: data.name,
        bio: data.bio || null,
        avatar_url: data.avatar_url || null,
        github_url: data.github_url || null,
        twitter_url: data.twitter_url || null,
        linkedin_url: data.linkedin_url || null,
      }

      if (profile) {
        const { error } = await supabase.from("profiles").update(profileData).eq("id", profile.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from("profiles").insert(profileData)
        if (error) throw error
      }

      setSubmitStatus("success")
      router.refresh()
    } catch (error) {
      console.error("Error saving profile:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">名前 *</Label>
            <Input id="name" {...register("name")} disabled={isSubmitting} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">自己紹介</Label>
            <Textarea id="bio" {...register("bio")} rows={4} disabled={isSubmitting} />
            {errors.bio && <p className="text-sm text-destructive">{errors.bio.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="avatar_url">アバターURL</Label>
            <Input
              id="avatar_url"
              {...register("avatar_url")}
              placeholder="https://example.com/avatar.jpg"
              disabled={isSubmitting}
            />
            {errors.avatar_url && <p className="text-sm text-destructive">{errors.avatar_url.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="github_url">GitHub URL</Label>
            <Input
              id="github_url"
              {...register("github_url")}
              placeholder="https://github.com/username"
              disabled={isSubmitting}
            />
            {errors.github_url && <p className="text-sm text-destructive">{errors.github_url.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitter_url">Twitter URL</Label>
            <Input
              id="twitter_url"
              {...register("twitter_url")}
              placeholder="https://twitter.com/username"
              disabled={isSubmitting}
            />
            {errors.twitter_url && <p className="text-sm text-destructive">{errors.twitter_url.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedin_url">LinkedIn URL</Label>
            <Input
              id="linkedin_url"
              {...register("linkedin_url")}
              placeholder="https://linkedin.com/in/username"
              disabled={isSubmitting}
            />
            {errors.linkedin_url && <p className="text-sm text-destructive">{errors.linkedin_url.message}</p>}
          </div>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-sm text-green-600 dark:text-green-400">プロフィールを保存しました</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm text-destructive">保存に失敗しました。もう一度お試しください。</p>
            </div>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                保存中...
              </>
            ) : (
              "保存"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
