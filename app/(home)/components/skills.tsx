"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiNextdotjs, SiReact, SiTailwindcss, SiHtml5,SiCss3,SiJavascript,SiExpress,SiMongodb,SiNodedotjs,SiTypescript,SiSupabase,SiPostman,SiPrisma,SiThreedotjs,SiOpenai } from 'react-icons/si'

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
            text:"JavaScript",
            Icon: SiJavascript
        },
        {
            text:"TypeScript",
            Icon: SiTypescript
        },
        {
            text:"Supabase",
            Icon: SiSupabase
        },
        {
            text:"Node.Js",
            Icon: SiNodedotjs
        },
        {
            text:"MongoDB",
            Icon: SiMongodb
        },
        {
            text:"Express",
            Icon: SiExpress
        },
        {
            text:"HTML",
            Icon: SiHtml5
        },
        {
            text:"CSS",
            Icon: SiCss3
        },
        {
            text:"Postman",
            Icon: SiPostman
        },
        {
            text:"Prisma",
            Icon: SiPrisma
        },
        {
            text:"Three.js",
            Icon: SiThreedotjs
        },
        {
            text:"OpenAI",
            Icon: SiOpenai
        },
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