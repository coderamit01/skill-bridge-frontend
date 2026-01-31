import { Footer2 } from "@/components/layout/footer2";
import { Navbar1 } from "@/components/layout/navbar1";

export default function commonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar1 />
      <main> {children} </main>
      <Footer2 />
    </>
  );
}
