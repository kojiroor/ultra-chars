import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '../ui/Pagination';

describe('Pagination', () => {
  it('renders correct number of page buttons', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    const pageButtons = screen.getAllByRole('button', { name: /^ページ \d+$/ });
    expect(pageButtons).toHaveLength(5);
  });

  it('highlights current page', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={() => {}} />);
    const page2 = screen.getByRole('button', { name: 'ページ 2' });
    expect(page2).toHaveAttribute('aria-current', 'page');
  });

  it('calls onPageChange when page clicked', () => {
    const onPageChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'ページ 3' }));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('disables previous button on first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: '前のページ' })).toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: '次のページ' })).toBeDisabled();
  });

  it('enables navigation buttons on middle page', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByRole('button', { name: '前のページ' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: '次のページ' })).not.toBeDisabled();
  });
});
