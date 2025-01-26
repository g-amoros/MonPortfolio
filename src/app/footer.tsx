export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="w-full h-auto">
                <div className="grid text-center gap-1 text-base justify-center items-center mx-auto w-[80%] h-full">
                    <h6 className="font-roberto font-light text-[#EFEFEF80]">
                        Tous droits réservés - {currentYear}
                    </h6>
                    <h6 className="font-roberto font-light text-[#EFEFEF80]">
                        Conçu et développé par{' '}
                        <span className="font-bold font-degular text-lg">
                            Gaël AMOROS
                        </span>
                        .
                    </h6>
                </div>
            </div>
        </>
    );
}
