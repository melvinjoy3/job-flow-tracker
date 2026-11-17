import Link from "next/link";
import mockJobs from "@/data/mockJobs";

const statuses = ["Applied", "Interview", "Offer", "Rejected"] as const;

const statusColors: Record<(typeof statuses)[number], string> = {
  Applied: "bg-sky-500/15 text-sky-300 ring-sky-400/40",
  Interview: "bg-amber-500/15 text-amber-300 ring-amber-400/40",
  Offer: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/40",
  Rejected: "bg-rose-500/15 text-rose-300 ring-rose-400/40",
};

export default function DashboardPage() {
  const stats = [
    { label: "Total applications", value: "42", accent: "text-sky-300" },
    { label: "Interviews", value: "6", accent: "text-amber-300" },
    { label: "Offers", value: "1", accent: "text-emerald-300" },
    { label: "Response rate", value: "31%", accent: "text-violet-300" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-[1600px]">
        <aside className="hidden min-h-screen w-72 border-r border-slate-800 bg-slate-950/80 p-6 lg:block">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 font-bold text-slate-950">
              J
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Tracker</p>
              <h1 className="text-lg font-semibold">JobFlow</h1>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              "Overview",
              "Applications",
              "Pipeline",
              "Interview Prep",
              "Resume AI",
              "Settings",
            ].map((item, index) => (
              <button
                key={item}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                  index === 1
                    ? "bg-slate-800 text-white ring-1 ring-slate-700"
                    : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                <span>{item}</span>
                <span className="text-xs text-slate-500">{index + 1}</span>
              </button>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">AI summary</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Your resume matches most strongly with product and frontend roles. Consider tailoring the top 3 applications this week.
            </p>
          </div>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <header className="mb-8 flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-sky-300">Dashboard</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Application pipeline</h2>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/jobs/new"
                className="rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
              >
                + Add application
              </Link>
              <button className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-200 transition hover:border-slate-500">
                Export
              </button>
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/20">
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className={`mt-4 text-3xl font-semibold ${stat.accent}`}>{stat.value}</p>
              </div>
            ))}
          </section>

          <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/10">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Pipeline view</p>
                <h3 className="mt-1 text-xl font-semibold text-white">Recent applications</h3>
              </div>
              <div className="flex gap-2 text-xs text-slate-400">
                <button className="rounded-full border border-slate-700 px-3 py-1.5">This month</button>
                <button className="rounded-full bg-slate-800 px-3 py-1.5 text-slate-200">All roles</button>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-4">
              {statuses.map((status) => {
                const filteredJobs = mockJobs.filter((job) => job.status === status);

                return (
                  <div key={status} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                    <div className="mb-3 flex items-center justify-between">
                      <div className={`rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${statusColors[status]}`}>
                        {status}
                      </div>
                      <span className="text-xs text-slate-500">{filteredJobs.length}</span>
                    </div>

                    <div className="space-y-3">
                      {filteredJobs.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-slate-700 p-4 text-sm text-slate-500">
                          No applications yet
                        </div>
                      ) : (
                        filteredJobs.map((job) => (
                          <div key={job.id} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-medium text-white">{job.company}</p>
                                <p className="text-sm text-slate-300">{job.role}</p>
                              </div>
                              <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300">
                                {job.priority}
                              </span>
                            </div>

                            <div className="mt-3 space-y-1 text-xs text-slate-400">
                              <p>{job.location}</p>
                              <p>{job.date}</p>
                              <p>{job.salary}</p>
                            </div>

                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{job.notes}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
