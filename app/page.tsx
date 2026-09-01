import Link from 'next/link';

function Square({ value }: { value: number }) {
  return (
    <Link
      href={`/${value}`}
      className="flex aspect-square w-full items-center justify-center rounded-lg border-2 border-slate-300 bg-white text-xl font-black text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-200"
    >
      {value}
    </Link>
  );
}

export default function FeedPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10 space-y-8">
        <h1 className="text-3xl font-bold text-slate-950 sm:text-5xl">
          Next.js scroll restore bug demo
        </h1>
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Steps to reproduce</h2>
          <ol className="mt-3 list-inside list-decimal space-y-2 leading-7 text-slate-600">
            <li>Scroll down the list of numbers.</li>
            <li>Click on one of the numbers to open its page.</li>
            <li>Navigate back to this page.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Expected outcome</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Returning here using the browser&apos;s back button restores your previous scroll position.<br />
            Returning here by clicking the &quot;Back to the list&quot; link returns you to the top of this page.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Actual outcome</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Scroll position is lost when returning to this page regardless of whether the back button is used.
          </p>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-950">Numbered feed</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {Array.from({ length: 1000 }, (_, index) => <Square key={index + 1} value={index + 1} />)}
        </div>
      </section>
    </main>
  );
}
