"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { MoreVertical, Check, X, Trash2 } from "lucide-react"

export function MessageActions({ messageId, isRead }: { messageId: string; isRead: boolean }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const toggleReadStatus = async () => {
    setIsLoading(true)

    try {
      const supabase = getSupabaseBrowserClient()
      const { error } = await supabase.from("contact_messages").update({ is_read: !isRead }).eq("id", messageId)

      if (error) throw error

      router.refresh()
    } catch (error) {
      console.error("Error updating message:", error)
      alert("更新に失敗しました")
    } finally {
      setIsLoading(false)
    }
  }

  const deleteMessage = async () => {
    if (!confirm("本当に削除しますか?")) return

    setIsLoading(true)

    try {
      const supabase = getSupabaseBrowserClient()
      const { error } = await supabase.from("contact_messages").delete().eq("id", messageId)

      if (error) throw error

      router.refresh()
    } catch (error) {
      console.error("Error deleting message:", error)
      alert("削除に失敗しました")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" disabled={isLoading}>
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={toggleReadStatus}>
          {isRead ? (
            <>
              <X className="mr-2 h-4 w-4" />
              未読にする
            </>
          ) : (
            <>
              <Check className="mr-2 h-4 w-4" />
              既読にする
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={deleteMessage} className="text-destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          削除
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
