'use client';

import { ReactNode, useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';


interface ProvidersProps {
children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {

    const [ mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) {
         return <>{children}</>;
    }

    return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
    );
}
