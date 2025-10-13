"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Loader2 } from "lucide-react"
import type { Database } from "@/lib/supabase/types"

type Skill = Database["public"]["Tables"]["skills"]["Row"]

const skillSchema = z.object({
  name: z.string().min(1, "スキル名を入力してください").max(100, "スキル名は100文字以内で入力してください"),
  category: z.string().min(1, "カテゴリを選択してください"),
  proficiency: z.number().min(1).max(5),
  icon_url: z.string().url("有効なURLを入力してください").optional().or(z.literal("")),
})

type SkillFormData = z.infer<typeof skillSchema>

export function SkillDialog({ skill, children }: { skill?: Skill; children: React.ReactNode }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SkillFormData>({
    resolver: zodResolver(skillSchema),
    defaultValues: skill
      ? {
          name: skill.name,
          category: skill.category,
          proficiency: skill.proficiency,
          icon_url: skill.icon_url || "",
        }
      : {
          proficiency: 3,
        },
  })

  const proficiency = watch("proficiency")

  const onSubmit = async (data: SkillFormData) => {
    setIsSubmitting(true)

    try {
      const supabase = getSupabaseBrowserClient()

      const skillData = {
        name: data.name,
        category: data.category,
        proficiency: data.proficiency,
        icon_url: data.icon_url || null,
      }

      if (skill) {
        const { error } = await supabase.from("skills").update(skillData).eq("id", skill.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from("skills").insert(skillData)
        if (error) throw error
      }

      setOpen(false)
      router.refresh()
    } catch (error) {
      console.error("Error saving skill:", error)
      alert("保存に失敗しました")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{skill ? "スキルの編集" : "新規スキル"}</DialogTitle>
          <DialogDescription>{skill ? "スキル情報を更新します" : "新しいスキルを追加します"}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">スキル名 *</Label>
            <Input id="name" {...register("name")} disabled={isSubmitting} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">カテゴリ *</Label>
            <Select
              defaultValue={skill?.category}
              onValueChange={(value) => setValue("category", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger>
                <SelectValue placeholder="カテゴリを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="フロントエンド">フロントエンド</SelectItem>
                <SelectItem value="バックエンド">バックエンド</SelectItem>
                <SelectItem value="デザイン">デザイン</SelectItem>
                <SelectItem value="ツール">ツール</SelectItem>
                <SelectItem value="インフラ">インフラ</SelectItem>
                <SelectItem value="その他">その他</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && <p className="text-sm text-destructive">{errors.category.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="proficiency">習熟度 *</Label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                {...register("proficiency", { valueAsNumber: true })}
                className="flex-1"
                disabled={isSubmitting}
              />
              <span className="text-sm font-medium w-8">{proficiency}/5</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="icon_url">アイコンURL</Label>
            <Input
              id="icon_url"
              {...register("icon_url")}
              placeholder="https://example.com/icon.svg"
              disabled={isSubmitting}
            />
            {errors.icon_url && <p className="text-sm text-destructive">{errors.icon_url.message}</p>}
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
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isSubmitting}>
              キャンセル
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
