import Image from 'next/image'
import Link from 'next/link'

export const runtime = 'edge'

async function getTime() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return formattedDate;
}

export default async function Home() {
  const formattedDate = await getTime()

  return (
    <>
      <div className="flex min-h-screen bg-white">
        <div className="flex flex-col justify-center flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24">
          <div className="w-full mx-auto lg:max-w-6xl">
            <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
              <div>
                <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                  I am a short heading
                </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                  Use this paragraph to share information about your company or products. Make
                  it engaging and interesting, and showcase your brand&apos;s personality. Thanks for
                  visiting our website! This was built { formattedDate }
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                <Link href="/about" className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                  Go to About
                </Link>
                <Link href="/info" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                  Go to Info &nbsp; →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 order-first hidden w-0 bg-gray-300 lg:block">
          <div>
            <Image className="absolute inset-0 object-cover w-full h-full lg:border-l" src="/images/hero_bg.jpg" alt="" width={2400} height={1600} style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
      <section>
        <div className="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="gap-12 lg:grid-cols-2 lg:grid">
            <div>
              <div className="max-w-xl">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    I am a slightly longer heading than the others, to explain your
                    projects benefits and make conversions
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-12 lg:max-w-7xl">
                <ul role="list" className="grid grid-cols-2 gap-4 list-none lg:gap-6">
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Easy onboarding
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing
                      needs.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Customer support
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing
                      needs.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="max-w-xl py-12 mx-auto text-left lg:max-w-7xl">
                <h2 className="sr-only">Features.</h2>
                <div>
                  <div className="grid grid-cols-3 gap-12 text-center lg:grid-cols-3 lg:space-y-0">
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">Footers</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">CTA&apos;s</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">Forms</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">
                          Testimonials
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">Pricing</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">Blogs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
