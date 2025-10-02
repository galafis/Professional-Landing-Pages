import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    expect(screen.getByText(/Soluções Profissionais para o Seu Negócio/i)).toBeInTheDocument();
  });

  it('renders the author name in the header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Gabriel Demetrios Lafis/i })).toBeInTheDocument();
  });

  it('renders the features section heading', () => {
    render(<App />);
    expect(screen.getByText(/Nossos Recursos/i)).toBeInTheDocument();
  });

  it('renders the testimonials section heading', () => {
    render(<App />);
    expect(screen.getByText(/O Que Nossos Clientes Dizem/i)).toBeInTheDocument();
  });

  it('renders the contact section heading', () => {
    render(<App />);
    expect(screen.getByText(/Entre em Contato/i)).toBeInTheDocument();
  });

  it('renders the footer with copyright information', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Gabriel Demetrios Lafis. Todos os direitos reservados.`, 'i'))).toBeInTheDocument();
  });
});

