
function Herosection(){
    return (
        <>
        <div className="flex justify-center ">
            <h1 className=" w-130 font-bold text-[#FFFFFF] text-4xl absolute top-65  leading-12">Down to Earth travel guides for the do-it-yourself traveller</h1>
            <p className=" w-90 absolute top-95 font-normal text-white text-2xl text-center">Your in-depth planning resource for adventure travel</p>
            <button className=" w-50 h-10 absolute top-120 rounded-xl bg-yellow-500 font-bold ">SUBSCRIBE FOR TIPS</button>
        </div>
        

        <div className=" flex gap-13  w-full h-50 absolute top-151 bg-[#212c41] text-white items-center px-4">
         <div className="flex flex-col items-center gap-2">
              <div>
            <img src="/founder.jpg" className="w-32 h-32 rounded-full object-cover"/>
           </div>
           <div className="flex flex-col items-center">
                <span className="font-bold">Marek Bron</span>
                <p>Founder</p>
           </div>
         </div>
            <div className="w-120 relative">
              <p className="mb-4"><span className="font-bold">Welcome!</span>Over a decade ago I set Off on a career break that never ended. I now hop around the globe bringing you the most in-depth travel guides. Whether it's for a bite-size adventure or that epic once-in-a-lifetime trip, you can start planning right here!</p>
              <button className="w-30 h-10 rounded-xl font-bold bg-white text-black">ABOUT</button>  
            </div>
            <div  className="bg-cover bg-center bg-no-repeat w-64 h-40 flex items-end p-4 " style ={{backgroundImage:`url('latestpost1.jpg')`}}>
                <p className="font-bold text-white text-center ">Java By Train: How To Travel Between Jakarta, Yogyakarta & Malang</p>
            </div>

               <div className="bg-cover bg-center bg-no-repeat w-64 h-40 flex items-end p-4 " style ={{backgroundImage:`url('/latestpost2.jpg')`}}>
                <p className="font-bold text-white text-center">Singapore On A Budget: 7 Tips for Staying Under $60 Per Day</p>

            </div>
        </div>
        </>
    )
}

export default Herosection;