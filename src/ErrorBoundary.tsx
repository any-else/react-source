import { Component } from "react";
import { withTranslation, WithTranslationProps } from "react-i18next";
import Images from "src/assets/images";
import ErrorPage from "./components/core/ErrorPage";

class ErrorBoundary extends Component<any, any> {
  constructor(props: WithTranslationProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const { i18n } = this.props;
    if (this.state.hasError) {
      return (
        <ErrorPage
          title="Oops!"
          subTitle={i18n?.t("errors:some_thing_went_wrong") || ""}
          description={i18n?.t("errors:we_are_working_on_it") || ""}
          image={Images.errors.default}
        />
      );
    }
    return this.props.children;
  }
}

export default withTranslation("errors")(ErrorBoundary);
