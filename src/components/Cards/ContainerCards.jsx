import ProductCard from "./ProductCard";
import Filtros from "../filtros/EstiloFiltro";
const ContainerCards = () => {
    return (
        <section className="bg-white dark:bg-gray-900 py-10 px-12">
            <Filtros />
            <div
                className="grid justify-items-center grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ProductCard />
            </div>
        </section>
    )
}

export default ContainerCards;
