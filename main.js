// let producto_1 = {
//     titulo: "Wii",
//     parrafo: "Wii contiene 512 megabytes de memoria flash interna y posee una ranura para tarjetas SD a manera de almacenamiento externo. Las tarjetas SD pueden ser utilizadas para subir fotografías, así como para realizar copias de seguridad de los datos guardados de los juegos y de los títulos disponibles para su descarga por medio de la Consola Virtual o WiiWare.",
//     logo: "img/logo N.png",
//     img: "img/consola W.png",
//     id: document.querySelector("#producto1")
// };
// let producto_2 = {
//     titulo: "PS5",
//     parrafo: "Experimenta una velocidad sorprendente con una SSD de velocidad ultrarrápida, una inmersión más profunda con soporte para respuesta háptica1, gatillos adaptables1 y audio 3D*, además de una generación completamente nueva de juegos de PlayStation.",
//     logo: "img/Logops5.png",
//     img: "img/play.png",
//     id: document.querySelector("#producto2")
// };
// let producto_3 = {
//     titulo: "Xbox Series S",
//     parrafo: "Desde Forza hasta FIFA, incluidos los beneficios de EA Play, Xbox Game Pass ofrece más de 100 títulos de alta calidad. Disfruta de juegos increíbles como Halo Infinite desde el mismo día de su lanzamiento y combate con amigos con Xbox Live Gold. Agrega Xbox Game Pass para aprovechar al máximo tu Xbox Series S.",
//     logo: "img/xbox logo.png",
//     img: "img/cosola xbox.png",
//     id: document.querySelector("#producto3")
// };
// let producto_4 = {
//     titulo: "HP",
//     parrafo: "nuevo procesador Intel Core de 11ª generación y la serie Ryzen 4000 de AMD, respaldados por las opciones gráfica de las Intel Iris Xe9 y las NVIDIA GeForce MX45010, una tecnología de memoria dual, así como la memoria Intel Optane opcional con una SSD de hasta 1TB",
//     logo: "img/logo de hp.png",
//     img: "img/Hp.png",
//     id: document.querySelector("#producto4")
// };

// let producto_5 = {
//     titulo: "Apple",
//     parrafo: "Sumérgete en la envolvente pantalla Retina 4.5K de 24 pulgadas para disfrutar con un máximo nivel de detalle.1 La amplia gama de colores P3 hace que todo lo que veas cobre vida con más de mil millones de colores. Los 500 nits de brillo les dan a las imágenes un protagonismo increíble. Y el revestimiento antirreflejo, líder en la industria, te ofrece mayor comodidad y legibilidad.",
//     logo: "img/apple logo.png",
//     img: "img/icono de appol.png",
//     id: document.querySelector("#producto5")
// };

// let producto_6 = {
//     titulo: "Asus",
//     parrafo: "El Asus Laptop, M415DA-EK365 AMD Ryzen 5  cuenta con un procesador AMD Rzyen 5  y 4 GB de RAM. El almacenamiento es masivo, te ofrece disco duro de 1TB. Este M415DA  4GB de memoria. También cuenta con tres puertos USB, un puerto USB 3.1 Type-C, una toma de micrófono, una toma de auriculares",
//     logo: "img/asus logo.png",
//     img: "img/icono de asus.png",
//     id: document.querySelector("#producto6")
// };

// let producto_7 = {
//     titulo: "Acer",
//     parrafo: "Aprovecha este gran dispositivo con diseño práctico que se puede transportar fácilmente. Además incluye una bisagra ergonómica que permite un flujo de aire adicional desde la parte inferior de la laptop.",
//     logo: "img/logo acer.png",
//     img: "img/icono de acer.png",
//     id: document.querySelector("#producto7")
// };

// let producto_8 = {
//     titulo: "Dell",
//     parrafo: "ado que utiliza el nuevo patrón de ventilación con cambios, la 3080 maximiza la entrada de aire y reduce la temperatura del sistema. El acceso más fácil a las piezas sin quitar el bisel frontal ofrece un mantenimiento simplificado con sus características sin herramientas.",
//     logo: "img/logo dell.png",
//     img: "img/icono de dell.png",
//     id: document.querySelector("#producto8")
// };

// let producto_9 = {
//     titulo: "Lenovo",
//     parrafo: "De clase empresarial y preparado para el futuro, el V530 es una excelente opción para los administradores de TI progresistas que buscan computadoras de escritorio confiables y seguras. Los detalles de diseño, como los puertos USB de fácil acceso, facilitan la vida de los usuarios.",
//     logo: "img/logo lenovo.png",
//     img: "img/icono de lenovo.png",
//     id: document.querySelector("#producto9")
// };

// let producto_10 = {
//     titulo: "Huawei",
//     parrafo: "Ama la sensación suave y el diseño fácil de sostener del cuerpo redondeado en 3D y elije entre 2 colores frescos y únicos, para un look tan fresco y audaz como tú.",
//     logo: "img/logo huawei.png",
//     img: "img/icono de phone.png",
//     id: document.querySelector("#producto10")
// };

// let producto_11 = {
//     titulo: "LG",
//     parrafo: "El LG UltraGear™ 27GP850 es un monitor gaming potente con funciones de alto rendimiento y que se adapta a las más altas exigencias de tus videojuegos.",
//     logo: "img/logo de lg.png",
//     img: "img/icono de lg.png",
//     id: document.querySelector("#producto11")
// };

// let producto_12 = {
//     titulo: "Samsung",
//     parrafo: "El Notebook 9 Pro Samsung saca provecho de la impresionante pantalla, los biseles reducidos y los altavoces estéreo duales de 1,5 W con Thunder Amp para aumentar el volumen máximo de salida, al tiempo que ofrece una experiencia totalmente inmersiva mientras crea, trabaja o disfruta.",
//     logo: "img/logo samsung.png",
//     img: "img/icono de samsung.png",
//     id: document.querySelector("#producto12")
// };

addEventListener("DOMContentLoaded", ()=>{
    document.body.innerHTML = "";
    let mostrar = async(titulo="Titulo", parrafo="Descripcion", logo="img/defaul_logo.png", img="img/defaul.png", id)=>{
        let peticion = await fetch("data.json");
        let json = await peticion.json();
        // let  frag = document.createDocumentFragment();
        json.forEach((data, id) => {
            let div = document.createElement("DIV");
            div.classList.add('card');
            let html = //html
                `<div class="circle">
                    <img src="${data.logo}" class="logo">
                </div>
                <div class="content">
                    <h2>${data.titulo}</h2>
                    <p>${data.parrafo}</p>
                    <a href="Galeria.html?id=${id}">Ver Más</a>
            </div>
            <img src="${data.img}" class="product_img">`;
        div.insertAdjacentHTML("beforeend", html);
        document.body.insertAdjacentElement("beforeend", div);
        // frag.appendChild(div);  
        });
        // caja.insertAdjacentHTML("beforeend", html);
            // let caja = id;
            // let html = //html
            //     `<div class="card">
            //         <div class="content">
            //         <img src="${logo}" class="logo">
            //     </div>
            //     <div class="content">
            //         <h2>${titulo}</h2>
            //         <p>${parrafo}</p>
            //         <a href="Galeria.html">Ver Más</a>
            //     </div>
            //     <img src="${img}" class="product_img">
            //     </div>`;
            //     document.body.insertAdjacentHTML("beforeend", html);
        }
        mostrar();
})
// let defaul = {
//     titulo: undefined,
//     parrafo: undefined,
//     logo: undefined,
//     img: undefined
// };

// mostrar(...Object.values(producto_1));
// mostrar(...Object.values(producto_2));
// mostrar(...Object.values(producto_3));
// mostrar(...Object.values(producto_4));
// mostrar(...Object.values(producto_5));
// mostrar(...Object.values(producto_6));
// mostrar(...Object.values(producto_7));
// mostrar(...Object.values(producto_8));
// mostrar(...Object.values(producto_9));
// mostrar(...Object.values(producto_10));
// mostrar(...Object.values(producto_11));
// mostrar(...Object.values(producto_12));