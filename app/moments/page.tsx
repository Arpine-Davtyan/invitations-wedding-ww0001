import Gallery from "@/components/Gallery"

const Moments = () => {
    return (
        <section className="bg-section-background">
            <div className="flex-col-center px-8 py-12 sm:py-16 gap-4">
                <h3>Our Story in Frames</h3>
                <h2>A Glimpse of Us</h2>
                <Gallery />
            </div>
        </section>
    )
}

export default Moments
