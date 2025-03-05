import { Suspense, type FC } from "react";
import { DataFetcher } from "./data-fetcher";
import { fetchData } from "./fetch-data";

const Page: FC = () => {
	const dataPromise = fetchData();

	return (
		<div className="flex h-screen items-center justify-center">
			<h1>Page</h1>
			<Suspense fallback={<div>loading...</div>}>
				<DataFetcher dataPromise={dataPromise} />
			</Suspense>
		</div>
	);
};

export default Page;
