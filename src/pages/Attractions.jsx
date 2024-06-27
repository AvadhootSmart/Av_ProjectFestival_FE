import Pager from "../components/Pager";

export default function Attractions() {
    return (
        <>
            <div className="bg-zinc-200 min-h-screen w-full py-8 border-b-2 border-zinc-400">
                <Pager number="03" content="Main Attractions" color="black" />
                <div className="flex justify-center">
                    <h1 className="text-black text-[2rem] w-[60vw] p-2 font-[Poppins]">
                        Our mission is to create an unforgettable experience that brings
                        together music lovers from all over the world
                    </h1>
                </div>
                <div className="flex justify-center relative p-8">
                    <div className="h-[50vh] w-[50vh] border-black border-2 rounded-[20rem] flex flex-col justify-center items-center text-center">
                        <h1 className="font-bold uppercase text-sm">Top artists</h1>

                        <p className="text-[0.8rem] mt-2 w-[80%]">
                            Enjoy live performances from renowned musicians and djs across
                            multiple stages
                        </p>
                    </div>
                    <div className="h-[50vh] -translate-x-6  w-[50vh] border-black border-2 rounded-[20rem] flex flex-col bg-zinc-200 justify-center items-center text-center">
                        <h1 className="font-bold uppercase text-sm">Immersive art</h1>
                        <p className="text-[0.8rem] mt-2 w-[80%]">
                            Explore captivating art installations and interactive experiences
                        </p>
                    </div>
                    <div className="h-[50vh] -translate-x-10  w-[50vh] border-black border-2 rounded-[20rem] bg-zinc-200 flex flex-col justify-center items-center text-center">
                        <h1 className="font-bold uppercase text-sm">Gourmet food</h1>
                        <p className="text-[0.8rem] mt-2 w-[80%]">
                            Savor a diverse array of food and beverages from top vendors
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
