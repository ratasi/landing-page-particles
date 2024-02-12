"use client"

import Image from 'next/image'

import { MotionTransition } from './transition-component'

const CircleImage = () => {
    return (
        <MotionTransition position='right' className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/circles.png" width="400" height="400" className="w-full h-full " alt="Particles " />
        </MotionTransition>

    );
}

export default CircleImage;