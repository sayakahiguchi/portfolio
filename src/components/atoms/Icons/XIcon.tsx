import * as React from 'react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';

function SvgXIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="x-icon_svg__feather x-icon_svg__feather-x"
            role="img"
            {...props}
        >
            <path d="M18 6 6 18M6 6l12 12" />
        </svg>
    );
}

SvgXIcon.propTypes = {
    title: PropTypes.string,
};
export default SvgXIcon;
