
function Navbar(){
    return(
        <>
        
 <div className="w-full h-screen bg-cover bg-no-repeat  relative" style ={{backgroundImage:`url('/background.jpg')`}}>
        <div className="bg-black/45 w-full h-screen">
<div className="flex absolute top-5 text-[#FFFFFF] font-bold gap-x-4">
           <img  src="/logo.webp" className="invert w-70 pl-35 "/>
           <div className="flex gap-x-10 pl-95">
           <a href="#" className="">DESTINATIONS<img src="/inverted.svg" className="invert absolute left-200" /></a>
           <a href="#" className="">TOPICS <img src="/inverted.svg" className="invert absolute left-225"/></a>
           <a href="#" className="">ABOUT</a>
                                <div class="w-px h-5 absolute  left-250 rounded-xs bg-yellow-300 text-center"></div>

           <a href="#" className="">THE BOOK</a>
           <a href="#" className="">VLOG</a>
           <a href="#" className=""><img src="/search.svg" class="invert" /></a>

           </div>
           
        </div>
        
        </div>
        
        </div>
      
       
        </>
    )
}

export default Navbar;