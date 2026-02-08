import { Card } from "@/components/ui/card";
import { userInfo } from "@/service/user.service";
import Image from "next/image";

export default async function UserInfo() {
  const data = await userInfo.getUser();
  const user = data.user;
  return (
    <Card className="p-5">
      <div className="flex flex-col items-center space-y-1">
        <Image
          src={user.image ? user.image : "/images/avatar.jpg"}
          height={100}
          width={100}
          alt={user.name}
          className="mb-2"
        />
        {user.name && <h3>Name: {user.name}</h3>}
        {user.email && <h3>Email: {user.email}</h3>}
        {user.role && <h3>Role: {user.role}</h3>}
      </div>
    </Card>
  );
}
