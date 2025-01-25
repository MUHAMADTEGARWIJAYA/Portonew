import foto from '../assets/images/foto header (1).jpeg'


const Header = () => {

  

return (
  // Container 
        <div className="min-h-screen bg-gray-900 flex justify-center items-center gap-16">
            {/* text */}
            <div className="bg-gray-900 max-w-xl h-80 ">
            <h1 className="py-4 px-4 text-white font-extrabold text-4xl">MUHAMAD TEGAR WIJAYA</h1>
                <div className="py-4 px-4 bg-gray-900 max-w-sm">
                
                <h2 className="text-white text-3xl font-semibold">Frontend Developer</h2>
                <p className="text-white font">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iusto libero, quo ratione porro veritatis ea nesciunt voluptatibus qui, assumenda delectus aliquid fuga dicta exercitationem ipsum laudantium voluptates laborum esse?
               </p>
               </div>
            </div>

            { /* foto image  */}
            <div className="bg-white max-w-xl h-48">
                 <img 
                 src={foto}
                  alt=""
                  className='w-52 h-52'
                  />
            </div>
            <hr className="my-4 border-t border-gray-300" />


        </div>
)

}

export default Header;