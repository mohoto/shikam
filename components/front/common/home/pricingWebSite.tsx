import React from 'react'
import GoogleBusiness from './googleBusiness';

import localFont from "next/font/local";

const icomoonFont = localFont({
  src: "../../../../fonts/icomoon.ttf",
});

type Props = {}

function PricingWebSite({}: Props) {
  return (
    <>
    <section className="py-20 section-padding">
      <div className="flex items-center flex-col">
        {/* <span className="text-shikam-normal text-center font-semibold mb-3 text-lg">Conception de site web adapté à votre activité</span> */}
        <div style={icomoonFont.style} className="text-shikam-normal 2xl:text-[2.5em] mb-2">c</div>
        <h2 className="text-4xl font-bold text-shikam-fonce text-center xl:!leading-relaxed mb-28 2xl:px-64">Un site web adapté à votre activité et clé en main <span className="text-shikam-degrade">qui vous rendra visible</span></h2>
      </div>
      <GoogleBusiness />
      <div className="flex flex-wrap justify-center lg:gap-x-20">
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-shikam-normal flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Sans abonnnement</h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
              <ul className="text-shikam-normal text-sm space-y-2 flex-grow mb-6">
                <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Lorem ipsum dolor sit amet consecte.</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Lorem ipsum dolor sit amet consecte.</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Lorem ipsum dolor sit amet consecte.</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Lorem ipsum dolor sit amet consecte.</span>
                </li>
            </ul>
              <button className="flex items-center mt-auto text-white bg-shikam-normal border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-full">Découvrir
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">Estimez le prix de votre site web.</p>
            </div>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 bg-shikam-normal flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-5">
                <div className="text-xs inline-flex font-semibold bg-green-100 text-green-600 rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Most Popular</div>
              </div>
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-indigo-100">Avec abonnnement</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span className="text-white">59€</span>
                <span className="text-lg ml-1 font-normal text-white">ht /mois</span>
              </h1>
              <ul className="text-indigo-100 text-sm space-y-2 flex-grow mb-6">
                <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Lorem ipsum dolor sit amet consecte.</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Lorem ipsum dolor sit amet consecte.</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Lorem ipsum dolor sit amet consecte.</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Lorem ipsum dolor sit amet consecte.</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Lorem ipsum dolor sit amet consecte.</span>
                </li>
            </ul>
              <button className="flex items-center mt-auto text-shikam-normal bg-white border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded-full">Découvrir
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-indigo-100 mt-3 font-light">Estimez le prix de votre site web.</p>
            </div>
          </div>
        </div>
    </section>
    
  </>

/*     <section className="py-6 section-padding">
    <div className="flex items-center flex-col">
      <span className="text-shikam-normal text-center font-semibold mb-3 text-lg">Conception de site web adapté à votre activité</span>
      <h2 className="text-4xl font-bold text-shikam-fonce text-center xl:!leading-relaxed mb-28">Un site web clé en main qui <span className="text-shikam-degrade">vous rendra visible</span></h2>
    </div>
    <div className="grid lg:grid-cols-2 lg:gap-x-28">
      <Card className="h-full lg:justify-self-end shadow-lg rounded-lg flex-col relative overflow-hidden">
          <div className="max-w-xs">
              <div className="relative flex flex-col h-full p-5">
                  <CardHeader className="pb-4 mb-4 border-b border-shikam-clair border-opacity-30">
                      <h3 className="text-xl font-extrabold text-shikam-normal leading-snug mb-2">Small Business</h3>
                      <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">$</span><span className="text-4xl text-shikam-normal">179</span></div>
                      <div className="text-shikam-normal">Billed Yearly. Perfect for small businesses</div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="text-shikam-normal text-sm space-y-2 flex-grow mb-6">
                        <li className="flex items-center">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Lorem ipsum dolor sit amet consecte.</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Lorem ipsum dolor sit amet consecte.</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Lorem ipsum dolor sit amet consecte.</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Lorem ipsum dolor sit amet consecte.</span>
                        </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <button className="px-6 py-3 shikam rounded-full bg-white text-shikam-normal mt-6 shadow-md">Découvrir</button>
                  </CardFooter>
              </div>
          </div>
      </Card>  
      <Card className="h-full lg:justify-self-start bg-shikam-normal shadow-lg rounded-lg flex-col relative overflow-hidden">
          <div className="max-w-xs">
              <div className="relative flex flex-col h-full p-5">
                  <div className="absolute top-0 right-5">
                      <div className="text-xs inline-flex font-semibold bg-green-100 text-green-600 rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Most Popular</div>
                  </div>
                  <CardHeader className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
                      <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">Small Business</h3>
                      <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">$</span><span className="text-4xl text-indigo-50">179</span></div>
                      <div className="text-indigo-200">Billed Yearly. Perfect for small businesses</div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
                        <li className="flex items-center">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Lorem ipsum dolor sit amet consecte.</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Lorem ipsum dolor sit amet consecte.</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Lorem ipsum dolor sit amet consecte.</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Lorem ipsum dolor sit amet consecte.</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Lorem ipsum dolor sit amet consecte.</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Lorem ipsum dolor sit amet consecte.</span>
                        </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <button className="px-6 py-3 shikam rounded-full bg-white text-shikam-normal mt-6 shadow-md">Découvrir</button>
                  </CardFooter>
              </div>
          </div>
      </Card>   
    </div>
    </section> */
  )
}

export default PricingWebSite;