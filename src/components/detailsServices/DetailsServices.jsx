import { Card } from 'flowbite-react';


export default function DetailsServices() {
    const ImagenUrl = 'https://www.oikos.com.co/constructora/images/website/Noticias_2019_/funciones-de-los-constructores.jpg'
    return (
        /*<Card
            horizontal
            imgSrc="/images/blog/image-4.jpg"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                    Noteworthy technology acquisitions 2021
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </p>
        </Card>*/

        <div className="flex w-full h-80vh items-center justify-center bg-primary">
            <div className="w-400 h-400 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${ImagenUrl}')` }}>

            </div>
            <div className="m-l-2rem m-b-2rem w-50 text-start">
                <h1>Contrucctor </h1>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa laborum vitae nulla, dolorum cum recusandae blanditiis voluptate? Id explicabo aliquid cumque pariatur expedita rem, nobis, saepe quis officia fuga enim!</p>
                <div >
                    <p>Ingredientes</p>
                    <ul>

                    </ul>
                </div>
                <div className="price-and-cart">
                    <h2></h2>
                    <button>Añadir 🛒</button>
                </div>

            </div>
        </div>

    )
}


