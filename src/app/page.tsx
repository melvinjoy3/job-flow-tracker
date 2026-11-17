import Link from "next/link";

const steps = [
	{
		title: "Track every application",
		text: "Save roles, companies, notes, deadlines, and follow-up reminders in one clean place.",
	},
	{
		title: "See your pipeline",
		text: "Move candidates across Applied, Interview, Offer, and Rejected without losing momentum.",
	},
	{
		title: "Prepare smarter",
		text: "Use your notes and AI-ready summaries to stay focused on the roles that matter.",
	},
];

const metrics = [
	{ label: "Applications", value: "42" },
	{ label: "Interviews", value: "6" },
	{ label: "Offers", value: "1" },
	{ label: "Response rate", value: "31%" },
];

export default function Home() {
	return (
		<main className="min-h-screen bg-slate-950 text-slate-100">
			<div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
				<header className="flex items-center justify-between rounded-full border border-slate-800 bg-slate-900/70 px-4 py-3 backdrop-blur">
					<div className="flex items-center gap-3">
						<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 font-bold text-slate-950">
							J
						</div>
						<div>
							<p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">
								Tracker
							</p>
							<p className="text-sm font-semibold text-white">JobFlow</p>
						</div>
					</div>

					<nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
						<a href="#features" className="hover:text-white">
							Features
						</a>
						<a href="#dashboard" className="hover:text-white">
							Dashboard
						</a>
						<a href="#pricing" className="hover:text-white">
							AI
						</a>
					</nav>

					<div className="flex items-center gap-3">
						<Link
							href="/login"
							className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500"
						>
							Log in
						</Link>
						<Link
							href="/signup"
							className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
						>
							Get started
						</Link>
					</div>
				</header>

				<section className="grid items-center gap-10 pb-16 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
					<div>
						<span className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
							Job application tracker
						</span>

						<h1 className="mt-6 max-w-xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
							Stay organized when your job search gets serious.
						</h1>

						<p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
							Track every application, keep notes in one place, and move through
							your pipeline without losing momentum.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-4">
							<Link
								href="/dashboard"
								className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
							>
								Open dashboard
							</Link>
							<Link
								href="/jobs/new"
								className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500"
							>
								Add application
							</Link>
						</div>

						<div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
							<span>• 40+ applications organized</span>
							<span>• Resume + interview AI ready</span>
							<span>• Clean Kanban workflow</span>
						</div>
					</div>

					<div
						id="dashboard"
						className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/30"
					>
						<div className="rounded-[22px] border border-slate-800 bg-slate-950/80 p-4">
							<div className="mb-4 flex items-center justify-between">
								<div>
									<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
										Pipeline
									</p>
									<h2 className="mt-2 text-xl font-semibold text-white">
										This week
									</h2>
								</div>
								<div className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30">
									1 offer
								</div>
							</div>

							<div className="grid gap-3 md:grid-cols-2">
								{metrics.map((metric) => (
									<div
										key={metric.label}
										className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
									>
										<p className="text-sm text-slate-400">{metric.label}</p>
										<p className="mt-3 text-2xl font-semibold text-white">
											{metric.value}
										</p>
									</div>
								))}
							</div>

							<div className="mt-5 space-y-3">
								{[
									["Stripe", "Frontend Engineer", "Interview"],
									["Notion", "Product Designer", "Applied"],
									["Linear", "Full Stack Engineer", "Offer"],
								].map(([company, role, status]) => (
									<div
										key={company}
										className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-3"
									>
										<div>
											<p className="font-medium text-white">{company}</p>
											<p className="text-sm text-slate-400">{role}</p>
										</div>
										<span className="rounded-full bg-slate-800 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
											{status}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<section id="features" className="py-14">
					<div className="mb-8 max-w-xl">
						<p className="text-sm uppercase tracking-[0.2em] text-sky-300">
							Why it works
						</p>
						<h2 className="mt-3 text-3xl font-semibold text-white">
							Built for real job-search chaos.
						</h2>
					</div>

					<div className="grid gap-5 md:grid-cols-3">
						{steps.map((step) => (
							<div
								key={step.title}
								className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
							>
								<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-lg text-sky-300">
									✓
								</div>
								<h3 className="text-xl font-semibold text-white">
									{step.title}
								</h3>
								<p className="mt-3 leading-7 text-slate-300">{step.text}</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</main>
	);
}
