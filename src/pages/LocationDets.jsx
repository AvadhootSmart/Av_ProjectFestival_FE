import Pager from "../components/Pager";

export default function LocationDets() {
    return (
        <>
            <div className="bg-zinc-900 h-screen w-full py-6 overflow-hidden">
                <Pager number="06" content="Location Details" color="white" />
                <div className="flex justify-center">
                    <h1 className="text-white text-[2rem] w-[60vw] p-8 font-[Poppins]">
                        Sunset Music Festival 2024 will be held at Bayfront Park, a stunning
                        waterfront location in the heart of Miami. Easily accessible by
                        public transportation, with ample parking available
                    </h1>
                </div>
                <div className="flex justify-center mt-10 ">
                    <div className="bg-[url('/locationdets.jpg')] h-[50vh] w-[80vw] rounded-lg bg-cover"></div>
                </div>
            </div>
        </>
    );
}
