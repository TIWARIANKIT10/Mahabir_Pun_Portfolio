import { useEffect, useRef, useState } from 'react'
import { Element } from 'react-scroll'

const agendaData = [
  {
    id: "01",
    title: "EDUCATION REFORM",
    description: "Establishment of free quality education for all, modernized curriculum standards, and competitive teacher compensation.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  },
  {
    id: "02",
    title: "ECONOMIC GROWTH",
    description: "Targeting 1 million new jobs through small business grants and strategic foreign investment initiatives.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  },
  {
    id: "03",
    title: "PUBLIC SAFETY",
    description: "Strengthening law enforcement through community-led policing and modern crime prevention technology.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  },
  {
    id: "04",
    title: "HEALTHCARE ACCESS",
    description: "Universal coverage implementation, regional hospital construction, and reduction of essential medical costs.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  },
  {
    id: "05",
    title: "ENVIRONMENTAL PROTECTION",
    description: "Aggressive clean energy initiatives, pollution mandates, and the preservation of national green spaces.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C10 14.5 10.5 13 12 13s2 1.5 2 1.5c0 2-1 3.5-1 3.5"/></svg>
  },
  {
    id: "06",
    title: "SOCIAL EQUALITY",
    description: "Robust anti-discrimination legislation and the pursuit of inclusive policies for all citizens.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  }
]

export default function ElectionAgenda() {
  const [signatureName, setSignatureName] = useState('Mahabir')
  const [isSigned, setIsSigned] = useState(true)
  

   

  return (
    <div className="bg-white min-h-screen text-black py-14 sm:py-16 lg:py-20 px-4 sm:px-6 font-mono">
      <section id="manifesto" className="max-w-3xl mx-auto">
        
        {/* Header */}
        <header className="border-b-4 border-black pb-6 sm:pb-8 mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-2 leading-tight">
            <Element name="manifesto">The 2026 Manifesto</Element>
            
          </h1>
          <p className="text-base sm:text-lg font-medium italic">
            A Binding Commitment to the Citizens.
          </p>
        </header>

        {/* Agenda Points */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-2 bottom-0 w-px bg-black hidden sm:block"></div>

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {agendaData.map((item) => (
              <div key={item.id} className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                
                {/* ID & Icon */}
                <div className="flex-shrink-0 z-10 bg-white border-2 border-black p-2 rounded-none">
                  
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs font-bold border-b border-black mb-2 inline-block">
                    POINT {item.id}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase mt-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-700 leading-relaxed font-sans text-base sm:text-lg border-l-2 border-gray-100 pl-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Area
        <div className="mt-24 border-2 border-black p-8 sm:p-12 text-center">
          {!isSigned ? (
            <>
              <h4 className="text-xl font-black uppercase mb-6 tracking-widest">
                Endorse the Agenda
              </h4>
              <div className="flex flex-col sm:flex-row gap-0 border-2 border-black">
                <input 
                  type="text" 
                  value={signatureName}
                  onChange={(e) => setSignatureName(e.target.value)}
                  placeholder="ENTER FULL NAME" 
                  className="flex-1 px-4 py-4 text-sm font-bold focus:outline-none uppercase placeholder:text-gray-300"
                />
                <button 
                  onClick={() => signatureName.trim() && setIsSigned(true)}
                  className="bg-black text-white px-8 py-4 text-sm font-black uppercase hover:bg-gray-800 transition-colors"
                >
                  Sign Pledge
                </button>
              </div>
            </>
          ) : (
            <div className="animate-in fade-in duration-700">
              <p className="text-xs font-bold uppercase mb-4 tracking-[0.3em]">Official Endorsement</p>
              <div className="text-4xl sm:text-5xl font-serif italic border-b border-black inline-block pb-2">
                {signatureName}
              </div>
              <p className="mt-6 text-sm font-bold uppercase">
                {new Date().toLocaleDateString('en-GB')}
              </p>
            </div>
          )}
        </div> */}

        {/* <footer className="mt-12 text-[10px] text-gray-400 uppercase tracking-widest text-center">
          Digitally notarized and recorded for public accountability.
        </footer> */}
      </section>
    </div>
  )
}
