import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  ExternalLink,
  Lock,
  Terminal,
  Layers,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { PROFILE, PROJECTS, SKILL_GROUPS } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Barra superior minimalista */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-mono text-sm font-bold tracking-wider text-indigo-400">
            &lt;BoroJin /&gt;
          </span>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#proyectos" className="transition hover:text-white">
              Casos de Estudio
            </a>
            <a href="#stack" className="transition hover:text-white">
              Stack
            </a>
            <a
              href={PROFILE.cvPath}
              download
              className="inline-flex items-center gap-1.5 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-500"
            >
              <FileDown className="h-3.5 w-3.5" />
              CV PDF
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="mx-auto max-w-5xl px-6 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300 mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          {PROFILE.availability}
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          {PROFILE.name}
        </h1>
        <h2 className="mt-3 text-xl font-medium text-indigo-400 sm:text-2xl">
          {PROFILE.headline}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
          {PROFILE.bio}
        </p>

        {/* Botones de acción rápida */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={PROFILE.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
          >
            <FileDown className="h-4 w-4" />
            Descargar CV
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Contactar
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 space-y-24">
        {/* Sección Proyectos / Casos de Estudio */}
        <section id="proyectos">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Experiencia y Casos de Estudio
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Arquitecturas desarrolladas en entornos productivos, consultoría universitaria y proyectos con IA.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className={`flex flex-col justify-between rounded-xl border p-6 transition ${
                  project.featured
                    ? "border-indigo-500/30 bg-slate-900/90 shadow-lg shadow-indigo-950/20"
                    : "border-slate-800 bg-slate-900/50"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono text-indigo-400">
                        {project.role} • {project.period}
                      </span>
                      <h4 className="mt-1 text-lg font-bold text-white">
                        {project.title}
                      </h4>
                    </div>
                  </div>

                  {/* Estructura Caso de Estudio */}
                  <div className="mt-5 space-y-3 text-sm">
                    <div className="rounded-lg bg-slate-950/60 p-3 border border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        <Terminal className="h-3.5 w-3.5 text-rose-400" />
                        Problema
                      </span>
                      <p className="mt-1 text-slate-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-950/60 p-3 border border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        <Layers className="h-3.5 w-3.5 text-indigo-400" />
                        Arquitectura
                      </span>
                      <p className="mt-1 text-slate-300 leading-relaxed">
                        {project.architecture}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-950/60 p-3 border border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        Impacto / Resultado
                      </span>
                      <p className="mt-1 text-slate-300 leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer de tarjeta: Stack + Botones */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 text-xs font-medium text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Código Fuente
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo en Vivo
                      </a>
                    )}
                    {project.isPrivateEnterprise && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                        <Lock className="h-3 w-3" />
                        Código privado (Entorno corporativo)
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sección Stack Técnico */}
        <section id="stack">
          <div className="mb-8 flex items-center gap-2">
            <Cpu className="h-6 w-6 text-indigo-400" />
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Stack Tecnológico
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400">
                  {group.category}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-700/80 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>
          Construido con Next.js, TypeScript y Tailwind CSS • © 2026 {PROFILE.name}
        </p>
      </footer>
    </div>
  );
}