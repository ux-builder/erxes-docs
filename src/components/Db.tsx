import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoMongodb from '@/images/logos/mongodb.svg'
import logoRedis from '@/images/logos/redis.svg'
import logoRabbitMQ from '@/images/logos/rabbitmq.svg'
import logoElastic from '@/images/logos/elasticsearch.svg'

const db = [
  {
    href: '#',
    name: 'MongoDB 3.6+',
    description:
      '',
    logo: logoMongodb,
  },
  {
    href: '#',
    name: 'Redist 3.x+',
    description:
      '',
    logo: logoRedis,
  },
  {
    href: '#',
    name: 'RabbitMQ 3.8.x+',
    description:
      '',
    logo: logoRabbitMQ,
  },
  {
    href: '#',
    name: 'Elasticsearch',
    description:
      '',
    logo: logoElastic,
  },
]

export function Db() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
      The database is used for any erxes project.
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {db.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
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
