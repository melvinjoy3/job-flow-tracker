import Link from "next/link";

export default function NewJobPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-sky-300">Applications</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Add a new job</h1>
          </div>

          <Link href="/dashboard" className="text-sm text-slate-300 underline decoration-slate-500 underline-offset-4">
            Back to dashboard
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm text-slate-300 md:col-span-1">
                <span className="mb-2 block">Company</span>
                <input
                  defaultValue="OpenAI"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="text-sm text-slate-300 md:col-span-1">
                <span className="mb-2 block">Role</span>
                <input
                  defaultValue="Product Engineer"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="text-sm text-slate-300 md:col-span-1">
                <span className="mb-2 block">Location</span>
                <input
                  defaultValue="Remote"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="text-sm text-slate-300 md:col-span-1">
                <span className="mb-2 block">Salary</span>
                <input
                  defaultValue="$180k"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="text-sm text-slate-300 md:col-span-1">
                <span className="mb-2 block">Status</span>
                <select
                  defaultValue="Applied"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>
              </label>

              <label className="text-sm text-slate-300 md:col-span-1">
                <span className="mb-2 block">Date applied</span>
                <input
                  type="date"
                  defaultValue="2026-11-17"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="text-sm text-slate-300 md:col-span-2">
                <span className="mb-2 block">Job link</span>
                <input
                  defaultValue="https://openai.com/careers/..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
                />
              </label>

              <label className="text-sm text-slate-300 md:col-span-2">
                <span className="mb-2 block">Notes</span>
                <textarea
                  rows={6}
                  defaultValue="Excited about the AI platform role. Need to highlight product thinking, collaboration, and large-scale systems experience."
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
                />
              </label>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button type="button" className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-300">
                Save draft
              </button>
              <button type="submit" className="rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-sky-400">
                Save application
              </button>
            </div>
          </form>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">AI notes</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>• Highlight measurable product impact and collaboration.</li>
                <li>• Add one example of shipping an AI or platform feature.</li>
                <li>• Prepare for system design and behavioral questions.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-sky-500/10 to-violet-500/10 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-sky-300">Quick tips</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Keep your notes short, consistent, and action-oriented so your interview prep stays organized.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
