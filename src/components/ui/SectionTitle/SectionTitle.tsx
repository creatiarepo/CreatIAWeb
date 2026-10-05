import { cn } from '@/lib/utils';

interface SectionTitleProps {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({
  tag,
  title,
  highlight,
  description,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col max-w-2xl", align === 'center' ? "items-center mx-auto text-center" : "items-start text-left")}>
      {tag && (
        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-display text-sm font-semibold tracking-wide uppercase">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-cyan-400 dark:to-blue-500">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="font-body text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
