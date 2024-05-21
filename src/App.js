import './App.css';
import Building from './Building';
import {projects} from './buildings';

let Exp = ()=>{
  let disp= projects.map((proj,index)=>{
    return(
      <Building key={index} name={proj.name} design={proj.design} construction={proj.construction} img1={proj.img1}/>
    )
  })

  return(
   <div>
     <div className='flex flex-wrap w-auto order-2' >
    <div className='w-full order-2 md:w-1/2 md:order-1 bg-neutral-100 w-1/2 flex justify-center'>
      <h1 className='m-16 md:my-32 text-4xl md:text-5xl font-bold text-blue-950'>GSAM Integrated,<br/> Excellent <span className='text-orange-500 font-extrabold'>Construction Solutions</span> For Your Unique Needs</h1>
     
    </div>
    <div className='w-full order-1 md:w-1/2 md:order-2 '>
      <img alt='img' className='w-full h-full object-cover' src='https://media.istockphoto.com/id/931243836/photo/modern-apartments.jpg?s=612x612&w=0&k=20&c=Ncvxtv4JecFNLDr5xXJ6ncPoYRq60u2jm39KtN42s8c='>
      </img>
    </div>
  </div>
   <div className='flex flex-wrap w-full order-3'>
        
   {disp}
 </div>
 </div>
  )
}
 
let App = () => {

  return (
    <div className='w-full'>
      {/*--- header */}
      <div className='bg-orange-300 flex justify-center w-auto'>
        <img src='/logo.svg' alt='' className='h-96'></img>
      </div>
      {/* /header */}
   
     <Exp/>
    </div>
  )
}

export default App;
