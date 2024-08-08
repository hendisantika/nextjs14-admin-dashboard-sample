'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();

    useEffect(() => {
        router.replace(`/login`);
    }, []);

    return (
        <div>Loading...</div>
    );
}

export default Page;
