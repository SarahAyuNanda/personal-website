"use client";

import { PrimaryButton, SecondaryButton } from "@/components/atoms";
import { Props, State } from "@/components/templates/error-page/boundary/model";
import { ArrowLeft, Ban, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { Component, ErrorInfo } from "react";

export class ErrorBoundaryPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: false, message: "" };
  }

  static getDerivedStateFromError(error: Error) {
    return { error: true, message: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <section className="font-poppins flex min-h-dvh flex-col items-center justify-center bg-gray-50 p-4">
          <div className="w-full max-w-xl min-w-lg rounded-md bg-white p-8 border border-gray-100">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-primary/10 rounded-full p-4">
                <Ban className="text-primary size-8" />
              </div>

              <div className="text-center">
                <h1 className="mb-2 text-xl font-semibold text-primary">
                  An Error Occurred
                </h1>
                <p className="mb-4 text-gray-600">
                  An unexpected error has occurred. Please try again later.
                </p>

                <div className="text-sm text-gray-500">
                  If this problem persists, please contact our support
                  <span className="flex justify-center">
                    <Link
                      href="mailto:nanda.sarahayu@gmail.com"
                      className="text-primary hover:text-primary/90 after:bg-primary/90 relative flex w-max items-center justify-center gap-2 text-sm font-medium transition-all duration-150 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:transition-all after:duration-150 hover:after:w-full"
                    >
                      nanda.sarahayu@gmail.com
                    </Link>
                  </span>
                  or try refreshing the page.
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
                <PrimaryButton
                  className="group"
                  onClick={() => window.location.replace('/')}
                >
                  <ArrowLeft className="group-hover:animate-wiggle-more size-4!" />
                  Back to Home
                </PrimaryButton>
                <SecondaryButton
                  aria-label="refresh-page"
                  onClick={() => window.location.reload()}
                  className="group"
                >
                  Refresh Page
                  <RefreshCcw className="group-hover:animate-wiggle-more size-4!" />
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
