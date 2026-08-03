export default function NewsLayout({
  children,
  trending,
  archive,
  modal,
}: {
  children: React.ReactNode;
  trending: React.ReactNode;
  archive: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {trending}
      {archive}
      {modal}
    </>
  );
}