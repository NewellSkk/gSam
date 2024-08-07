import {Link} from 'react-router-dom';
let Landing = ()=>{
 
    return(
     <div>
       <div className="flex flex-wrap w-full order-2  bg-cover bg-center " >
      <div className="w-full order-2 md:w-1/2 md:order-1 md:w-1/2 flex justify-center bg-cover bg-center bg-[url('https://media.istockphoto.com/id/931243836/photo/modern-apartments.jpg?s=612x612&w=0&k=20&c=Ncvxtv4JecFNLDr5xXJ6ncPoYRq60u2jm39KtN42s8c=')]">
        <h1 className='m-16 md:my-32 text-4xl md:text-5xl font-bold text-blue-950 bg-opacity-40 bg-slate-300'>GSAM Integrated,<br/> Excellent <span className='text-orange-500 font-extrabold'>Construction Solutions</span> For Your Unique Needs
         <br/>
          <Link to="/catalog" className="bg-blue-950 text-2xl text-white font-bold py-2 px-4 rounded-full hover:text-orange-500 transition duration-300">
          Catalog
         </Link> 
        </h1>
        
      </div>
      <div className='w-full order-1 md:w-1/2 md:order-2 flex justify-center bg-slate-200'>
          <img src='/logo.svg' alt='' className='bg-opacity-20 bg-slate-200 md:bg-opacity-0'></img>
        </div>
     
       </div>
   </div>
    )
  }
  export default Landing;