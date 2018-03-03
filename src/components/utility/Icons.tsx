import * as React from 'react';
import { SvgIconProps } from '../../../types';

export const LinkedInIcon = ({ height, width }: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    width={width || '24px'}
    height={height || '24px'}
  >
    <path
      d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
      fillRule="nonzero"
    />
  </svg>
);

export const GitHubIcon = ({ height, width }: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '26px'}
    height={height || '26px'}
    fillRule="evenodd"
    strokeMiterlimit="1.414"
    viewBox="0 0 16 16"
    clipRule="evenodd"
    strokeLinejoin="round"
  >
    <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8" />
  </svg>
);

export const EmailIcon = ({ height, width }: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '26px'}
    height={height || '26px'}
    viewBox="-293 385 24 24"
  >
    <path d="M-281 385c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm7 7l-7 5.7-7-5.7h14zm0 10h-14v-8.5l7 5.7 7-5.7v8.5z" />
  </svg>
);

export const DownloadIcon = ({ height, width }: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '26px'}
    height={height || '26px'}
    viewBox="0 0 512 512"
  >
    <path d="M256 0A256 256 0 0 0 0 256a256 256 0 0 0 256 256 256 256 0 0 0 256-256A256 256 0 0 0 256 0zm-28.563 85.436h57.125v141.11h51.584L256 316.666l-80.146-90.12h51.583V85.435zM133 352h246v54H133v-54z" />
  </svg>
);
