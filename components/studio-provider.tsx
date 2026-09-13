'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Appointment, AppointmentStatus, initialAppointments, initialBlocks, initialClients, initialWaitlist } from '@/lib/demo-data'
type Client = (typeof initialClients)[number]
type StudioContextValue = { appointments: Appointment[]; blocks: typeof initialBlocks; clients: Client[]; waitlist: typeof initialWaitlist; addAppointment: (appointment: Omit<Appointment,'id'|'status'>) => Appointment; updateAppointment: (id:string, patch:Partial<Appointment>) => void; updateClient: (id:string, patch:Partial<Client>) => void; addBlock: (block:Omit<(typeof initialBlocks)[number],'id'>) => void }
const StudioContext = createContext<StudioContextValue|null>(null)
export function StudioProvider({ children }: { children: React.ReactNode }) {
 const [appointments,setAppointments]=useState<Appointment[]>(initialAppointments); const [blocks,setBlocks]=useState(initialBlocks); const [clients,setClients]=useState<Client[]>(initialClients); const [waitlist]=useState(initialWaitlist)
 useEffect(()=>{ const saved=window.localStorage.getItem('studio-aura-state'); if(saved){const data=JSON.parse(saved); if(data.appointments)setAppointments(data.appointments); if(data.clients)setClients(data.clients)} },[])
 useEffect(()=>{window.localStorage.setItem('studio-aura-state',JSON.stringify({appointments,clients}))},[appointments,clients])
 const value=useMemo<StudioContextValue>(()=>({appointments,blocks,clients,waitlist,addAppointment:(a)=>{const created={...a,id:`a${Date.now()}`,status:'agendado' as AppointmentStatus};setAppointments(c=>[...c,created]);setClients(c=>c.some(x=>x.phone===a.phone)?c:c.concat({id:`c${Date.now()}`,name:a.client,phone:a.phone,visits:0,lastVisit:'',nextReturn:'',notes:'',preferences:''}));return created},updateAppointment:(id,patch)=>setAppointments(c=>c.map(a=>a.id===id?{...a,...patch}:a)),updateClient:(id,patch)=>setClients(c=>c.map(x=>x.id===id?{...x,...patch}:x)),addBlock:(b)=>setBlocks(c=>[...c,{...b,id:`b${Date.now()}`}])}),[appointments,blocks,clients,waitlist])
 return <StudioContext.Provider value={value}>{children}</StudioContext.Provider>
}
export function useStudio(){const context=useContext(StudioContext);if(!context)throw new Error('useStudio deve ser usado dentro de StudioProvider');return context}
