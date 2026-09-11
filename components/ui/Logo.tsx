interface LogoProps {
  footer?: boolean
}

export default function Logo({ footer }: LogoProps) {
  return (
    <a href="/" className="flex items-center gap-3 group">
      <div className={`${footer ? 'w-10 h-10' : 'w-12 h-12'} flex-shrink-0`}>
        <img
          src="/logo.svg"
          alt="HRSolutionsMart logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <div className={`font-bold tracking-tight ${footer ? 'text-white text-lg' : 'text-primary-950 text-xl'}`}>
          HRSolutionsMart
        </div>
        <div className={`text-xs ${footer ? 'text-gray-300' : 'text-gray-600'} uppercase tracking-wider`}>
          Finding, Connecting, Building Success
        </div>
      </div>
    </a>
  )
}