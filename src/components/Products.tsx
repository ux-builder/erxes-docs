import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/groups/products',
    name: 'Products',
    description: '',
  },
  {
    href: '/groups',
    name: 'Industries',
    description:
      '',
  },
  {
    href: '/groups/team',
    name: 'Teams',
    description:
      '',
  },
]

export function Products() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="products">
      
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((products) => (
          <div key={products.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {products.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {products.description}
            </p>
            <p className="mt-4">
              <Button href={products.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

