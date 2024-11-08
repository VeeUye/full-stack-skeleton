import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Testing Environment', () => {
    it('has working jest-dom matchers', () => {
        render(<div data-testid="test">Test</div>);

        const element = screen.getByTestId('test');

        // Verify that the matchers work
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
        expect(element).toHaveTextContent('Test');
    });
});