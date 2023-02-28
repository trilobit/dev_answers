import React from 'react';

interface OverlayProps {
    onClick: () => void;
}

const Overlay = ({onClick}: OverlayProps) => (
    <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        cursor: 'pointer'
    }}
         onClick={onClick}
    />
);

export {Overlay}
