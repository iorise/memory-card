import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import ButtonImage from './button-image'

interface CardProps {
    name: string
    image: StaticImageData
    handleCardClick: () => void
}

const CardImage = ({name, image, handleCardClick}: CardProps) => {
  return (
    <ButtonImage className='relative group max-w-none flex-col gap-0 border-0' onClick={handleCardClick}>
        <Image src={image} alt={name} width={200} className='rounded-lg hover:rounded-[100px]  transition-all duration-300 hover:scale-[1.04] group-hover:brightness-110
         group-focus-visible:brightness-110 '/>
        <p className='border-4 border-pink-400  rounded-full px-2 py-1 absolute md:-right-5 -right-2 md:-bottom-5 -bottom-2 bg-gradient-to-bl from-blue-500/80 to-red-500 md:text-lg text-xs'>{name}</p>
    </ButtonImage>
  )
}

export default CardImage