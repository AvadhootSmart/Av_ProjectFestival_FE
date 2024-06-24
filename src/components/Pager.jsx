export default function Pager(props) {
    return (
        <>
            <div className={`flex px-10 py-4 gap-2 items-center text-${props.color} font-[Poppins]`}>
                <div>#{props.number}</div>
                <div className={`w-[10%] h-[2px] bg-${props.color} rounded-full`}></div>
                <div>{props.content}</div>
            </div>
        </>
    );
}
