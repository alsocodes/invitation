import React, { useEffect, useState } from 'react';
import LayoutUndangan from '../components/LayoutUndangan';
const ListTamu = ({ guests }) => {
    const [showCopied, setShowCopied] = useState(false);
    const CopyMe = (TextToCopy) => {
        var TempText = document.createElement('input');
        TempText.value = TextToCopy;
        document.body.appendChild(TempText);
        TempText.select();

        document.execCommand('copy');
        document.body.removeChild(TempText);
        setShowCopied(true);
        // alert('Copied the text: ' + TempText.value);
    };

    useEffect(() => {
        if (showCopied) {
            const sto = setTimeout(() => {
                setShowCopied(false);
            }, 1000);
            return () => {
                clearInterval(sto);
            };
        }
    }, [showCopied]);

    return (
        <LayoutUndangan pageTitle={`Mega & Erik Wedding`}>
            <div className="container py-4">
                <h2 className="mb-2 mt-2">Daftar Tamu Undangan</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {guests?.map((row) => {
                            const text = `_Assalamu'alaikum Warahmatullahi Wabarakaatuh_\r\n\r\nTanpa mengurangi rasa hormat, izinkan kami mengundang Bapak/Ibu/Saudara/i *__thename__*  untuk hadir serta memberikan do'a restu pada acara pernikahan kami.\r\n\r\nUntuk detail acara, lokasi, dan ucapan bisa klik link dibawah ini:\r\nhttps://mega-ery.invits.my.id/__theid__\r\n\r\nMerupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i *__thename__* berkenan hadir.\r\n\r\nDo'a restu Anda merupakan hadiah terindah bagi kami.\r\n\r\nAtas kehadiran dan do'a restu yang telah diberikan, kami ucapkan terima kasih.\r\n\r\n_Wassalamu'alaikum Warahmatullahi Wabarakatuh._`;
                            const textBody = text.replace(/__thename__/g, row.name).replace(/__theid__/g, row.id);
                            return (
                                <tr key={row.id}>
                                    <td>{row.name}</td>
                                    <td>{row.phone}</td>
                                    <td>{row.address}</td>
                                    <td>
                                        {/* {textBody} */}
                                        {row.phone !== '' && (
                                            <a
                                                rel="noreferrer"
                                                target="_blank"
                                                href={`https://wa.me/${row.phone}?text=${encodeURIComponent(textBody)}`}
                                                className="btn btn-primary btn-sm"
                                            >
                                                Whatsapp
                                            </a>
                                        )}
                                        {'  '}
                                        <button
                                            className="btn btn-info btn-sm ml-2"
                                            onClick={() => CopyMe(`https://mega-ery.invits.my.id/${row.id}`)}
                                        >
                                            Copy link
                                        </button>{' '}
                                        {showCopied && (
                                            <small className="text-info">
                                                <i>copied</i>
                                            </small>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </LayoutUndangan>
    );
};

export async function getServerSideProps({ query }) {
    // // Fetch data from external API
    const api_url = process.env.API_URL;
    const { one } = query;
    const res = await fetch(`${api_url}/api/guest`);
    const guests = await res.json();
    console.log(guests);

    return { props: { guests: guests } };
}

export default ListTamu;
