import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div div className='bg-blue-400'>
       <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            < Link to='/'>
             <h1 className='font-bold'>Blue Wave</h1>
             </Link>
             <ul className='flex gap-4'>
                <Link Link to='/'>
                  <li>Home</li>
                </Link>  
                < Link to='/about'>
                  <li>About Us</li>
                </Link>
                <li>Blog</li>
                <li>Services</li>
                < Link to='/sign-in'> 
                   <li>Sign In</li>
                </Link>
                   
                
             </ul>
        </div>
    </div>
  )
}
