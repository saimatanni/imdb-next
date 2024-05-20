import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  console.log("title, Icon", title);
  return (
    <Link href={address} className=" hover:text-amber-500">
      <Icon className="text-2xl sm:hidden " />
      <p className="hidden text-sm uppercase sm:inline">{title}</p>
    </Link>
  );
};

export default MenuItem;
