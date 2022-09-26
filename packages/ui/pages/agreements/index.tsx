import React from "react";
import { Card, Button } from "@nation3/components";
import { shortenHash } from "../../utils/strings";
import { useRouter } from "next/router";

const Agreements = () => {
	const router = useRouter();

	const agreements = [
		"0x72bbcec4f7f854643fcca20980eb1d48caf12d302899ccc41d78391d9d93b373",
		"0xb2658be417fb4d4080eaaba22dab3858927481619360c2ec15db4e5d0bba9ad6",
		"0x6aeaa0870eee90c36c7fdc7d384a599c3ab9de415cbe5394056c03746c57f2de",
	];

	return (
		<div>
			<Card className="flex flex-col items-center items-stretch gap-8 w-screen max-w-3xl text-gray-800">
				<div className="flex flex-row items-center justify-between gap-2 text-gray-700">
					<h1 className="font-display font-medium text-2xl">Your Agreements</h1>
					<div className="basis-1/4">
						<Button label="Create an agreement" onClick={() => router.push("/agreements/create")} />
					</div>
				</div>
				<div className="flex-row w-max">
					{agreements.map((agreementId) => (
						<div key={agreementId} onClick={() => router.push(`/agreements/${agreementId}`)}>
							{shortenHash(agreementId)}
						</div>
					))}
				</div>
			</Card>
		</div>
	);
};

export default Agreements;
