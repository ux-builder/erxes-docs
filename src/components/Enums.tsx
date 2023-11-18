import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/authentication/graphql/intro',
    name: 'Introduction',
    description: '',
  },
  {
    href: '/authentication/graphql/object',
    name: 'Objects',
    description: '',
  },
  {
    href: '/authentication/graphql/input',
    name: 'Input objects',
    description: '',
  },
  {
    href: '/authentication/graphql/enu',
    name: 'Enums',
    description: '',
  },
  {
    href: '/authentication/graphql/scalars',
    name: 'Scalars',
    description: '',
  },
  {
    href: '/authentication/graphql/queries',
    name: 'Queries',
    description: '',
  },
  {
    href: '/authentication/graphql/mutations',
    name: 'Mutations',
    description: '',
  },
]

export function Enums() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="enums">
      
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((enums) => (
          <div key={enums.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {enums.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {enums.description}
            </p>
            <p className="mt-4">
              <Button href={enums.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
