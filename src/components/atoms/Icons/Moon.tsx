import * as React from 'react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';

function SvgMoon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="Moon_svg__feather Moon_svg__feather-moon"
            role="img"
            {...props}
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

SvgMoon.propTypes = {
    title: PropTypes.string,
};
export default SvgMoon;
