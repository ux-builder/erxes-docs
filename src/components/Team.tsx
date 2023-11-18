import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/messages/channels',
    name: 'Channels',
    description: 'Channel is one of the features used for the Inbox plugin only, It helps sorting the incoming information...',
  },
  {
    href: '/messages/skills',
    name: 'Skills',
    description:
      'Skill is the extent of the erxes Messenger plugin, which helps to deliver the conversations received through the erxes Messenger...',
  },
  {
    href: '/messages/response',
    name: 'Response Template',
    description:
      'Response template feature helps you to create your response templates for your everyday conversation with your customers...',
  },
]

export function Team() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="team">
      
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((team) => (
          <div key={team.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {team.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {team.description}
            </p>
            <p className="mt-4">
              <Button href={team.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
