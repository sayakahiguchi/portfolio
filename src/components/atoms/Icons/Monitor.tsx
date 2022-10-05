import * as React from 'react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';

function SvgMonitor(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="monitor_svg__feather monitor_svg__feather-monitor"
            role="img"
            {...props}
        >
            <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
            <path d="M8 21h8M12 17v4" />
        </svg>
    );
}

SvgMonitor.propTypes = {
    title: PropTypes.string,
};
export default SvgMonitor;
