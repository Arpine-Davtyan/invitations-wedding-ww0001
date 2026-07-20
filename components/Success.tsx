import { CheckCircleIcon, HeartIcon } from "@phosphor-icons/react";

interface SuccessProps {
    attendance: boolean;
    fullName: string;
    number: number;
}

const Success = ({ attendance, fullName, number }: SuccessProps) => {
    return (
        <div className="w-full max-w-2xl mx-auto rounded-2xl border border-light-gold shadow-xl bg-white p-8 sm:p-12 text-center space-y-5">
            <CheckCircleIcon
                size={64}
                weight="duotone"
                className="mx-auto text-gold"
            />

            {attendance ? (
                <>
                    <h2 className="flex-center text-3xl font-cormorant-garamond font-bold text-gold">
                        Thank you, {fullName}!
                        <HeartIcon
                            size={20}
                            weight="fill"
                            className="text-gold inline-block ml-2"
                        />
                    </h2>

                    <p className="text-dark text-sm font-mulish">
                        We are so happy that you will celebrate this special day with us.
                    </p>

                    <p className="text-dark text-sm font-mulish">
                        Guests: {number}
                    </p>
                </>
            ) : (
                <>
                    <h2 className="flex-center text-3xl font-cormorant-garamond font-bold text-gold">
                        Thank you, {fullName}!
                        <HeartIcon
                            size={20}
                            weight="fill"
                            className="text-gold inline-block ml-2"
                        />
                    </h2>

                    <p className="text-dark text-sm font-mulish">
                        We appreciate your response and wish you all the best.
                    </p>
                </>
            )}
        </div>
    )
}

export default Success
