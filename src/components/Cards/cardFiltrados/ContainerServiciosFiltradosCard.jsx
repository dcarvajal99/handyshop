import ServiciosFiltradosCard from "./ServiciosFiltradosCard";

const ContainerServiciosFiltradosCard = () => {
    return (
        <section className="bg-white dark:bg-gray-900 py-10 px-12">
            <div
                className="grid justify-items-center grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ServiciosFiltradosCard />
            </div>
        </section>
    )
}

export default ContainerServiciosFiltradosCard;
