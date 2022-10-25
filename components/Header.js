import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigations = [
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Templates',
    href: '/templates',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Airyfolio</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/logos/primary-logo.svg"
                alt="Primary Logo"
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden space-x-6 md:flex">
            {navigations.map((navigation) => (
              <a
                key={navigation.name} 
                href={navigation.href} 
                className="text-base text-gray-500 hover:text-gray-900 transition duration-200"
              >
                {navigation.name}
              </a>
            ))}
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="/login" className="whitespace-nowrap text-base text-gray-500 hover:text-gray-900 transition duration-200">
              Sign in
            </a>
            <a
              href="/register"
              className="ml-6 inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-transparent bg-blue-600 px-4 py-2 text-base text-white shadow-sm hover:bg-blue-700 transition duration-200"
            >
              Join now
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  <img
                    className="h-8 w-auto"
                    src="/logos/primary-logo.svg"
                    alt="Airyfolio"
                  />
                  <p className='text-2xl'>
                    Airyfolio
                  </p>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-6">
                  {navigations.map((navigation) => (
                    <a
                      key={navigation.name}
                      href={navigation.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <span className="text-base text-gray-900">{navigation.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <a
                href="/register"
                className="flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-4 py-2 text-base text-white shadow-sm hover:bg-blue-700"
              >
                Join now
              </a>
              <p className="mt-6 text-center text-base text-gray-500">
                Already have an account?{' '}
                <a href="/login" className="text-blue-600 hover:text-blue-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}