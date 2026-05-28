export default function Section({ title, children }: { title?: string, children: React.ReactNode }) {
  return (
    <section className="bg-gray-50 min-h-screen">
      {title && (
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-2">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}
