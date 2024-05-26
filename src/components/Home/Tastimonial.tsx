import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <p className="text-center text-4xl  text-red-700 font-bold mb-8 uppercase">
          #Donner Requester Said
        </p>
        <p>
          The most valuable testimonials are ones that have inspired us make some
        </p>
      </div>
      <div className="md:lg:container my-12 mx-auto px-0 md:lg:px-6">
        {/* Section: Design Block */}
        <section className="mb-32 text-center lg:text-left">
          <div className="py-12 md:px-6 lg:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid  items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                      Anna Smith
                    </h2>
                    <p className="mb-4 font-semibold">Fashion Designer & Model</p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      &quot;This platform saved my loved one&apos;s life. Grateful
                      beyond words!&quot;
                    </p>
                    <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                      &quot; I&apos;ll never forget the day when my family faced
                      a medical emergency, and we desperately needed blood for
                      my father&apos;s surgery. It was a race against time, and
                      finding blood donors seemed like an impossible task.
                      That&apos;s when we stumbled upon this platform. With just
                      a few clicks, we were connected with generous donors who
                      selflessly came forward to help. Thanks to their kindness
                      and the efficiency of this platform, we were able to
                      secure the blood my father needed just in time. It&apos;s
                      not an exaggeration to say that this platform saved my
                      father&apos;s life, and we&apos;ll forever be grateful for
                      the support and hope it provided during our darkest hour.
                      &ldquo;
                    </p>
                    <ul className="flex justify-center lg:justify-start mt-5">
                      {[...Array(5)].map((_, index) => (
                        <li key={index}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-red-600 dark:text-primary-400"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <div className="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20">
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/080.jpg"
                      alt="image"
                      width={1200}
                      height={1200}
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
    </div>
  );
};

export default Testimonial;
