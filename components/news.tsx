import React from 'react'
import CarouselNews from './carouselNews';

const News : React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className='container mx-auto px-11'>
        <p className='leading-tight max-w-5xl mx-auto text-4xl tracking-tight'>
          <strong>Buscamos facilitar los procesos de aprendizaje de niños con diversidad sensorial.</strong> Nuestro equipo tiene participantes de la Universidad de Sherbrooke, Canadá, la Universidad Autónoma de Bucaramanga, la Universidad del Norte y el Instituto para Niños Ciegos y Sordos.
        </p>
      </div>
      <div className='container mx-auto px-11 text-center mt-28'>
        <h2>Noticias</h2>
        <CarouselNews />
      </div>
    </section>
  )
}

export default News;