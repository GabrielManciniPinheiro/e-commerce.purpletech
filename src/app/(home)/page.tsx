import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";

export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    // Tentando buscar os dados
    const deals = await prismaClient.product.findMany({
      where: {
        discountPercentage: {
          gt: 0,
        },
      },
    });

    const keyboards = await prismaClient.product.findMany({
      where: {
        category: {
          slug: "keyboards",
        },
      },
    });

    const mouses = await prismaClient.product.findMany({
      where: {
        category: {
          slug: "mouses",
        },
      },
    });

    const headphones = await prismaClient.product.findMany({
      where: {
        category: {
          slug: "headphones",
        },
      },
    });

    return (
      <div className="flex flex-col gap-8 py-8">
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto esse mês"
        />

        <div className="px-5">
          <Categories />
        </div>

        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <PromoBanner
          src="/banner-mouses.png"
          alt="Até 55% de desconto em mouses"
        />

        <div>
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>

        <div>
          <PromoBanner
            src="/banner-fones.png"
            alt="Até 20% de desconto em fones"
          />
        </div>

        <div>
          <SectionTitle>Headphones</SectionTitle>
          <ProductList products={headphones} />
        </div>

        <div>
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>
      </div>
    );
  } catch (error) {
    // ISSO AQUI VAI FAZER O ERRO APARECER NA VERCEL
    console.error("ERRO_DETALHADO_HOME:", error);

    return (
      <div className="flex h-screen flex-col items-center justify-center p-10 text-center">
        <h1 className="text-xl font-bold text-red-500">
          Erro ao carregar a Home
        </h1>
        <p className="text-sm text-gray-500">
          Verifique os logs da Vercel para ver o ERRO_DETALHADO_HOME.
        </p>
        <pre className="mt-4 overflow-auto rounded bg-gray-100 p-4 text-left text-xs text-black">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  }
}
