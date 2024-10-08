import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export function BreadcrumbWithCustomSeparator({
  links,
}: {
  links: {
    label: string;
    to: string;
    active?: boolean;
  }[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((link, i) => {
          if (i !== links.length - 1) {
            return (
              <div
                key={link.label}
                className="flex items-center justify-center gap-2">
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link to={link.to}>{link.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </div>
            );
          }
          return (
            <div key={link.label}>
              <BreadcrumbItem
                className="text-black font-semibold"
                key={link.label}>
                <BreadcrumbLink>
                  <Link to={link.to}>{link.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
