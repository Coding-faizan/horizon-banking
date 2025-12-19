import Sidebar from '@/app/components/SideBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
