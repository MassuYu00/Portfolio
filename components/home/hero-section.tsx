import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Facebook, Mail, Twitter, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/10%),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-[480px] text-center md:text-left">
              <div className="inline-block mb-4">
                <Badge variant="secondary" className="px-20 py-1.5 text-sm">
                  Biz Dev , AI Dev , web3 Dev
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 text-balance">
                <span className="animate-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] text-transparent bg-clip-text">
                  Yusuke Masuyama
                </span>
                <br />
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                AI駆動開発を武器にアイデアを再現するBizDevエンジニア
                <br />
                平日は新規事業企画をリード/休日は個人開発と研究生
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              </div>
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <Button variant="ghost" size="icon" asChild className="h-12 w-12">
                  <a href="https://www.facebook.com/share/1Gjnt2kPfr/?mibextid=wwX" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-12 w-12">
                  <a href="https://x.com/yusuke_jin?s=21&t=JHEsk-rsGMC-cOdI-Nqcdw" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-12 w-12">
                  <a href="https://note.com/yusuke_wirter" target="_blank" rel="noopener noreferrer" aria-label="Note">
                    <BookOpen className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full border-2 border-primary/20 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="/icon.jpg"
                  alt="Yusuke Masuyama"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
