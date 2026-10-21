import React from 'react'

interface LogoProps {
  className?: string
  size?: number
  showText?: boolean
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 50,
  showText = false
}) => {
  return (
    <div className={`inline-flex flex-col items-start select-none cursor-default ${className}`}>
      <div 
        className="relative flex items-center justify-start shrink-0"
        style={{ height: size, width: 'auto' }}
      >
        {/* Light mode: dark logo */}
        <img
          src="/brand/idowu-logo-dark.png"
          alt="Synthex"
          className="h-full w-auto object-contain block dark:hidden drop-shadow-xs"
        />
        {/* Dark mode: crisp white logo */}
        <img
          src="/brand/idowu-logo-light.png"
          alt="Synthex"
          className="h-full w-auto object-contain hidden dark:block drop-shadow-xs"
        />
      </div>

      {showText && (
        <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-zinc-500 dark:text-slate-400 uppercase tracking-widest mt-2 pl-0.5">
          Web Developer
        </span>
      )}
    </div>
  )
}

export default Logo
