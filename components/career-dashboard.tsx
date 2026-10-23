'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleHelp,
  FileText,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Upload,
  UserRound,
  UsersRound,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'My Jobs', icon: BriefcaseBusiness, count: 12 },
  { label: 'Career Coach', icon: GraduationCap, count: 3 },
  { label: 'Conversations', icon: MessageSquare },
]

const jobs = [
  { company: 'Notion', initials: 'N', color: 'bg-neutral-900', title: 'Staff Data Scientist', location: 'San Francisco, CA · Hybrid', salary: '$300K – $350K', match: 96, reason: 'Strong match across your leadership, experimentation, and product analytics experience.', tags: ['Product analytics', 'Experimentation'], owner: 'Maya Chen' },
  { company: 'Vercel', initials: '▲', color: 'bg-black', title: 'Principal Data Scientist', location: 'Remote · US', salary: '$310K – $365K', match: 91, reason: 'Your platform analytics background aligns with the team’s highest-priority needs.', tags: ['Platform', 'SQL'], owner: 'Jordan Lee' },
  { company: 'Figma', initials: 'F', color: 'bg-gradient-to-br from-pink-400 to-orange-400', title: 'Staff Product Analyst', location: 'San Francisco, CA · On-site', salary: '$285K – $330K', match: 88, reason: 'Excellent domain fit. One gap: design systems research exposure.', tags: ['Product strategy', 'Research'], owner: 'Priya Shah' },
]

function Logo() {
  return <div className="flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.02em]"><div className="flex size-7 items-center justify-center rounded-[8px] bg-[#141414] text-[13px] font-bold text-white">a</div><span>atlas<span className="text-muted-foreground">/career</span></span></div>
}

function Sidebar({ active, setActive }: { active: string; setActive: (value: string) => void }) {
  return <aside className="flex w-[236px] shrink-0 flex-col border-r border-[#e9e9e7] bg-[#fbfbfa] px-4 py-5">
    <Logo />
    <div className="mt-9 flex items-center gap-3 rounded-xl border border-[#e7e7e4] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      <div className="flex size-9 items-center justify-center rounded-full bg-[#e9efff] text-xs font-semibold text-[#4b66b1]">AM</div>
      <div className="min-w-0 flex-1"><p className="truncate text-[13px] font-semibold">Alex Morgan</p><p className="truncate text-[11px] text-muted-foreground">Staff Data Scientist</p></div><ChevronDown className="size-3.5 text-muted-foreground" />
    </div>
    <nav className="mt-8 flex flex-col gap-1">
      <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#a0a09b]">Workspace</p>
      {navItems.map((item) => { const Icon = item.icon; const selected = active === item.label; return <button key={item.label} onClick={() => setActive(item.label)} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors ${selected ? 'bg-[#eeeeec] font-semibold text-[#191919]' : 'text-[#686864] hover:bg-[#f0f0ee]'}`}><Icon className="size-[16px]" />{item.label}{item.count && <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-muted-foreground shadow-sm">{item.count}</span>}</button> })}
    </nav>
    <div className="mt-8 flex flex-col gap-1"><p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#a0a09b]">Account</p><button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] text-[#686864] hover:bg-[#f0f0ee]"><UserRound className="size-[16px]" />Career profile</button><button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] text-[#686864] hover:bg-[#f0f0ee]"><Settings2 className="size-[16px]" />Settings</button></div>
    <div className="mt-auto rounded-xl bg-[#f0f0ee] p-3.5"><div className="mb-2 flex items-center gap-2 text-[12px] font-semibold"><Sparkles className="size-3.5" />Agent status</div><div className="flex items-center gap-2 text-[11px] text-muted-foreground"><span className="size-1.5 rounded-full bg-emerald-500" />Actively working for you</div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#dededb]"><div className="h-full w-[72%] rounded-full bg-[#202020]" /></div><p className="mt-2 text-[10px] text-muted-foreground">12 opportunities reviewed today</p></div>
  </aside>
}

function Header({ active }: { active: string }) { return <header className="flex h-[76px] items-center justify-between border-b border-[#ececea] px-9"><div><p className="text-[11px] font-medium text-muted-foreground">Wednesday, October 22, 2026</p><h1 className="mt-1 text-[21px] font-semibold tracking-[-0.03em]">{active === 'Overview' ? 'Good morning, Alex' : active}</h1></div><div className="flex items-center gap-3"><button className="rounded-lg p-2.5 text-muted-foreground hover:bg-[#f3f3f1]"><Search className="size-[17px]" /></button><button className="relative rounded-lg p-2.5 text-muted-foreground hover:bg-[#f3f3f1]"><Bell className="size-[17px]" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#e36b4e]" /></button><div className="ml-1 size-8 rounded-full bg-[#e9efff] text-center text-[11px] font-semibold leading-8 text-[#4b66b1]">AM</div></div></header> }

function MatchRing({ match }: { match: number }) { return <div className="relative flex size-[55px] items-center justify-center rounded-full" style={{ background: `conic-gradient(#252525 ${match * 3.6}deg, #e9e9e6 0deg)` }}><div className="flex size-[45px] items-center justify-center rounded-full bg-white text-[13px] font-semibold">{match}%</div></div> }

function Workflow() { const steps = ['Discovered', 'Matched', 'AI Screening', 'Recruiter Review', 'Interview']; return <div className="mt-5 flex items-center">{steps.map((step, i) => <div key={step} className="flex flex-1 items-center"><div className="flex flex-col items-center gap-2"><div className={`flex size-6 items-center justify-center rounded-full text-[10px] font-semibold ${i < 3 ? 'bg-[#d9f5df] text-[#245c36]' : 'border border-[#d8d8d4] bg-white text-muted-foreground'}`}>{i < 3 ? <Check className="size-3" /> : i + 1}</div><span className={`whitespace-nowrap text-[10px] ${i < 3 ? 'font-medium text-[#353532]' : 'text-muted-foreground'}`}>{step}</span></div>{i < steps.length - 1 && <div className={`mx-2 mb-5 h-px flex-1 ${i < 2 ? 'bg-[#242424]' : 'bg-[#dededb]'}`} />}</div>)}</div> }

function JobCard({ job, onApprove }: { job: typeof jobs[number]; onApprove: () => void }) { const [approved, setApproved] = useState(false); return <article className="rounded-xl border border-[#e6e6e3] bg-white p-5 transition-shadow hover:shadow-[0_5px_18px_rgba(0,0,0,0.05)]"><div className="flex gap-4"><div className={`flex size-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white ${job.color}`}>{job.initials}</div><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-3"><div><div className="flex items-center gap-2"><h3 className="text-[15px] font-semibold">{job.title}</h3><ShieldCheck className="size-3.5 text-emerald-600" /></div><p className="mt-1 text-[12px] text-muted-foreground">{job.company} · {job.location}</p></div><MatchRing match={job.match} /></div><div className="mt-4 flex items-center gap-3 text-[12px]"><span className="font-medium">{job.salary}</span><span className="text-[#d0d0cc]">•</span><span className="text-muted-foreground">Verified compensation</span></div><p className="mt-3 text-[12px] leading-5 text-[#62625e]"><span className="font-semibold text-[#343431]">Why this matches: </span>{job.reason}</p><div className="mt-3 flex flex-wrap gap-2">{job.tags.map(tag => <span key={tag} className="rounded-md bg-[#f2f2ef] px-2 py-1 text-[10px] text-[#5d5d59]">{tag}</span>)}</div><div className="mt-5 flex items-center justify-between border-t border-[#efefed] pt-4"><div className="flex items-center gap-2 text-[11px] text-muted-foreground"><div className="flex size-5 items-center justify-center rounded-full bg-[#f0e7dd] text-[8px] font-semibold text-[#8e6548]">{job.owner.split(' ').map(x => x[0]).join('')}</div>Hiring owner: <span className="font-medium text-[#454542]">{job.owner}</span></div><button onClick={() => { setApproved(true); onApprove() }} className={`rounded-lg px-3.5 py-2 text-[11px] font-semibold transition-colors ${approved ? 'bg-emerald-50 text-emerald-700' : 'bg-[#d9f5df] text-[#245c36] hover:bg-[#383836]'}`}>{approved ? 'Application approved' : 'Review & approve'}<ArrowRight className="ml-1.5 inline size-3" /></button></div></div></div><Workflow /></article> }

export default function CareerDashboard() { const [active, setActive] = useState('Overview'); const [approved, setApproved] = useState(0); return <div className="flex min-h-screen bg-white text-[#1d1d1b]"><Sidebar active={active} setActive={setActive} /><div className="min-w-0 flex-1"><Header active={active} /><main className="mx-auto max-w-[1220px] px-9 py-8"><div className="mb-8 flex items-end justify-between"><div><p className="mb-2 flex items-center gap-2 text-[12px] font-medium text-muted-foreground"><span className="size-1.5 rounded-full bg-emerald-500" />Your agent is up to date</p><h2 className="text-[28px] font-semibold tracking-[-0.04em]">Your career, in motion.</h2><p className="mt-2 max-w-xl text-[13px] text-muted-foreground">A transparent view of what your AI agents are working on and where you can make the next move.</p></div><button className="flex items-center gap-2 rounded-lg border border-[#dfdfdc] bg-white px-3.5 py-2.5 text-[12px] font-medium shadow-sm hover:bg-[#f8f8f6]"><Activity className="size-3.5" />View agent activity</button></div><div className="grid grid-cols-[1fr_310px] gap-5"><section className="flex flex-col gap-5"><div className="grid grid-cols-3 gap-3"><div className="rounded-xl border border-[#e7e7e4] bg-[#fbfbfa] p-4"><div className="flex items-center justify-between"><span className="text-[11px] text-muted-foreground">Strong matches</span><Target className="size-4 text-muted-foreground" /></div><p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">12</p><p className="mt-1 text-[10px] text-emerald-700">+4 since Monday</p></div><div className="rounded-xl border border-[#e7e7e4] bg-[#fbfbfa] p-4"><div className="flex items-center justify-between"><span className="text-[11px] text-muted-foreground">Applications</span><Gauge className="size-4 text-muted-foreground" /></div><p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{approved + 3}</p><p className="mt-1 text-[10px] text-muted-foreground">2 awaiting your review</p></div><div className="rounded-xl border border-[#e7e7e4] bg-[#fbfbfa] p-4"><div className="flex items-center justify-between"><span className="text-[11px] text-muted-foreground">Profile strength</span><Zap className="size-4 text-muted-foreground" /></div><p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">86%</p><p className="mt-1 text-[10px] text-amber-700">Add 2 achievements</p></div></div><div className="flex items-center justify-between"><div><h2 className="text-[17px] font-semibold tracking-[-0.02em]">Recommended for you</h2><p className="mt-1 text-[12px] text-muted-foreground">Ranked by semantic fit and your must-haves</p></div><button className="flex items-center gap-1 text-[12px] font-medium text-muted-foreground hover:text-foreground">View all jobs <ArrowRight className="size-3.5" /></button></div>{jobs.map(job => <JobCard key={job.title} job={job} onApprove={() => setApproved(value => value + 1)} />)}</section><aside className="flex flex-col gap-5"><div className="rounded-xl border border-[#e7e7e4] bg-[#fbfbfa] p-5"><div className="flex items-center justify-between"><h3 className="text-[13px] font-semibold">Agent activity</h3><button className="text-muted-foreground"><MoreHorizontal className="size-4" /></button></div><div className="mt-5 flex flex-col gap-5">{[{ icon: Search, title: 'Reviewed 24 new roles', detail: 'Found 4 strong matches', time: '8m' }, { icon: MessageSquare, title: 'Screening complete', detail: 'Notion · Staff Data Scientist', time: '42m' }, { icon: UsersRound, title: 'Recruiter replied', detail: 'Jordan Lee at Vercel', time: '2h' }].map(item => { const Icon = item.icon; return <div key={item.title} className="flex gap-3"><div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white text-muted-foreground shadow-[0_1px_3px_rgba(0,0,0,0.06)]"><Icon className="size-3.5" /></div><div className="min-w-0 flex-1"><p className="text-[11px] font-medium">{item.title}</p><p className="mt-0.5 truncate text-[10px] text-muted-foreground">{item.detail}</p></div><span className="text-[10px] text-[#a0a09b]">{item.time}</span></div> })}</div><button className="mt-6 w-full rounded-lg border border-[#dededb] py-2 text-[11px] font-medium text-muted-foreground hover:bg-white">See all activity</button></div><div className="rounded-xl border border-[#e7e7e4] bg-white p-5"><div className="flex items-center gap-2"><div className="flex size-7 items-center justify-center rounded-lg bg-[#f3f0ff] text-[#6957b3]"><FileText className="size-3.5" /></div><div><h3 className="text-[13px] font-semibold">Career profile</h3><p className="text-[10px] text-muted-foreground">Last updated 2 days ago</p></div></div><div className="mt-5 flex items-center justify-between"><span className="text-[11px] text-muted-foreground">Profile completeness</span><span className="text-[12px] font-semibold">86%</span></div><div className="mt-2 h-1.5 rounded-full bg-[#ededeb]"><div className="h-full w-[86%] rounded-full bg-[#282826]" /></div><p className="mt-3 text-[11px] leading-4 text-muted-foreground">Add 2 recent achievements to improve your matches.</p><button className="mt-4 flex items-center gap-1 text-[11px] font-semibold">Edit profile <ArrowRight className="size-3" /></button></div><div className="rounded-xl bg-[#1f1f1d] p-5 text-white"><div className="flex items-center gap-2 text-[12px] font-semibold"><Sparkles className="size-3.5" />Career Coach</div><p className="mt-3 text-[12px] leading-5 text-[#b9b9b2]">You have 3 new recommendations based on your goals.</p><button className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-white">Explore recommendations <ArrowRight className="size-3" /></button></div></aside></div></main></div></div> }
