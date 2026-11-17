import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 font-bold text-slate-950">
            J
          </div>
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Start tracking</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Create account</h1>
        </div>

        <form className="space-y-5">
          <label className="block text-sm text-slate-300">
            <span className="mb-2 block">Full name</span>
            <input
              defaultValue="Ava Thompson"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
            />
          </label>

          <label className="block text-sm text-slate-300">
            <span className="mb-2 block">Email</span>
            <input
              type="email"
              defaultValue="ava@email.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
            />
          </label>

          <label className="block text-sm text-slate-300">
            <span className="mb-2 block">Password</span>
            <input
              type="password"
              defaultValue="password123"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-sky-400"
            />
          </label>

          <Link
            href="/dashboard"
            className="flex w-full items-center justify-center rounded-xl bg-sky-500 px-4 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
          >
            Create account
          </Link>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-sky-300 hover:text-sky-200">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
