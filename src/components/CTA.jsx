export default function CTA({ text, color }) {
    return (
        <>
            <div className="font-[poppins] px-20">
                <button
                    className={ `backdrop-blur-xl bg-${color}/20 text-white font-[Poppins] w-[15%] p-4 rounded-full uppercase`}
                    type="button"
                >
                    {text}
                </button>
            </div>
        </>
    );
}
