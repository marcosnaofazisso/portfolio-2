import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Hello world</h1>
        <Link href={"/fotografia"}>go to fotografia</Link>
      </div>
    </main>
  );
}
