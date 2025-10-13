"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FolderKanban, Wrench, Mail, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    title: "ダッシュボード",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "制作実績",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    title: "スキル",
    href: "/admin/skills",
    icon: Wrench,
  },
  {
    title: "お問い合わせ",
    href: "/admin/messages",
    icon: Mail,
  },
  {
    title: "プロフィール",
    href: "/admin/profile",
    icon: User,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/login")
      router.refresh()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <aside className="w-64 border-r border-border bg-card">
      <div className="flex h-full flex-col">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold">管理画面</h2>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", isActive && "bg-secondary")}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            ログアウト
          </Button>
        </div>
      </div>
    </aside>
  )
}
