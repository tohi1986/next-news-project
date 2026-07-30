export default function NewsLayout({
  children,
  trending,
  archive,
}: {
  children: React.ReactNode;
  trending: React.ReactNode;
  archive: React.ReactNode;
}) {
  return (
    <>
      {children}
      {trending}
      {archive}
    </>
  );
}