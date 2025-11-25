import terms from '../assets/img/terms.png';

const Terms = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 p-4 md:p-8">
      <div className="relative max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 gap-6 items-start p-5 md:p-10">
        {/* Decorative blob illustration (absolute, subtle) */}
        <div className="pointer-events-none absolute -right-32 -top-20 opacity-30">
          <svg width="420" height="420" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <g transform="translate(300,300)">
              <path d="M120,-160C153,-134,168,-89,183,-47C198,-5,213,33,201,86C189,139,150,207,98,230C46,253,-18,231,-67,197C-116,163,-151,116,-165,68C-179,20,-173,-28,-150,-72C-127,-116,-88,-155,-44,-179C0,-203,44,-211,92,-203C140,-195,86,-186,120,-160Z" fill="url(#g1)"></path>
            </g>
          </svg>
        </div>
        <div className="pointer-events-none absolute -right-32 bottom-0 opacity-30">
          <svg width="420" height="420" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <g transform="translate(300,300)">
              <path d="M120,-160C153,-134,168,-89,183,-47C198,-5,213,33,201,86C189,139,150,207,98,230C46,253,-18,231,-67,197C-116,163,-151,116,-165,68C-179,20,-173,-28,-150,-72C-127,-116,-88,-155,-44,-179C0,-203,44,-211,92,-203C140,-195,86,-186,120,-160Z" fill="url(#g1)"></path>
            </g>
          </svg>
        </div>

        {/* Left: Text content */}
        <div className="z-10">
          <img
            src={terms}
            alt="Terms illustration"
            className="mx-auto md:mx-0 w-36 md:w-44 rounded-lg shadow-lg transform hover:scale-[1.03] transition duration-300"
            style={{ boxShadow: '0 20px 50px rgba(99,102,241,0.12)' }}
          />

          <h1
            className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight fade-in-up"
            style={{ animationDelay: '0.08s' }}
          >
            Terms and Conditions
          </h1>

          <p
            className="mt-3 text-slate-600 text-lg fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            Welcome to our blog app. By using our service, you agree to the following terms and conditions:
          </p>

          <div className="mt-6 space-y-4">
            <div
              className="p-4 bg-linear-to-r from-white to-slate-50 rounded-xl border border-slate-100 flex items-start gap-4 fade-in-up"
              style={{ animationDelay: '0.22s' }}
            >
              <div className="flex-none w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-800">1. Acceptance of Terms</h2>
                <p className="text-slate-600 mt-1">By accessing and using this application, you accept and agree to be bound by the terms and provisions of this agreement.</p>
              </div>
            </div>

            <div
              className="p-4 bg-linear-to-r from-white to-slate-50 rounded-xl border border-slate-100 flex items-start gap-4 fade-in-up"
              style={{ animationDelay: '0.28s' }}
            >
              <div className="flex-none w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7h18M6 11h12M10 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-800">2. Changes to Terms</h2>
                <p className="text-slate-600 mt-1">We reserve the right to modify these terms at any time. Your continued use after any changes signifies acceptance of the new terms.</p>
              </div>
            </div>

            <div
              className="p-4 bg-linear-to-r from-white to-slate-50 rounded-xl border border-slate-100 flex items-start gap-4 fade-in-up"
              style={{ animationDelay: '0.34s' }}
            >
              <div className="flex-none w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-800">3. User Responsibilities</h2>
                <p className="text-slate-600 mt-1">Users are responsible for maintaining the confidentiality of account information and for all activities on their account.</p>
              </div>
            </div>

            <div
              className="p-4 bg-linear-to-r from-white to-slate-50 rounded-xl border border-slate-100 flex items-start gap-4 fade-in-up"
              style={{ animationDelay: '0.40s' }}
            >
              <div className="flex-none w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-800">4. Limitation of Liability</h2>
                <p className="text-slate-600 mt-1">We are not liable for any damages arising from the use or inability to use the application.</p>
              </div>
            </div>

            <div
              className="p-4 bg-linear-to-r from-white to-slate-50 rounded-xl border border-slate-100 flex items-start gap-4 fade-in-up"
              style={{ animationDelay: '0.46s' }}
            >
              <div className="flex-none w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-800">5. Governing Law</h2>
                <p className="text-slate-600 mt-1">These terms shall be governed by the laws of the jurisdiction in which the application operates.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-slate-500">If you have any questions about these terms, please contact us.</p>
            <div className="flex gap-1 md:gap-3">
              <a
                href="mailto:support@yourblogapp.com"
                className="bg-indigo-600 text-white px-2 md:px-4 py-2 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >
                Contact Support
              </a>
              <a
                href="/privacy"
                className="p-2 md:px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
              >
                Read Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="absolute left-6 bottom-1 text-xs text-slate-400">Last updated: 2025-01-01</div>
      </div>
    </div>
  )
}

export default Terms;