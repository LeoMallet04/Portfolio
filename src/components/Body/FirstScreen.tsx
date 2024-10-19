function FirstScreen(){
    return (
        <>
        <section className="flex flex-row items-center justify-center pt-40">
            <div className="pr-72">
            <h1 className="text-9xl font-bold text-name-color">Leonardo
            </h1>
            <h1 className="text-9xl font-bold pr-28 ">Scheidt</h1>
            {/* <h1 className="text-xl font-bold text-gray-300 opacity-60 pr-80 pt-5">Front-End Developer</h1> */}
            </div>
            
            <div>
            <h2 className="text-2xl pl-2 font-semibold">Faço softwares que resolvem </h2>
            <h2 className="text-2xl pr-32 text-alternative-text-color font-semibold">problemas reais</h2>
            </div>
        </section>
        <img src="src/assets/Triangle.svg" alt="Triangle" />
        </>
        
    )
}

export default FirstScreen;