interface LogoProps {
  footer?: boolean
}

export default function Logo({ footer }: LogoProps) {
  return (
    <a href="/" className="flex items-center gap-3 group">
      <div className={`${footer ? 'w-10 h-10' : 'w-12 h-12'} flex-shrink-0`}>
        {/* Logo Icon - Simplified version based on PDF description */}
        <svg 
          viewBox="0 0 100 100" 
          className={footer ? 'text-white' : 'text-primary-950'}
          fill="currentColor"
        >
          {/* Person/Network Icon */}
          <circle cx="50" cy="35" r="12" />
          <path d="M50 50 L50 75 M40 60 L50 50 L60 60" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round"/>
          <circle cx="25" cy="25" r="6" opacity="0.7"/>
          <circle cx="75" cy="25" r="6" opacity="0.7"/>
          <circle cx="25" cy="75" r="6" opacity="0.7"/>
          <circle cx="75" cy="75" r="6" opacity="0.7"/>
          <line x1="50" y1="35" x2="25" y2="25" strokeWidth="2" stroke="currentColor" opacity="0.4"/>
          <line x1="50" y1="35" x2="75" y2="25" strokeWidth="2" stroke="currentColor" opacity="0.4"/>
        </svg>
      </div>
      <div>
        <div className={`font-bold tracking-tight ${footer ? 'text-white text-lg' : 'text-primary-950 text-xl'}`}>
          HRSolutionMart
        </div>
        <div className={`text-xs ${footer ? 'text-gray-300' : 'text-gray-600'} uppercase tracking-wider`}>
          Finding, Connecting, Building Success
        </div>
      </div>
    </a>
  )
}