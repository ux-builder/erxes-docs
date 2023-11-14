import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/authentication/graphql/intro',
    name: 'Animated Loader',
    description: 'Custom styled loaders for many kind of use.',
  },
  {
    href: '/authentication/graphql/object',
    name: 'Attachment',
    description: 'Add any type of attachment or attachments with preview.',
  },
  {
    href: '/authentication/graphql/input',
    name: 'Avatar Upload',
    description:
      'Upload an avatar by clicking on them.',
  },
  {
    href: '/authentication/graphql/enu',
    name: 'Box',
    description:
      'Build vertically collapsing boxes.',
  },
  {
    href: '/authentication/graphql/scalars',
    name: 'Breadcrumb',
    description:
      'Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.',
  },
  {
    href: '/authentication/graphql/queries',
    name: 'Buttons',
    description:
      'Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.',
  },
  {
    href: '/authentication/graphql/mutations',
    name: 'Chip',
    description:
      'Examples',
  },
  {
    href: '/authentication/graphql/intro',
    name: 'Collapse Content',
    description: 'Simple',
  },
  {
    href: '/authentication/graphql/object',
    name: 'Data with loader',
    description: 'Loading',
  },
  {
    href: '/authentication/graphql/input',
    name: 'Empty content',
    description:
      'Give different contents with empty content component.',
  },
  {
    href: '/authentication/graphql/enu',
    name: 'Empty State',
    description:
      'Empty state with icon and text props.',
  },
  {
    href: '/authentication/graphql/scalars',
    name: 'Error message',
    description:
      'Provide error message to indicate an error that occurred.',
  },
  {
    href: '/authentication/graphql/queries',
    name: 'File Preview',
    description:
      'Preview different type of files.',
  },
  {
    href: '/authentication/graphql/mutations',
    name: 'Filterable List',
    description:
      'Example',
  },
  {
    href: '/authentication/graphql/intro',
    name: 'Filter by Params',
    description: 'Example',
  },
  {
    href: '/authentication/graphql/object',
    name: 'Header Description',
    description: 'Expandable description, shows image and description when expanded but just title when its not.',
  },
  {
    href: '/authentication/graphql/input',
    name: 'Help Popover',
    description:
      'See pop over by hovering over it, click on it, and focus on it.',
  },
  {
    href: '/authentication/graphql/enu',
    name: 'Icon',
    description:
      'To display desired icon write its name to icon prop.',
  },
  {
    href: '/authentication/graphql/scalars',
    name: 'Info',
    description:
      'Provide contextual messages for typical user actions with info messages.',
  },
  {
    href: '/authentication/graphql/queries',
    name: 'Label',
    description:
      'Style',
  },
  {
    href: '/authentication/graphql/mutations',
    name: 'Modifiable List',
    description:
      'Options',
  },
  {
    href: '/authentication/graphql/intro',
    name: 'Name card',
    description: 'Username',
  },
  {
    href: '/authentication/graphql/object',
    name: 'Progress Bar',
    description: 'Provide progress bar to check work progress.',
  },
  {
    href: '/authentication/graphql/input',
    name: 'Sort Handler',
    description:
      'Simple sort handler.',
  },
  {
    href: '/authentication/graphql/enu',
    name: 'Spinners',
    description:
      'Spinners can be used to show the loading state in your projects.',
  },
  {
    href: '/authentication/graphql/scalars',
    name: 'Steps',
    description:
      'Example',
  },
  {
    href: '/authentication/graphql/queries',
    name: 'SubMenu',
    description:
      'Example',
  },
  {
    href: '/authentication/graphql/mutations',
    name: 'Table',
    description:
      'Bordered',
  },
  {
    href: '/authentication/graphql/enu',
    name: 'Tabs',
    description:
      'Dynamic tabbed interfaces.',
  },
  {
    href: '/authentication/graphql/scalars',
    name: 'Tags',
    description:
      'Use _id and name props for connecting with other function.',
  },
  {
    href: '/authentication/graphql/queries',
    name: 'Text Divider',
    description:
      'Add text divider with text and date to divide contents.',
  },
  {
    href: '/authentication/graphql/mutations',
    name: 'Text info',
    description:
      'Types',
  },
  {
    href: '/authentication/graphql/enu',
    name: 'Timer',
    description:
      'Click any button to check actions.',
  },
  {
    href: '/authentication/graphql/scalars',
    name: 'Tip',
    description:
      'Tip text',
  },
  {
    href: '/authentication/graphql/queries',
    name: 'Toggle',
    description:
      'Example',
  },
  {
    href: '/authentication/graphql/mutations',
    name: 'Uploader',
    description:
      'Multiple',
  },
]

export function Component() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="enums">
      
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-2">
        {guides.map((enums) => (
          <div key={enums.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {enums.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-200">
              {enums.description}
            </p>
            <p className="mt-2">
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
