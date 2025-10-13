import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                プロジェクトのご相談やご質問がございましたら、 お気軽にお問い合わせください。
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
