import * as React from 'react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';

function SvgMinimize(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="minimize_svg__feather minimize_svg__feather-minimize"
            role="img"
            {...props}
        >
            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
        </svg>
    );
}

SvgMinimize.propTypes = {
    title: PropTypes.string,
};
export default SvgMinimize;
