import React from "react";

//include images into your bundle

import { Navbar } from "./navbar.js";
import { Boilerplate } from "./boilerplate";
import { MyCard } from "./card";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Boilerplate
				title="Qué es Google?"
				subtitle="Google, LLC es una compañía principal subsidiaria de la multinacional estadounidense Alphabet Inc., cuya especialización son los productos y servicios relacionados con Internet, software, dispositivos electrónicos y otras tecnologías."
				description="Es algo que nos ayuda a todos en la vida."
				label="Aprenda sobre gugul"
				link="https://es.wikipedia.org/wiki/Google"
			/>
			<MyCard
				cardTitle1="Finn"
				description1="asd"
				cardTitle2="Jake"
				description2="sda"
				cardTitle3="BMO"
				description3="asd"
			/>
		</div>
	);
}
