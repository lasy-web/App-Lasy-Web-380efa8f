import { Button } from "@/components/ui/button";
import { MadeWithLasy } from "@/components/made-with-lasy";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      {/* Fundo com gradiente e pontos */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-neutral-950 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]"></div>

      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-500 py-4">
          Construa Aplicações Incríveis
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Use o poder da IA e dos melhores componentes de UI para dar vida às
          suas ideias mais rápido do que nunca.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg">
            Comece a Usar
            <MoveRight />
          </Button>
          <Button size="lg" variant="outline">
            Ver Documentação
          </Button>
        </div>
      </main>

      <footer className="w-full">
        <MadeWithLasy />
      </footer>
    </div>
  );
}