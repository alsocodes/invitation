import React from 'react';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
const LayoutUndangan = (props) => {
    return (
        <div>
            {/* <NextNProgress
                color="#eb3d00"
                startPosition={0.8}
                stopDelayMs={100}
                height={2}
                showOnShallow={true}
                options={{ easing: 'ease', speed: 200, showSpinner: false, }}
            /> */}
            <Head>
                <title>{props?.pageTitle}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta content="" name="description" />
                <meta content="" name="keywords" />

                <link href="images/favicon.png" rel="icon" />
                <link href="images/apple-touch-icon.png" rel="apple-touch-icon" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Satisfy&family=Parisienne&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div>{props.children}</div>
            <div className="container">
                <div className="text-center text-sm py-2" style={{ fontSize: '0.7rem' }}>
                    <i className="bi bi-code-slash"></i> Created by{' '}
                    <a className="adev" href="https://also.my.id">
                        alsoProject
                    </a>
                    .
                </div>
            </div>
        </div>
    );
};
export default LayoutUndangan;
