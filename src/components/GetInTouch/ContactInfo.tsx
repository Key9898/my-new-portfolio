import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactInfo() {
    return (
        <div className="relative px-6 pb-16 sm:px-10 sm:pb-20 lg:static lg:px-8 lg:py-24 lg:pt-0">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Get in touch</h2>
                <p className="mt-6 text-lg/8 text-gray-400">
                    I'm always open to discussing new web development projects or collaboration opportunities. Whether you have a question or a project in mind, let's build something great together.
                </p>
                <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                            <span className="sr-only">Address</span>
                            <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                        </dt>
                        <dd>
                            Bangkok, Thailand
                        </dd>
                    </div>
                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                            <span className="sr-only">Telephone</span>
                            <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                        </dt>
                        <dd>
                            <a href="tel:+66943018336" className="hover:text-white">
                                +66 94-301-8336
                            </a>
                        </dd>
                    </div>
                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                            <span className="sr-only">Email</span>
                            <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                        </dt>
                        <dd>
                            <a href="mailto:key.w.aung.dev@gmail.com?subject=Contact from Portfolio" className="hover:text-white">
                                key.w.aung.dev@gmail.com
                            </a>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
