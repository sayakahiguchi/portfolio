import * as React from 'react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';

function SvgTag(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tag_svg__feather tag_svg__feather-tag"
            role="img"
            {...props}
        >
            <path d="m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" />
        </svg>
    );
}

SvgTag.propTypes = {
    title: PropTypes.string,
};
export default SvgTag;
