import { ISidebarItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for conditional class names

type IProps = {
  item: ISidebarItem;
};

const SidebarLink = ({ item }: IProps) => {
  const linkPath =`/dashboard/${item.path}`;
  const pathName = usePathname();
  const isActive = pathName === linkPath;

  return (
    <Link
      key={item.title}
      href={linkPath}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
        isActive
          ? "bg-muted text-primary"
          : "text-muted-foreground hover:text-primary"
      )}
    >
      <item.icon className="h-4 w-4" />
      {item.title}
    </Link>
  );
};

export default SidebarLink;