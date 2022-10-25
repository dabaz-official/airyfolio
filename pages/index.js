import Head from 'next/head'

const today = new Date();

const navigation = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/airyfolio',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Airyfolio</title>
        <link rel="icon" href="/logos/primary-logo.svg" />
      </Head>

      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                Coming soon
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">The easier way to</span>
                <span className="block text-blue-600">build your portfolio</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Airyfolio is for people who are lazy as fuck. We have the service to help you build your portfolio based on your idea.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p className="text-base font-medium text-gray-900">Sign up to join the waitlist.</p>
              <form action="#" method="POST" className="mt-3 sm:flex">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full py-3 text-base rounded-2xl placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto transition duration-200"
                >
                  Join now
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500">
                We care about the protection of your data. Read our{" "}
                <a href="#" className="font-medium text-gray-900 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width={640}
              height={784}
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x={118}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
              <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
            </svg>
            <div className="relative mx-auto w-full rounded-full shadow-lg max-w-lg">
              <div
                className="relative block w-full bg-white rounded-full overflow-hidden focus:outline-none"
              >
                <img
                  className="w-full"
                  src="/logos/airyfolio-avatar.png"
                  alt="Airyfolio Avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; {today.getFullYear()} DabWave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
