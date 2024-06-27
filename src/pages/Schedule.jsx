import Pager from "../components/Pager";

export default function Schedule() {
    return (
        <>
            <div className="bg-zinc-900 h-screen w-full py-20 ">
                <Pager number="07" content="Daily Schedule" color="white" />
                <div className="flex justify-center mt-10">
                    <div className="flex justify-center relative p-8">
                        <div className="h-[50vh] w-[50vh] rounded-[20rem] flex bg-[url('/schedule01.jpg')] flex-col justify-center items-center bg-cover  text-center">
                            <h1 className="font-bold uppercase text-sm text-white">
                                Day 1 (March 22)
                            </h1>

                            <p className="text-[0.8rem] mt-2 w-[80%] text-white">
                                Opening acts and headliners,Kicking off at 2 PM.
                            </p>
                        </div>
                        <div className="h-[50vh] -translate-x-6  w-[50vh] rounded-[20rem] flex flex-col bg-[url('/schedule02.jpg')] bg-cover justify-center items-center text-center">
                            <h1 className="font-bold uppercase text-sm text-white">
                                Day 2 (March 23)
                            </h1>
                            <p className="text-[0.8rem] mt-2 w-[80%] text-white">
                                Full day of performances and activities. Starting at 12 PM.
                            </p>
                        </div>
                        <div className="h-[50vh] -translate-x-10  w-[50vh] rounded-[20rem] bg-[url('/schedule03.jpg')] bg-cover flex flex-col justify-center items-center text-center">
                            <h1 className="font-bold uppercase text-sm text-white">
                                Day 3 (March 24)
                            </h1>
                            <p className="text-[0.8rem] mt-2 w-[80%] text-white ">
                                Closing acts and Special Events, Beginning at 12 PM and Ending with a grand finale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
