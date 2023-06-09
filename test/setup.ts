import '@testing-library/jest-dom';

import { create } from 'match-media-mock';

// Configure the mock implementation for matchMedia
window.matchMedia = create();