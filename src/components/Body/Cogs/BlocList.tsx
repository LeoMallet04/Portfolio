import Bloc from "./Bloc";
function BlocList(props: {option: number}){
    return(
        props.option === 1 ? (
            <div>
                <ul className="flex flex-row pr-5 pl-5 pb-2">
                    <Bloc img_url="" option={1}></Bloc>
                    <Bloc img_url="" option={1}></Bloc>
                    <Bloc img_url="" option={1}></Bloc>
                    <Bloc img_url="" option={1}></Bloc>
                </ul>
                <ul className="flex flex-row pr-5 pl-5 pb-2">
                    <Bloc img_url="" option={1}></Bloc>
                    <Bloc img_url="" option={1}></Bloc>
                    <Bloc img_url="" option={1}></Bloc>
                    <Bloc img_url="" option={1}></Bloc>
                </ul>
            </div>
        ) : props.option === 2 ? (
            <div>
                <ul className="flex flex-row pr-5 pl-5 pb-2">
                    <Bloc img_url="" option={2}></Bloc>
                    <Bloc img_url="" option={2}></Bloc>
                    <Bloc img_url="" option={2}></Bloc>
                </ul>
            </div>
        ) : null
    )
}

export default BlocList;