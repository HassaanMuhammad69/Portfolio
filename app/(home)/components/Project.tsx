import React from 'react'
import { SiNextdotjs, SiOpenai, SiReact, SiSupabase, SiTailwindcss, SiThreedotjs, SiVite } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

const Project = () => {
  const projects = [
    {
      Title: "AI Saas application",
      tech: [SiNextdotjs, SiReact, SiOpenai, SiTailwindcss],
      link: "https://ai-saa-s-nine.vercel.app/",
      coverPic: "/p1.png",
      background: "bg-indigo-500"
    },
    {
      Title: "Spotify Clone",
      tech: [SiNextdotjs, SiReact, SiSupabase, SiTailwindcss],
      link: "https://spotify-clone-gamma-inky.vercel.app/",
      coverPic: "/spotify.png",
      background: "bg-green-500"
    },
    {
      Title: "Portfolio",
      tech: [SiNextdotjs, SiReact, SiTailwindcss],
      link: "https://portfolio-hassaan.vercel.app/",
      coverPic: "/port.png",
      background: "bg-purple-500"
    },
    {
      Title: "Apple iPhone 15 Pro website",
      tech: [SiVite, SiReact, SiThreedotjs, SiTailwindcss],
      link: "https://apple-iphone-five.vercel.app/",
      coverPic: "/iphone.png",
      background: "bg-gray-600"
    },
    // {
    //   Title: "Nike-Shoe Store",
    //   tech: [SiVite, SiReact, SiTailwindcss],
    //   link: "https://nike-pi-two.vercel.app/",
    //   coverPic: "/nike.png",
    //   background: "bg-orange-400"
    // }
  ]
  return (
    <div className='py-10 p-5 sm:p-0'>

      <Title text='Project 🛠️'
        className='flex flex-col items-center justify-center -rotate-6'
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 pt-20'>
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-2 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.coverPic}
                  className='w-full space-y-5 cursor-pointer' >
                  <div className='space-y-5'>
                    <h1 className='text-2xl font-bold'>{project.Title}</h1>
                    <div className='flex items-center gap-5'>
                      {project.tech.map((Icon, index) => {
                        return <Icon className='w-8 h-8' key={index} />
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          )
        })}

      </div>

    </div>
  )
}

export default Project