import * as React from 'react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';

function SvgIconLayout(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-layout_svg__feather icon-layout_svg__feather-layout"
            role="img"
            {...props}
        >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <path d="M3 9h18M9 21V9" />
        </svg>
    );
}

SvgIconLayout.propTypes = {
    title: PropTypes.string,
};
export default SvgIconLayout;
