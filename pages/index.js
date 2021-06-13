import Link from "next/link";
import HomeCard from "../components/HomeCard/HomeCard";
import Title from "../components/Title/Title";
import styles from "../styles/Home.module.css";
import FrontInfoText from "../components/FrontInfoText/FrontInfoText";

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<FrontInfoText />
				<section className={styles.menu}>
					<Title
						title={"¡Únete a la comunidad!"}
						label={"Para empezar, dinos que cuenta te gustaría abrir."}
					/>
					<Link href="/register/personal-info">
						<a>
							<HomeCard
								icon={"Polygon 3-1.png"}
								title={"Developers"}
								text={"Cuenta personas para entrar en el mundo dev"}
							/>
						</a>
					</Link>
					<Link href="/register/personal-info">
						<a>
							<HomeCard
								icon={"Polygon 3.png"}
								title={"Business"}
								text={"Tienes o perteneces a una compañía"}
							/>
						</a>
					</Link>
					<p className={styles.linkContainer}>
						Ya tienes una cuenta?{" "}
						<Link href="/">
							<a className={styles.link}>Inicia sesión</a>
						</Link>
					</p>
				</section>
			</main>
		</div>
	);
}
