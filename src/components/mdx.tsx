import Link from 'next/link'
import clsx from 'clsx'

import { Feedback } from '@/components/Feedback'
import { Heading } from '@/components/Heading'
import { Prose } from '@/components/Prose'

export const a = Link
export { Button } from '@/components/Button'
export { CodeGroup, Code as code, Pre as pre } from '@/components/Code'

export function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex h-full flex-col pb-10 pt-16">
      <Prose className="flex-auto">{children}</Prose>
      <footer className="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
        <Feedback />
      </footer>
    </article>
  )
}

export const h2 = function H2(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, 'level'>,
) {
  return <Heading level={2} {...props} />
}


export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base my-3 flex flex-col rounded-2xl border border-indigo-500 bg-indigo-100 p-4 leading-6 text-indigo-950 dark:border-violet-500/30 dark:bg-violet-500/5 dark:text-violet-200 dark:[--tw-prose-links-hover:theme(colors.violet.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <p className='text-lg p-0 mt-0 mb-2 font-bold text-indigo-950 dark:text-violet-200'>💡 Tip</p>
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}


export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base my-3 flex flex-col rounded-2xl border border-emerald-500 bg-emerald-100 p-4 leading-6 text-emerald-950 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links-hover:theme(colors.emerald.300)] dark:[--tw-prose-links:theme(colors.white)]">
     <p className='text-lg p-0 mt-0 mb-2 font-bold text-emerald-950 dark:text-emerald-200'>✏️ Note</p>
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}


export function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base my-3 flex flex-col rounded-2xl border border-sky-500 bg-sky-100 p-4 leading-6 text-blue-950 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-200 dark:[--tw-prose-links-hover:theme(colors.blue.300)] dark:[--tw-prose-links:theme(colors.blue)]">
     <p className='text-lg p-0 mt-0 mb-2 font-bold text-sky-950 dark:text-sky-200'>📚 Info</p>
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}


export function Caution({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base my-3 flex flex-col rounded-2xl border border-amber-500 bg-amber-20 p-4 leading-6 text-amber-950 dark:border-amber-500 dark:bg-amber-50 dark:text-amber-950 dark:[--tw-prose-links-hover:theme(colors.amber.300)] dark:[--tw-prose-links:theme(colors.amber)]">
      <p className='text-lg p-0 mt-0 mb-2 font-bold text-amber-950 dark:text-amber-200'>✋ Caution</p>
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}


export function Danger({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base my-3 flex flex-col rounded-2xl border border-red-600 bg-red-100 p-4 leading-6 text-zinc-950 dark:border-red-500/30 dark:bg-red-500/5 dark:text-red-200 dark:[--tw-prose-links-hover:theme(colors.red.300)] dark:[--tw-prose-links:theme(colors.red)]">
      <p className='text-lg p-0 mt-0 mb-2 font-bold text-red-950 dark:text-red-200'>❌ Danger</p>
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({
  children,
  sticky = false,
}: {
  children: React.ReactNode
  sticky?: boolean
}) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24',
      )}
    >
      {children}
    </div>
  )
}

export function Properties({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6">
      <ul
        role="list"
        className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
      >
        {children}
      </ul>
    </div>
  )
}

export function Property({
  name,
  children,
  type,
}: {
  name: string
  children: React.ReactNode
  type?: string
}) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              {type}
            </dd>
          </>
        )}
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}
