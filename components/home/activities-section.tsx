import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ActivitiesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">個人の活動と作品</h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
            様々な領域でのアウトプット・活動記録
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/activities/development" className="group h-full block">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <span className="text-3xl">💻</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">個人開発</CardTitle>
                  <CardDescription className="text-base mt-2">
                    AI駆動開発による
                    <br />
                    スピーディーな開発
                  </CardDescription>
                </CardHeader>
                <div className="p-6 pt-0 mt-auto">
                  <span className="text-sm font-medium text-primary flex items-center justify-center gap-1 group-hover:translate-x-1 transition-transform">
                    詳細を見る <span className="text-lg">→</span>
                  </span>
                </div>
              </Card>
            </Link>

            <Link href="/activities/books" className="group h-full block">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
                    <span className="text-3xl">📚</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">書籍出版</CardTitle>
                  <CardDescription className="text-base mt-2">
                    定期的に
                    <br />
                    書籍出版を行う
                  </CardDescription>
                </CardHeader>
                <div className="p-6 pt-0 mt-auto">
                  <span className="text-sm font-medium text-primary flex items-center justify-center gap-1 group-hover:translate-x-1 transition-transform">
                    詳細を見る <span className="text-lg">→</span>
                  </span>
                </div>
              </Card>
            </Link>

            <Link href="/activities/web3" className="group h-full block">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">web3研究会</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Founder/Admin
                    <br />
                    勉強会などを企画実施
                  </CardDescription>
                </CardHeader>
                <div className="p-6 pt-0 mt-auto">
                  <span className="text-sm font-medium text-primary flex items-center justify-center gap-1 group-hover:translate-x-1 transition-transform">
                    詳細を見る <span className="text-lg">→</span>
                  </span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
