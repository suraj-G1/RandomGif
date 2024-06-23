import Random from './components/Random'
import Tag from './components/Tag'
export default function App() {
  return (
  <div className='w-full h-screen flex flex-col background relative overflow-hidden items-center'>
    
    
    <h1 className='bg-white rounded-lg  font-extrabold uppercase w-11/12 text-center mt-[20px] text-2xl px-10 py-2  '>Random GIF's</h1>
  
    <div className='flex flex-col relative w-full items-center'>
      <Random/>
      <Tag/>
    </div>
  </div>
  )
}
