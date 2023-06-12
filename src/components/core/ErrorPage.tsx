import Typography from "@mui/material/Typography";
interface ErrorPageProps {
  title: string;
  subTitle: string;
  description: string;
  image: any;
  width?: string | number;
  height?: string | number;
}

const ErrorPage = ({
  title,
  subTitle,
  description,
  image,
  width = "100vw",
  height = "100vh",
}: ErrorPageProps) => {
  return (
    <div
      id="error-boundary-page"
      style={{ backgroundImage: `url(${image})`, width, height }}
    >
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h3">{subTitle}</Typography>
      <Typography variant="h5">{description}</Typography>
    </div>
  );
};

export default ErrorPage;
