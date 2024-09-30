export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>ヘッダーになる</header>
      <main>{children}</main>
    </div>
  );
}
