import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      
      <h1>Estamos en la home</h1>

      {/* link para navegar entre componentes  */}
      <Link href="/ps5/skate">
        <a>
         PS5
         </a>
      </Link>
      
      </main>
    </div>
  );
}
