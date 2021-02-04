import React from "react";

//include images into your bundle

import { MyNavbar } from "./Mynavbar";
import { Jumbotron } from "./jumbotron";
import { MyCard } from "./MyCard";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<MyNavbar />
			<Jumbotron
				title="Adventure Time"
				subtitle="Finn, un chico de 12 años, lucha contra el mal en la Tierra de Ooo. Ayudado por su canino mágico, Jake, Finn recorre la Tierra de Ooo reparando lo incorrecto y luchando contra el mal, provocado por el Rey del Hielo."
				description="Ellos viven en la Tierra post-apocaliptica de Ooo, a Finn le gusta la dulce princesa."
				label="Tu tranquilo y yo nervioso"
				link="https://youtu.be/bVPQ_h4-IR4"
			/>
			<div className="card-deck">
				<MyCard
					cardTitle="Finn Mertens Campbell"
					description="El heroe de Ooo."
					image="https://i.pinimg.com/originals/52/c5/48/52c548bf41f674f82a75b96c6a818cc2.jpg"
				/>
				<MyCard
					cardTitle="Jake the Dog"
					description="Un perro magico y el mejor amigo de Finn."
					image="https://pbs.twimg.com/profile_images/1043136962671140864/ia4MDLcu_400x400.jpg"
				/>
				<MyCard
					cardTitle="BMO"
					description="Amigo de Finn de Jake, se convierte en el rey de Ooo."
					image="https://tvline.com/wp-content/uploads/2020/07/adventure-time-bmo.jpg?w=620"
				/>
			</div>
		</div>
	);
}
