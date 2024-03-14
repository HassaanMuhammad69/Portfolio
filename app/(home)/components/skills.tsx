"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si'

const skills = () => {

    const skill=[
        {
            text:"React",
            Icon: SiReact
        },
        {
            text:"Next.Js",
            Icon: SiNextdotjs
        },
        {
            text:"Tailwind",
            Icon: SiTailwindcss
        },
        {
            text:"React",
            Icon: SiReact
        },
        {
            text:"Next.Js",
            Icon: SiNextdotjs
        },
        {
            text:"Tailwind",
            Icon: SiTailwindcss
        },
        {
            text:"React",
            Icon: SiReact
        },
        {
            text:"Next.Js",
            Icon: SiNextdotjs
        },
        {
            text:"Tailwind",
            Icon: SiTailwindcss
        }
    ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text='Skills 🔪'
        className='flex flex-col items-center justify-center -rotate-6'
        />

        <HoverEffect items={skill}/>
    </div>
  )
}

export default skills