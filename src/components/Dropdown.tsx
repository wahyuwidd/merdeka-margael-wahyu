import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon, Contact, History, UserRound } from 'lucide-react'
import Link from 'next/link'

export default function Dropdown() {
    
  return (
    <div className="relative overflow-visible">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="ml-4 flex items-center justify-center">
            Sejarah
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50">
            <div className="px-2 py-2">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={'/sejarah/peristiwa'}
                    className={`${
                      active ? 'bg-primary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                  >
                    <History className='mr-2 h-5 w-5' />
                    Peristiwa
                  </a>
                )}
              </Menu.Item>
              
            </div>
            <div className="px-2 py-2">
                <Menu.Item>
                {({ active }) => (
                  <Link
                    href={'/sejarah/pahlawan'}
                    className={`${
                      active ? 'bg-primary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                  >
                    <Contact className='mr-2 h-5 w-5' />
                    Pahlawan
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={'/sejarah/kepemimpinan'}
                    className={`${
                      active ? 'bg-primary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                  >
                    <UserRound className='mr-2 h-5 w-5' />
                    Kepemimpinan
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
