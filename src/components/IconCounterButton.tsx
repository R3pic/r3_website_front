import React, { useState } from 'react';
import { IconType } from 'react-icons';
import '../style/components/IconCounterButton.css';

interface IconCounterButtonProps {
    initialActive: boolean;
    initialCount: number;
    ActiveIcon: IconType;
    InactiveIcon: IconType;
    activeColor: string;
    hoverColor: string;
}

const IconCounterButton: React.FC<IconCounterButtonProps> = ({
    initialActive,
    initialCount,
    ActiveIcon,
    InactiveIcon,
    activeColor,
    hoverColor
}) => {
    const [active, setActive] = useState<boolean>(initialActive);
    const [count, setCount] = useState<number>(initialCount);

    const handleButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setActive(!active);
        setCount(prevCount => active ? prevCount - 1 : prevCount + 1);
    };

    return (
        <div className="post-interaction">
            <span
                className="icon-counter-button"
                onClick={handleButtonClick}
                style={{ '--active-color': activeColor, '--hover-color': hoverColor } as React.CSSProperties}
            >
                <span className="button-icon">
                    {active ? <ActiveIcon color={activeColor} /> : <InactiveIcon />}
                </span>
                <span className="button-count">{count}</span>
            </span>
        </div>
    );
};

export default IconCounterButton;
