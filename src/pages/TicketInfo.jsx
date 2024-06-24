import Pager from "../components/Pager";
import Ticket from "../components/Ticket";

export default function TicketInfo() {
    return (
        <>
            <div className="h-screen bg-zinc-200 w-full py-6 ">
                <Pager number="05" content="Ticket Information" color="black" />
                <div className="flex justify-center">
                    <h1 className="text-black text-[2rem] w-[60vw] p-2 font-[Poppins]">
                        Choose from a variety of ticket options organized by sunset events
                    </h1>
                </div>
                <div className="flex justify-center gap-4 my-6">
                    <Ticket packageName="VIP Pass" price="19" />
                    <Ticket packageName="Premium Package" price="29" />
                </div>
            </div>
        </>
    );
}
