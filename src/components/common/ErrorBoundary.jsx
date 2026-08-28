import React, { Component } from 'react';
import Button from './Button';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error securely without exposing details to user interface
    console.error("ÉLAN Studio application error captured:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#14100E] text-[#F7F3EB] flex items-center justify-center p-6 text-center">
          <div className="max-w-lg p-8 md:p-12 rounded-sm glass-panel border border-[#C5A880]/30 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/40 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-[#E5C590]" />
            </div>

            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium block mb-2">
              ÉLAN Beauty Studio
            </span>

            <h1 className="text-2xl md:text-3xl font-serif text-[#FDFBF7] mb-4">
              Something Interrupted the Experience
            </h1>

            <p className="text-sm text-[#CFC0A8] font-light leading-relaxed mb-8">
              We apologize for the brief inconvenience. Please refresh the studio experience or return to our main gallery.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={this.handleReload} variant="primary" icon={RefreshCw} iconPosition="left">
                Refresh Page
              </Button>
              <Button to="/" variant="secondary" icon={Home} iconPosition="left">
                Return Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
