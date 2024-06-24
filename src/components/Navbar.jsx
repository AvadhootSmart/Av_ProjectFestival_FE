export default function Navbar() {
    return (
        <>
            <div className="flex justify-between px-8 py-6 font-[Poppins] ">
                <div className="left text-2xl text-white">Logo</div>
                <div className="right">
                    <ul className="flex backdrop-blur-xl bg-white/10  p-4 text-white gap-4 rounded-full">
                        <li>About</li>
                        <li>Buy Tickets</li>
                        <li>Venue</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
