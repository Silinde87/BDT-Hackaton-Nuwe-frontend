import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div>
				<Toaster />
			</div>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
