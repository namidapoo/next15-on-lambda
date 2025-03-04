import type { FC } from 'react';
import { DataFetcher } from './data-fetcher';
import { fetchData } from './fetch-data';

const Page: FC = () => {
    const dataPromise = fetchData();

    return (
        <div>
            <h1>Page</h1>
            <DataFetcher dataPromise={dataPromise} />
        </div>
    );
}

export default Page;
