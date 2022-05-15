import React from "react"

const CarouselNews : React.FC = () => {
  const images : string[] = [
    'https://www.javerianacali.edu.co/sites/default/files/styles/image_1100x700/public/2021-10/Galeria1.png',
    'https://www.javerianacali.edu.co/sites/default/files/styles/image_1100x700/public/2021-10/Galeria2.png',
    'https://www.javerianacali.edu.co/sites/default/files/styles/image_1100x700/public/2021-10/Galeria3.png',
    'https://www.javerianacali.edu.co/sites/default/files/styles/image_1100x700/public/2021-10/EquipoCompleto.png']
    const [currentImage, setCurrentImage] = React.useState(0)

    const refs = images.reduce((acc : any, _, i) => {
      acc[i] = React.createRef()
      return acc
    }, {})

    const scrollToImage = (i : number) => {
      setCurrentImage(i);

      refs[i].current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      })
    }

    const totalImages = images.length

    const nextImage = () => {
      if ( currentImage >= totalImages - 1 ) {
        scrollToImage(0)
      }
      else {
        scrollToImage(currentImage + 1)
      }
    }

    const previouseImage = () => {
      if ( currentImage == 0 ) {
        scrollToImage(totalImages - 1)
      }
      else {
        scrollToImage(currentImage - 1)
      }
    }

    const arrowStyle = "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 items-center justify-center"

    const sliderControl = (isLeft: boolean) => {
      return(
        <button
          type="button"
          onClick={isLeft? previouseImage : nextImage}
          className={`${arrowStyle} ${isLeft? 'left-2' : 'right-2'}`}
          style={{ top: '40%' }}
        >
          <span aria-label={`Flecha ${isLeft? 'izquierda' : 'derecha'}`}><img className={`${isLeft? 'rotate-0' : 'rotate-180'}`} width={64/2} height={64/2} src="/assets/left-arrow.png"/></span>
        </button>
      )
    }

  return (
    <div className="p-12 flex justify-center items-center ">
      <div className="relative w-full">
        <div className="carousel">
          {sliderControl(true)}
          {images.map((img, i) => {
            return(
              <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                <img src={img} className="w-full object-contain"/>
              </div>
            )})}
          {sliderControl(false)}
        </div>
      </div>
    </div>
  )
}

export default CarouselNews