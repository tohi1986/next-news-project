export default function ExtrasLayout({
  children,
  trending,
  archive,
}: {
  children: React.ReactNode;
  trending: React.ReactNode;
  archive: React.ReactNode;
}) {
  return (
    <main>
      {children}
    
      <div>
        {trending}
      </div>
        <hr className="my-8 border-t-2 border-amber-500" />
      <div>
        {archive}
      </div>
    </main>
  );
}