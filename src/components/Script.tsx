import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/groups/products/script',
    name: 'Script installation',
    description: 'In the case of web messenger, knowledgebase, popups, you have to install some scripts on your website code.',
  },
  {
    href: '/groups/products/exm',
    name: 'Employee Experience Management',
    description:
      'Employee Experience Management',
  },
]

export function Script() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="script">
      
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((script) => (
          <div key={script.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {script.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {script.description}
            </p>
            <p className="mt-4">
              <Button href={script.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
