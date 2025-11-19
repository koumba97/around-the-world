import './country-details-modal.scss';
import { Country } from '@/app/types/Country';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import CloseSVG from '@/app/svg/Close';

interface Prop {
    country: Country;
    isOpen: boolean;
}
export const CountryDetailsModal = ({ country, isOpen }: Prop) => {
    const [modalIsOpen, setModalIsOpen] = useState(isOpen);

    useEffect(() => {
        setModalIsOpen(isOpen);
    }, [isOpen]);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <Modal
            className="country-details-modal"
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
        >
            <div className="country-name-wrapper">
                <div
                    className="flag"
                    style={{
                        backgroundImage: `url(${country?.flags?.png})`,
                    }}
                ></div>
                <h2 className="country-name">{country.name.common}</h2>
            </div>
            <button
                className="close-button"
                onClick={() => setModalIsOpen(false)}
            >
                <CloseSVG width={30} height={30} viewBox="8 5 120 120" />
            </button>
            <div
                className="country-image"
                style={{
                    backgroundImage: `url(/countries/${country?.cca3}.jpg)`,
                }}
            ></div>

            <div className="country-map"></div>
        </Modal>
    );
};
