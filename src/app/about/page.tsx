import Link from "next/link"

export default function About() {
  return (
    <section>
      <div className="flex flex-col justify-center flex-1 px-8 py-8 mx-auto lg:py-24 md:px-12 lg:flex-none lg:px-24 max-w-7xl">
        <div className="max-w-2xl">
          <div>
            <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
              This should be the about page bruv
            </p>
            <p className="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
              If you could kick the person in the pants responsible for most of your
              trouble, you wouldn't sit for a month
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 text-left">
          <h2 className="sr-only">intro.</h2>
          <div>
            <div className="grid grid-cols-1 text-sm gap-x-2 gap-y-14 lg:grid-cols-2 lg:gap-36">
              <article>
                <div className="space-y-3">
                  <div className="gap-2 lg:inline-flex lg:items-center">
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-2 text-lg font-medium leading-6 text-black">
                      Developer experience
                    </p>
                  </div>
                  <p className="mt-2 text-base text-gray-500">
                    With the ability to share code, track changes and provide
                    feedback, you'll be able to complete projects faster.
                  </p>
                </div>
              </article>
              <article>
                <div className="space-y-3">
                  <div className="gap-2 lg:inline-flex lg:items-center">
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                      ❖
                    </div>
                    <p className="mt-2 text-lg font-medium leading-6 text-black">
                      Conect your SaaS
                    </p>
                  </div>
                  <p className="mt-2 text-base text-gray-500">
                    That's why we've made our SaaS programming product available at
                    a price that's affordable for everyone
                  </p>
                </div>
              </article>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
              <Link href="/" className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                Go to Home
              </Link>
              <Link href="/info" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                Go to Info &nbsp; →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}