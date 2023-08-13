import ProductFavCard from "./ProductFavCard";

const ContainerFavCards = () => {
    return (
        <section  className="dark:bg-gray-900 py-10 px-12">
            <div
                className="grid justify-items-center grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ProductFavCard />
            </div>
        </section>
    )
}

export default ContainerFavCards;
