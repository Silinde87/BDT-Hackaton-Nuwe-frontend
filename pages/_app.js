import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div>
				<Toaster />
			</div>
			<Head>
				<title>BDT Hackaton - Pau Rodriguez</title>
				<meta name="description" content="BDT Hackaton by Pau Rodríguez" />
				<link rel="icon" href="/icons/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
