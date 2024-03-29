import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Translate, {translate} from "@docusaurus/Translate";

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h2 className="hero__title">{siteConfig.title}</h2>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/intro">
						<Translate
							id="homepage.button"
							description="The homepage button to wiki introduction">
							✨ Make it work, make it right, make it fast ✨
						</Translate>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	/** const {siteConfig} = useDocusaurusContext(); ${siteConfig.title} */
	return (
		<Layout
			title={`Wiki`}
			description="A Swiss Army Knife for Zsh - Unix shell">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
