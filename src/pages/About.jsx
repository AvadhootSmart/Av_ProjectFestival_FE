import Pager from "../components/Pager";

export default function About() {
    return (
        <>
            <div className="bg-zinc-200 h-screen w-full py-8 border-b-2 border-zinc-400">
                <Pager number="02" content="About The Festival" color="black" />
                <div className="flex justify-center">
                    <h1 className="text-black text-[2rem] w-[60vw] p-4 font-[Poppins]">
                        With a stunning lineup of headliners and immersive experiences, this
                        is the must attend event of the summer
                    </h1>
                </div>
                <hr />
                <div className="mt-10 flex flex-col items-end gap-4 px-10 py-6">
                    <p className="capitalize text-black text-xl w-[55vw]">
                        sunset music festival is back for its 14th edition, promising an
                        unparalleled celebration of music, art and culture. join us for
                        three days of unforgettable performances
                    </p>
                    <div className="font-[poppins] w-[55vw]">
                        <button
                            className=" bg-black text-white font-[Poppins] w-[15vw] p-2 rounded-full  uppercase"
                            type="button"
                        >
                            More about us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
