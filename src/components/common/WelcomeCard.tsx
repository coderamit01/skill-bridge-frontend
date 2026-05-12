import cartoon from "@/assets/cartoon.svg";
import watch from "@/assets/watch.png";
import { Env } from "@/env";
import { getBooks } from "@/services/bookings.service";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const getMe = async () => {
  try {
    const cookieStore = await cookies();
    const res = await fetch(`${Env.runtimeEnv.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: {
        cookie: cookieStore.toString()
      },
      cache: "no-store"
    });
    const data = await res.json()
    return data.data;
  } catch (error) {
    return error
  }
}

export const WelcomeCard = async () => {

  const books = await getBooks();
  console.log(books);

  const user = await getMe();
  const profileLink = () => {
    if (user?.role === "TUTOR") {
      return "/tutor/profile"
    } else if (user?.role === "STUDENT") {
      return "/dashboard/profile"
    } else {
      return "/admin/profile"
    }
  }
  return (
    <div className="card profile-box rounded-3xl p-5">
      <div className="card-body">
        <div className="flex media-wrapper justify-between">
          <div className="grow text-white">
            <div className="greeting-user">
              <h2 className="text-xl font-semibold line-clamp-1">Welcome {user?.name}!</h2>
              <p className="line-clamp-2">Here whats happing in your<br /> account today</p>
              <div className="pt-10">
                <Link href={profileLink()} className="text-sm border border-slate-50 rounded-md py-2 px-3 hover:bg-white hover:text-slate-700">View Profile</Link>
              </div>
            </div>
          </div>
          <div>
            <div className="clockbox">
              <Image src={watch} alt="Watch" className="h-10 w-10" />
            </div>
          </div>
        </div>
        <div className="cartoon flex justify-end">
          <Image className="max-w-full h-auto" src={cartoon} alt="vector women with leptop" />
        </div>
      </div>
    </div>
  )
}
