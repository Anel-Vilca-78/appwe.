import Card from "./Card";
import "../assets/styles/dorama.css";
import Sinopsis from "./Sinopsis";

function Dorama() {
  const season = [
    {
      id:1,
      img:<img src="/imgs/cap1.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 1</p>,
      description: <p className="description">Kim Sin se convierte en duende después de su muerte y vive más de 900 años.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x1" className="urlcap">https://doramasflix.co/capitulos/goblin-1x1</a>,
    },

    {
      id:2,
      img:<img src="/imgs/cap2.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 2</p>,
      description: <p className="description">Kim Sin teme sobre la existencia de la niña que se proclama a sí misma como la esposa del Guardián. Mientras tanto, Euntak y Kim Sin pasan tiempo juntos en Canadá y Kim Sin tiene un sentimiento especial hacia ella.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x2"className="urlcap">https://doramasflix.co/capitulos/goblin-1x2</a>,
    },
    {
      id:3,
      img:<img src="/imgs/cap3.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 3</p>,
      description: <p className="description">El Guardián y el Ángel de la muerte aparecen de repente y salvan a Euntak que se hallaba en peligro. Por otro lado, el Ángel de la muerte ve a Sunny por primera vez y las lágrimas caen de sus ojos sin motivo.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x3" className="urlcap">https://doramasflix.co/capitulos/goblin-1x3</a>,
    },
    {
      id:4,
      img:<img src="/imgs/cap4.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 4</p>,
      description: <p className="description">El Guardián está seguro de que Euntak es su esposa, pero pronto comienza a temer su próxima muerte. Mientras tanto, Sunny no puede dejar de pensar en el Ángel de la muerte.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x4" className="urlcap">https://doramasflix.co/capitulos/goblin-1x4</a>,
    },
    {
      id:5,
      img: <img src="/imgs/cap5.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 5</p>,
      description: <p className="description">El Guardián finalmente decide acabar con su vida, para poder vivir junto a Euntak. Mientras tanto, Sunny se enamora lentamente del Ángel de la muerte.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x5" className="urlcap">https://doramasflix.co/capitulos/goblin-1x5</a>,
    },
    {
      id:6,
      img:<img src="/imgs/cap6.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 6</p>,
      description: <p className="description">Finalmente, el goblin le pide a Euntak que extraiga la espada que está atrapada en su cuerpo desde hace 900 años. Mientras tanto, la Muerte se da cuenta de que siente algo por Sunny.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x6" className="urlcap">https://doramasflix.co/capitulos/goblin-1x6</a>,
    },
    {
      id:7,
      img:<img src="/imgs/cap7.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 7</p>,
      description: <p className="description">El goblin regresa a casa porque Euntak no fue capaz de extraer la espada, pero la Muerte y Deokhwa no lo reciben de buen grado. Mientras tanto, la Muerte vuelve a llorar al ver el viejo retrato de una mujer.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x7" className="urlcap">https://doramasflix.co/capitulos/goblin-1x7</a>,
    },
    {
      id:8,
      img:<img src="/imgs/cap8.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 8</p>,
      description: <p className="description">Kim Sin se convierte en duende después de su muerte y vive más de 900 años.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x8" className="urlcap">https://doramasflix.co/capitulos/goblin-1x8</a>,
    },
    {
      id:9,
      img:<img src="/imgs/cap9.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 9</p>,
      description: <p className="description">Kim Sin se convierte en duende después de su muerte y vive más de 900 años.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x9" className="urlcap">https://doramasflix.co/capitulos/goblin-1x9</a>,
    },
    {
      id:10,
      img:<img src="/imgs/cap10.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 10</p>,
      description: <p className="description">Kim Sin se convierte en duende después de su muerte y vive más de 900 años.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x10" className="urlcap">https://doramasflix.co/capitulos/goblin-1x10</a>,
    },
    {
      id:11,
      img:<img src="/imgs/cap11.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 11</p>,
      description: <p className="description">Kim Sin se convierte en duende después de su muerte y vive más de 900 años.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x11" className="urlcap">https://doramasflix.co/capitulos/goblin-1x11</a>,
    },
    {
      id:12,
      img:<img src="/imgs/cap12.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 12</p>,
      description: <p className="description">Kim Sin se convierte en duende después de su muerte y vive más de 900 años.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x12" className="urlcap">https://doramasflix.co/capitulos/goblin-1x12</a>,
    },
    {
      id:13,
      img:<img src="/imgs/cap13.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 13</p>,
      description: <p className="description">Kim Sin se convierte en duende después de su muerte y vive más de 900 años.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x13" className="urlcap">https://doramasflix.co/capitulos/goblin-1x13</a>,
    },
    {
      id:14,
      img:<img src="/imgs/cap14.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 14</p>,
      description: <p className="description">Kim Sin se convierte en duende después de su muerte y vive más de 900 años.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x14" className="urlcap">https://doramasflix.co/capitulos/goblin-1x14</a>,
    },
    {
      id:15,
      img:<img src="/imgs/cap15.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 15</p>,
      description: <p className="description">Kim Sin se convierte en duende después de su muerte y vive más de 900 años.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x15 " className="urlcap">https://doramasflix.co/capitulos/goblin-1x15</a>,
    },
    {
      id:16,
      img:<img src="/imgs/cap16.jpg" alt=""/>,
      title: <p className="titlecap">Capítulo 16</p>,
      description: <p className="description">Kim Sin se convierte en duende después de su muerte y vive más de 900 años.</p>,
      url:<a href="https://doramasflix.co/capitulos/goblin-1x16" className="urlcap">https://doramasflix.co/capitulos/goblin-1x16</a>,
    }, 
    
  ];

  return (
    <div className="containerContact">

      <Sinopsis></Sinopsis>
      <div className="containerContact-main">
        {season.map((season) => {
          return <Card img={season.img} title={season.title} description={season.description} url={season.url} />;
        })}
      </div>
    </div>
  );
}

export default Dorama;
