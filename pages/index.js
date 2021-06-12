import Head from "next/head";
import Link from "next/link";
import HomeCard from "../components/HomeCard/HomeCard";
import Title from "../components/Title/Title";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>BDT Hackaton - Pau Rodriguez</title>
				<meta name="description" content="BDT Hackaton by Pau Rodríguez" />
				<link rel="icon" href="/icons/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Title
					title={"¡Únete a la comunidad!"}
					label={"Para empezar, dinos que cuenta te gustaría abrir."}
				/>
				<HomeCard
					icon={"Polygon 3-1.png"}
					title={"Developers"}
					text={"Cuenta personas para entrar en el mundo dev"}
				/>
				<HomeCard
					icon={"Polygon 3.png"}
					title={"Business"}
					text={"Tienes o perteneces a una compañía"}
				/>
				<p>
					Ya tienes una cuenta?{" "}
					<Link href="/login">
						<a>Inicia sesión</a>
					</Link>
				</p>
			</main>
		</div>
	);
}
