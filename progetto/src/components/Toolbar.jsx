import React from 'react';

const Toolbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-customBlue text-white flex items-center justify-center z-20">
            <p className="uppercase text-xs tracking-widest text-center px-4 py-3">
                Copyright © 2024 Find & Fix.
            </p>
        </div>
    );
};

export default Toolbar;
