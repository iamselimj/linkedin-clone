import React from 'react'
import { Icons } from './Icons'

export const SearchBar = () => {
  return (
    <form action="submit" className="hidden sm:inline-flex">
      <div className="relative flex p-2 items-center gap-2 transation-all rounded-md border-2 border-transparent">
        <Icons.search className="absolute w-5 pointer-events-none" />
        <input
          placeholder="Search"
          className="pl-3 ml-3 w-full bg-transparent text-md font-light outline-none text-black"
        />
      </div>
    </form>
  )
}
