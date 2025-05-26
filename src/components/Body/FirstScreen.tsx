function FirstSection(){
    return (
        <>
        <div className="max-w-full h-auto">
        <section className="flex flex-row items-center justify-center pt-40">
            <div className="pr-72">
            <h1 className="text-9xl font-bold text-name-color">Leonardo
            </h1>
            <h1 className="text-9xl font-bold pr-28 ">Scheidt</h1>
            {/* <h1 className="text-xl font-bold text-gray-300 opacity-60 pr-80 pt-5">Front-End Developer</h1> */}
            </div>
            
            <div>
            {/* Faço softwares que resolvem
            problemas reais */}
            <h2 className="text-2xl pr-2 pl-5 font-semibold">I make software that solves </h2>
            <h2 className="text-2xl pr-36 pl-5 text-alternative-text-color font-semibold">your problems</h2>
            </div>
            
        </section>
        <img className="w-full h-full" src="/assets/triang.png" alt="Triangle"/>
        </div>
        </>

        
    )
}

export default FirstSection;