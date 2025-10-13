import { ProjectForm } from "@/components/project-form"

export default function NewProjectPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">新規制作実績</h1>
        <p className="text-muted-foreground">新しい制作実績を追加します</p>
      </div>

      <ProjectForm />
    </div>
  )
}
