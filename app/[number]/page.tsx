import Link from 'next/link';

function Square({ value }: { value: number }) {
  return (
    <div className="flex aspect-square w-24 items-center justify-center rounded-lg border-2 border-slate-300 bg-white text-xl font-black text-slate-800 shadow-sm">
      {value}
    </div>
  );
}

export function generateStaticParams() {
  return Array.from({ length: 1000 }, (_, index) => ({
    number: String(index + 1),
  }));
}

export default async function NumberPage({ params }: { params: Promise<{ number: string }> }) {
  const value = Number((await params).number);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-slate-950 px-4 py-10 text-white">
      <Square value={Number.isInteger(value) ? value : 0} />
      <Link href="/" className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20">
        Go back to the list
      </Link>
    </main>
  );
}
