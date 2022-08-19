

const Section = ({children}:any) => {
   return (
    <>
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
            <div className="flex flex-col justify-center h-full">
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-2xl border border-gray-200">
                    {children}
                </div>
            </div>
        </section>
    </>
   )
}

export default Section

