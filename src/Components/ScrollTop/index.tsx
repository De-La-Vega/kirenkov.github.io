import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import './index.scss';

export const ScrollTop: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const svgPath = useRef(null);

    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

    const updateDashoffset = () => {
        const { current } = svgPath;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const pathLength = current.getTotalLength();
        const dashoffset = pathLength - (getTop() * pathLength / height);

        current.style.strokeDasharray = `${pathLength} ${pathLength}`;
        current.style.transition = 'stroke-dashoffset 20ms';
        current.style.strokeDashoffset = dashoffset;
    };

    const handleScroll = (): void => {
        updateDashoffset();

        setIsActive(getTop() > window.innerHeight);
    };

    const handleClick = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    };

    useEffect(
        () => {
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);
            };
        },
        []
    );

    return (
        <div
            className={classNames('scroll-up', {
                'scroll-up--active': isActive,
            })}
            onClick={handleClick}
        >
            <svg className="scroll-up__svg" viewBox="-2 -2 52 52" width="50" height="50">
                <path
                    ref={svgPath}
                    className="scroll-up__svg-path"
                    d="
                        M24,0
                        a24,24 0 0,1 0,48
                        a24,24 0 0,1 0,-48
                    "
                />
            </svg>
        </div>
    );
};
