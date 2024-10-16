function Topics(props: {title: string, description?: string | null, children: any}) {
    return (
        <section className="flex flex-col h-96 items-start p-14 pt-26">
            <h1 className="text-4xl font-bold pl-5">
                {props.title}
            </h1>

            {props.description && (
                <p className="pl-6 pt-5"> {props.description}</p>
            )}
            <div className="pt-10">
                {props.children}
            </div>
          
        </section>
    )
}

export default Topics;