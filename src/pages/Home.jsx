import { FotoCard } from "../componentes/FotoCard"

export default function Home() {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}>
     <FotoCard /><FotoCard /><FotoCard />
    </div>
  )
}