import RSVPForm from "@/components/RSVPForm"

const RSVP = () => {
    return (
        <section className="flex-col-center bg-section-background px-8 py-12 sm:py-16 gap-4">
            <div className="flex-col-center">
                <h3>Will You Join Us?</h3>
                <h2>Kindly RSVP</h2>
            </div>
            <RSVPForm />
        </section>
    )
}

export default RSVP
