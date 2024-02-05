import Link from "next/link";

export default function PageNotFound() {
  return (
    <div>
      <h1>404 - Está página não existe!!</h1>
      Link para a <Link href="/">Home</Link>
    </div>
  );
}
