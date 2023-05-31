import React from 'react';

const WithSuspense = (Component: any) => {
    return () => <React.Suspense fallback={<div>Loading...</div>}>
                <Component/>
            </React.Suspense>

};

export default WithSuspense;