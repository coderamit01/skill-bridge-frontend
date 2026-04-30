import { Card } from "@/components/ui/card";
import { getUser } from "@/service/user.service";
import Image from "next/image";
import { UserEditModal } from "./userEditModal";

export default async function UserProfile() {
  const { data }: any = await getUser();
  const user = data.user;
  console.log(user);
  return (
    <Card className="p-5">
      <div className="relative flex flex-col items-center space-y-1">
        <div className="absolute right-1 top-1">
          <UserEditModal user={user} />
        </div>
        <Image
          src={user.image ? user.image : "/images/avatar.jpg"}
          height={100}
          width={100}
          alt={user.name}
          className="mb-2 w-25 rounded"
        />
        {user.name && <h3>Name: {user.name}</h3>}
        {user.email && <h3>Email: {user.email}</h3>}
        {user.role && <h3>Role: {user.role}</h3>}
      </div>
    </Card>
  );
}
