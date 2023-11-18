import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/authentication/reference/ui/animated',
    name: 'Animated Loader',
    description: 'Custom styled loaders for many kind of use.',
  },
  {
    href: '/authentication/reference/ui/attachment',
    name: 'Attachment',
    description: 'Add any type of attachment or attachments with preview.',
  },
  {
    href: '/authentication/reference/ui/avatar',
    name: 'Avatar Upload',
    description:
      'Upload an avatar by clicking on them.',
  },
  {
    href: '/authentication/reference/ui/box',
    name: 'Box',
    description:
      'Build vertically collapsing boxes.',
  },
  {
    href: '/authentication/reference/ui/breadcrumb',
    name: 'Breadcrumb',
    description:
      'Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.',
  },
  {
    href: '/authentication/reference/ui/buttons',
    name: 'Buttons',
    description:
      'Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.',
  },
  {
    href: '/authentication/reference/ui/chip',
    name: 'Chip',
    description:
      'Examples',
  },
  {
    href: '/authentication/reference/ui/collapse',
    name: 'Collapse Content',
    description: 'Simple',
  },
  {
    href: '/authentication/reference/ui/data',
    name: 'Data with loader',
    description: 'Loading',
  },
  {
    href: '/authentication/reference/ui/econtent',
    name: 'Empty content',
    description:
      'Give different contents with empty content component.',
  },
  {
    href: '/authentication/reference/ui/estate',
    name: 'Empty State',
    description:
      'Empty state with icon and text props.',
  },
  {
    href: '/authentication/reference/ui/error',
    name: 'Error message',
    description:
      'Provide error message to indicate an error that occurred.',
  },
  {
    href: '/authentication/reference/ui/file',
    name: 'File Preview',
    description:
      'Preview different type of files.',
  },
  {
    href: '/authentication/reference/ui/filterable',
    name: 'Filterable List',
    description:
      'Example',
  },
  {
    href: '/authentication/reference/ui/filter',
    name: 'Filter by Params',
    description: 'Example',
  },
  {
    href: '/authentication/reference/ui/header',
    name: 'Header Description',
    description: 'Expandable description, shows image and description when expanded but just title when its not.',
  },
  {
    href: '/authentication/reference/ui/help',
    name: 'Help Popover',
    description:
      'See pop over by hovering over it, click on it, and focus on it.',
  },
  {
    href: '/authentication/reference/ui/icon',
    name: 'Icon',
    description:
      'To display desired icon write its name to icon prop.',
  },
  {
    href: '/authentication/reference/ui/info',
    name: 'Info',
    description:
      'Provide contextual messages for typical user actions with info messages.',
  },
  {
    href: '/authentication/reference/ui/label',
    name: 'Label',
    description:
      'Style',
  },
  {
    href: '/authentication/reference/ui/modifiable',
    name: 'Modifiable List',
    description:
      'Options',
  },
  {
    href: '/authentication/reference/ui/namecard',
    name: 'Name card',
    description: 'Username',
  },
  {
    href: '/authentication/reference/ui/progress',
    name: 'Progress Bar',
    description: 'Provide progress bar to check work progress.',
  },
  {
    href: '/authentication/reference/ui/sort',
    name: 'Sort Handler',
    description:
      'Simple sort handler.',
  },
  {
    href: '/authentication/reference/ui/spinner',
    name: 'Spinners',
    description:
      'Spinners can be used to show the loading state in your projects.',
  },
  {
    href: '/authentication/reference/ui/steps',
    name: 'Steps',
    description:
      'Example',
  },
  {
    href: '/authentication/reference/ui/sub',
    name: 'SubMenu',
    description:
      'Example',
  },
  {
    href: '/authentication/reference/ui/table',
    name: 'Table',
    description:
      'Bordered',
  },
  {
    href: '/authentication/reference/ui/tabs',
    name: 'Tabs',
    description:
      'Dynamic tabbed interfaces.',
  },
  {
    href: '/authentication/reference/ui/tags',
    name: 'Tags',
    description:
      'Use _id and name props for connecting with other function.',
  },
  {
    href: '/authentication/reference/ui/divider',
    name: 'Text Divider',
    description:
      'Add text divider with text and date to divide contents.',
  },
  {
    href: '/authentication/reference/ui/text',
    name: 'Text info',
    description:
      'Types',
  },
  {
    href: '/authentication/reference/ui/timer',
    name: 'Timer',
    description:
      'Click any button to check actions.',
  },
  {
    href: '/authentication/reference/ui/tip',
    name: 'Tip',
    description:
      'Tip text',
  },
  {
    href: '/authentication/reference/ui/toggle',
    name: 'Toggle',
    description:
      'Example',
  },
  {
    href: '/authentication/reference/ui/uploader',
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
