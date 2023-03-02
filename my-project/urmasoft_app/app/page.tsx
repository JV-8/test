import { Inter } from 'next/font/google'
import React from 'react'
import { Layout } from './src/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <React.Fragment>
        <div className='container mx-auto  border-x-white shadow-xl  rounded-xl  border-radius: 40px shadow-white'>
        <h1 className=" text-4xl font-bold text-slate-200 text-center py-4 mb-8" style={{marginTop: '50px'}}>URMASOFT</h1>
        </div >
        <div className="flex flex-full space-y-4 ...">
        <div></div>
        <div></div>
        <div>
          
        </div>
        <div className='container  mx-auto'>
          <h2 className="text-3xl text-grey-500 font-bold text-center mb-8 p-4">Inovatīvi aizsardzības un drošības risinājumi</h2></div>
        <div>
        </div>
        </div>
        <div className="container mx-auto id=1 flex flex-full  text-center rounded-xl  m-5 p-5 shadow-inner shadow-slate-50 ">
          <div className="w-full md:w-100 lg:w-100 rounded-3xl  bg-zinc-400">
            <h2 className="text-2xl py-4 font-bold mb-2">Inovatīvi aizsardzības un drošības risinājumi</h2>
            <div className="flex flex-col md:flex-row">
              <p className="  mb-4 py-6 ">Urmasoft ir jauna start-up kompānija ar mērķi darboties militārajā aizsardzībā, veidot vieglākus un efektīvākus mūsdienu risinājumus taktiskajām operācijām.</p>
              <img src="https://p0.pikist.com/photos/269/122/manhattan-monitor-binary-binary-system-computer-binary-code-one-null-programming.jpg" alt="Image 1" className=" mb-4 p-4" />
            </div>
          </div>
        </div>
        <div className="container mx-auto id=2 flex flex-full  text-center rounded-xl  m-5 p-5 shadow-inner shadow-slate-50 ">
            <div className="w-full md:w-100 lg:w-100 rounded-3xl  bg-stone-400">
              <h2 className="text-2xl  py-4 font-bold mb-2">Izstrādāts Latvijā</h2>
              <div className="flex flex-col md:flex-row">
                <img src="https://img.techwallacdn.com/375/clsd/getty/4c2dfa0e25044a97800972b17fa805b0.jpg" alt="Image 2" className=" mb-4 p-4 " />
                <p className="mb-4 py-6  ">Urmasoft atšķiras ar to, ka mūsu sistēmas tiek veidotas šeit pat Latvijā ar latviešu programmētājiem un izstrādātājiem, kas veicinātu iekšzemes kopprodukta pieaugumu. Nereti līdz šim Latvijas militārajā jomā tiek iepirktas ārzemju ražotas sistēmas, kas ne vienmēr atbilst tam, kas nepieciešams mūsu militārajām vajadzībām.</p>
              </div>
            </div>
        </div>
        <div className="container id=3 flex flex-full  text-center mx-auto m-5 p-5 rounded-xl  shadow-inner shadow-slate-50">
          <div className=" w-full md:w-100 rounded-3xl  lg:w-100 bg-sky-800">
              <h2 className="text-2xl py-4 font-bold mb-2">Modernizēta TOC sistēma</h2>
              <div className="flex flex-col md:flex-row">
                <p className="mb-4 py-6 ">Latvijā ražots taktiskais operāciju centrs jeb TOC sistēma. Urmasoft TOC sistēma apvieno kaujas plānošanas dalībniekus vienotā sistēmā, lai ērti un efektīvi jebkādos apstākļos izveidotu un uzturētu kaujas operāciju centru.</p>
                <img src="http://syslab.lumii.lv/images/stories/pict3.jpg" alt="Image 3" className=" mb-4 p-4" />
              </div>
            </div>
        </div>
        <div className="container id=4 flex flex-full text-center mx-auto p-5 m-5 rounded-xl  shadow-inner shadow-slate-50">
            <div className="w-full md:w-100 lg:w-100 rounded-3xl  bg-slate-500 ">
                <h2 className="text-2xl py-4 font-bold mb-2">Pielāgojama sistēma</h2>
                <div className="flex flex-col md:flex-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuk-p-5__sBRXxhLI9gHkrANOP-c2O7bYI7iWuIDl7vB3cH1-sznlzrCKscmRwNDZOYA&usqp=CAU" alt="Image 4" className=" mb-4 p-4" />
                  <p className="mb-4 py-6 ">Urmasoft taktiskais operāciju centrs var tikt pielāgots pēc jebkura pasūtītāja vēlmēm, mēroga un situācijas, lai strādātu pēc iespējas efektīvāk.</p>
      
                </div>
            </div>
        </div>
       
      
      
      
      </React.Fragment>
    </Layout>
  )
}

