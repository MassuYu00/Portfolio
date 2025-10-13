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
import { Switch } from "@/components/ui/switch"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Loader2 } from "lucide-react"
import type { Database } from "@/lib/supabase/types"

type Project = Database["public"]["Tables"]["projects"]["Row"]

const projectSchema = z.object({
  title: z.string().min(1, "タイトルを入力してください").max(200, "タイトルは200文字以内で入力してください"),
  description: z
    .string()
    .min(10, "説明は10文字以上で入力してください")
    .max(2000, "説明は2000文字以内で入力してください"),
  image_url: z.string().url("有効なURLを入力してください").optional().or(z.literal("")),
  demo_url: z.string().url("有効なURLを入力してください").optional().or(z.literal("")),
  github_url: z.string().url("有効なURLを入力してください").optional().or(z.literal("")),
  tags: z.string(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  is_published: z.boolean(),
})

type ProjectFormData = z.infer<typeof projectSchema>

export function ProjectForm({ project }: { project?: Project }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: project
      ? {
          title: project.title,
          description: project.description,
          image_url: project.image_url || "",
          demo_url: project.demo_url || "",
          github_url: project.github_url || "",
          tags: project.tags.join(", "),
          start_date: project.start_date || "",
          end_date: project.end_date || "",
          is_published: project.is_published,
        }
      : {
          is_published: false,
        },
  })

  const isPublished = watch("is_published")

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true)

    try {
      const supabase = getSupabaseBrowserClient()
      const tags = data.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)

      const projectData = {
        title: data.title,
        description: data.description,
        image_url: data.image_url || null,
        demo_url: data.demo_url || null,
        github_url: data.github_url || null,
        tags,
        start_date: data.start_date || null,
        end_date: data.end_date || null,
        is_published: data.is_published,
      }

      if (project) {
        const { error } = await supabase.from("projects").update(projectData).eq("id", project.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from("projects").insert(projectData)
        if (error) throw error
      }

      router.push("/admin/projects")
      router.refresh()
    } catch (error) {
      console.error("Error saving project:", error)
      alert("保存に失敗しました")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">タイトル *</Label>
            <Input id="title" {...register("title")} disabled={isSubmitting} />
            {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">説明 *</Label>
            <Textarea id="description" {...register("description")} rows={6} disabled={isSubmitting} />
            {errors.description && <p className="text-sm text-destructive">{errors.description.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">画像URL</Label>
            <Input
              id="image_url"
              {...register("image_url")}
              placeholder="https://example.com/image.jpg"
              disabled={isSubmitting}
            />
            {errors.image_url && <p className="text-sm text-destructive">{errors.image_url.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="demo_url">デモURL</Label>
              <Input
                id="demo_url"
                {...register("demo_url")}
                placeholder="https://demo.example.com"
                disabled={isSubmitting}
              />
              {errors.demo_url && <p className="text-sm text-destructive">{errors.demo_url.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="github_url">GitHub URL</Label>
              <Input
                id="github_url"
                {...register("github_url")}
                placeholder="https://github.com/user/repo"
                disabled={isSubmitting}
              />
              {errors.github_url && <p className="text-sm text-destructive">{errors.github_url.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">タグ (カンマ区切り)</Label>
            <Input id="tags" {...register("tags")} placeholder="React, Next.js, TypeScript" disabled={isSubmitting} />
            {errors.tags && <p className="text-sm text-destructive">{errors.tags.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start_date">開始日</Label>
              <Input id="start_date" type="date" {...register("start_date")} disabled={isSubmitting} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="end_date">終了日</Label>
              <Input id="end_date" type="date" {...register("end_date")} disabled={isSubmitting} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="is_published"
              checked={isPublished}
              onCheckedChange={(checked) => setValue("is_published", checked)}
              disabled={isSubmitting}
            />
            <Label htmlFor="is_published">公開する</Label>
          </div>

          <div className="flex gap-4">
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
            <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>
              キャンセル
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
