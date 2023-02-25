import { Suspense } from "react";
import Loader from "./Loader";

type Props = {
  children: JSX.Element;
};

const LazyLoad = ({ children }: Props) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default LazyLoad;
