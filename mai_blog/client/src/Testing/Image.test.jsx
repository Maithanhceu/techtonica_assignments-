import { render, screen } from '@testing-library/react';
import Image from '../Components/Image';
import { describe, it, expect } from 'vitest';

describe('Image Component', () => {
  it('renders image for Paris', () => {
    render(<Image location="Paris" />);
    const img = screen.getByAltText("Paris");
    expect(img).toBeTruthy(); 
  });

  it('renders image for Vancouver', () => {
    render(<Image location="Vancouver" />);
    const img = screen.getByAltText("Vancouver");
    expect(img).toBeTruthy(); 
  });

  it('renders image for New Orleans', () => {
    render(<Image location="New Orleans" />);
    const img = screen.getByAltText("New Orleans");
    expect(img).toBeTruthy(); 
  });
});