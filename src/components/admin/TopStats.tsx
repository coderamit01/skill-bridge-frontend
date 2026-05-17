import { IUser, Role } from "@/types/user.types";

const TopStats = ({ users }: { users: IUser[] }) => {
  console.log(users);
  const stats = {
    totalUser: users.filter((u) => u.role === Role.STUDENT),
    totalTutor: users.filter((u) => u.role === Role.TUTOR),
  };
  return (
    <div>
      <div>{stats.totalUser}</div>
      <div>{stats.totalTutor}</div>
    </div>
  );
};

export default TopStats;
