import ProductCard from "./ProductCard";

const ContainerCards = () => {
    return (
        <section  className="dark:bg-gray-900 py-10 px-12">
            <div
                className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ProductCard />
            </div>
        </section>
    )
}

export default ContainerCards;
