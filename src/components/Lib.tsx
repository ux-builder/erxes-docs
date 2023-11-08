import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoReact from '@/images/logos/react.svg'
import logoTypescript from '@/images/logos/typescript.svg'
import logoWebpack from '@/images/logos/webpack.svg'


const lib = [
  {
    href: '#',
    name: 'Typescript',
    description:
      'TypeScript is a popular choice for programmers accustomed to other languages with static typing, such as C# and Java.',
    logo: logoTypescript,
  },
  {
    href: '#',
    name: 'Webpack',
    description:
      'Webpack is a module bundler. Webpack can take care of bundling alongside a separate task runner.',
    logo: logoWebpack,
  },
  {
    href: '#',
    name: 'ReactJS',
    description:
      'React lets you build user interfaces out of individual pieces called components.',
    logo: logoReact,
  },
]

export function Lib() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
      Plugin UI
      </Heading>
      <p>Plugin development in UI part requires the following software prerequisites to be already installed on your computer.</p>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {lib.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
