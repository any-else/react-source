import { useTranslation } from "react-i18next";
import Images from "src/assets/images";
import ErrorPage from "../components/core/ErrorPage";

const NotFound = () => {
  const { t } = useTranslation("errors");
  return (
    <ErrorPage
      title="404"
      subTitle={t("not_found")}
      description=""
      image={Images.errors.notFound}
    />
  );
};

export default NotFound;
