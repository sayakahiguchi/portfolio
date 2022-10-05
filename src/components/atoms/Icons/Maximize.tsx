import * as React from 'react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';

function SvgMaximize(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="maximize_svg__feather maximize_svg__feather-maximize"
            role="img"
            {...props}
        >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
    );
}

SvgMaximize.propTypes = {
    title: PropTypes.string,
};
export default SvgMaximize;
