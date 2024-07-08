import React from "react";
import Spinner from "./spinner";

type LoaderProps = {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

const Loader = ({ loading, children, noPadding, className }: LoaderProps) => {
  return loading ? (
    <div className={cn(className || "w-full py-5 flex justify-center")}>
      <Spinner noPadding={noPadding} />
    </div>
  ) : (
    children
  );
};

export default Loader;
