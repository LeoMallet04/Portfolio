function BlocTecList(props: {children1: any, children2: any, children3: any}){
    return(
        <div className="pt-10">
            <ul className="flex flex-row pr-5 pl-5 pb-2">
                {props.children1}
            </ul>
            <ul className="flex flex-row pr-5 pl-5 pb-2">
                {props.children2}
            </ul>
            <ul className="flex flex-row pr-5 pl-5 pb-2">
                {props.children3}
            </ul>
        </div>
    
    )
}

export default BlocTecList;