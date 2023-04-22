import React from "react"
import styled from "styled-components"

interface CarouselProps {
  images: string[]
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px;
  height: 100px;
  width: 100px;
`

const CarouselDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }: { isActive: boolean }) =>
    isActive ? "#333" : "#ccc"};
  margin: 0 5px;
  cursor: pointer;
`

const CarouselSlider = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
`

const CarouselItem = styled.li`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const sliderRef = React.useRef<HTMLUListElement>(null)

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    if (sliderRef.current) {
      const slider = sliderRef.current
      const itemWidth = slider.offsetWidth
      const scrollAmount = index * itemWidth
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <CarouselContainer>
      <CarouselSlider ref={sliderRef}>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <CarouselImage src={image} alt={`Slide ${index}`} />
          </CarouselItem>
        ))}
      </CarouselSlider>
      <div>
        {images.map((_, index) => (
          <CarouselDot
            key={index}
            isActive={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </CarouselContainer>
  )
}

export default Carousel
