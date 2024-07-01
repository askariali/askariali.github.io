import Footer from "@/components/blog/footer";
import Header from "@/components/blog/header";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container py-4">{children}</main>
      <Footer />
    </>
  );
}
