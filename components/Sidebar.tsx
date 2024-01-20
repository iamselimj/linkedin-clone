import Image from 'next/image'
import React from 'react'
import { Avatar } from './Avatar'
import Link from 'next/link'
import { Icons } from './Icons'

export const Sidebar = () => {
  const recetItem = (topic: string) => {
    return (
      <Link
        href=""
        className="p-1.5 rounded-lg flex items-center text-xs font-semibold text-linkedin hover:underline hover:bg-gray-200/70"
      >
        <span className="">#</span>
        <span>{topic}</span>
      </Link>
    )
  }

  return (
    <div className="sticky w-full md:w-2/5 lg:w-1/5 flex flex-col">
      <div className="flex flex-col border-2 rounded-lg shadow-md">
        {/* HEADER */}
        <Link
          href=""
          className="group flex flex-col justify-center text-center text-sm pb-3"
        >
          <Image
            src={
              'https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt=""
            width={732}
            height={732}
            loading="lazy"
            className="rounded-t-lg h-[60px] -mb-[33px]"
          />
          <Avatar
            imageUrl="/avatar.jpg"
            width={68}
            height={68}
            className="mx-auto border-2 border-white"
          />
          <h2 className="mt-3 text-lg font-medium group-over:underline group-hover:underline">
            Sélim Jacquet
          </h2>
          <h3 className="mt-1 text-xs font-light text-gray-500">
            Junior Full Stack Web Developer
          </h3>
        </Link>

        {/* STATS */}
        <div className="hidden md:flex flex-col border-t py-3 gap-2 font-medium text-gray-500 hover:border-gray-300">
          <Link
            href={'/'}
            className="flex justify-between py-0.5 px-2 text-xs rounded-lg hover:bg-gray-200/70"
          >
            Profile viewers
            <span className="text-linkedin">14</span>
          </Link>
          <Link
            href={'/'}
            className="flex flex-col py-0.5 px-2 text-xs rounded-lg hover:bg-gray-200/70"
          >
            <div className="flex justify-between">
              Connections
              <span className="text-linkedin">32</span>
            </div>
            <span className="text-gray-900">Connect with Alumni</span>
          </Link>
        </div>

        {/* PREMIUM */}
        <div className="hidden md:flex group border-t py-3 px-1 gap-2 font-medium text-gray-500 hover:border-gray-300">
          <Link href={''} className="flex flex-col text-xs gap-1.5 text-black ">
            <span className="flex mt-1 text-xs font-light text-gray-500 group-hover:text-gray-600">
              Access exclusive tools & insights
            </span>
            <div className="flex items-center gap-1 group-hover:text-linkedin hover:underline">
              <Icons.premium className="text-amber-600" fontSize="medium" />
              <span>Get hired faster with Premium</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-col border-t py-3 px-1 font-medium text-gray-500 hover:border-gray-300">
          <Link href="" className="flex items-center text-xs text-black gap-1">
            <Icons.bookmark className="text-gray-500" fontSize="medium" />
            <span>My items</span>
          </Link>
        </div>
      </div>

      {/* RECENT TOPICS */}
      <div className="hidden mt-2 md:flex flex-col border-2 rounded-lg shadow-md">
        <span className="p-2 w-full text-sm font-medium border-b">
          Recent topics
        </span>
        <div className="p-2">
          {recetItem('Software')}
          {recetItem('Engineering')}
          {recetItem('CloudArchitect')}
          {recetItem('SecurityResearch')}
          {recetItem('DevOps')}
        </div>
        <div className="cursor-pointer border-t px-2 py-3 text-center text-sm text-gray-500 font-medium hover:text-gray-600">
          <Link href="">Discover more</Link>
        </div>
      </div>
    </div>
  )
}
