"use client";

import type { FC } from "react";
import { use } from "react";

type Props = {
	dataPromise: Promise<unknown>;
};

export const DataFetcher: FC<Props> = ({ dataPromise }) => {
	const data = use(dataPromise);

	return <pre> {JSON.stringify(data, null, 2)}</pre>;
};
