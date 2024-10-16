function Bloc(props: {img_url: string, option: number}){
    return(

        props.option === 1 ? (
            <div className="h-[90px] w-[90px] bg-white rounded-xl shadow-white m-2  "> <img src={props.img_url} alt="" /></div>

        ): props.option === 2 ? (
            <div className="h-[275px] w-[325px] bg-gray-200 rounded-xl shadow-gray m-2"></div>

        ): null
       
    )
}

export default Bloc;