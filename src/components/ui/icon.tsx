import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof Icons;
  fallback?: keyof typeof Icons;
}

const Icon = ({ name, fallback = "CircleAlert", ...props }: IconProps) => {
  const LucideIcon = Icons[name] || Icons[fallback];
  return <LucideIcon {...props} />;
};

export default Icon;
